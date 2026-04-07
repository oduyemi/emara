import { NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import { SupplierProfile } from "@/models/supplierProfile.model";
import { cookies } from "next/headers";
import { getAuthUser } from "@/utils/auth";

export async function POST(req: Request) {
  try {
    await dbConnect();

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const decoded = getAuthUser(token);
    if (!decoded?.userId) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    const body = await req.json();
    const { step, data } = body;

    let updateData: any = {};

    // =========================
    // STEP 1: COMPANY
    // =========================
    if (step === 1) {
      updateData = {
        company: {
          registeredName: data.companyName,
          tradingName: data.tradingName,
          registrationNumber: data.registrationNumber,
          yearEstablished: Number(data.yearEstablished),
          website: data.website,
          region: data.region,
          country: data.country,
          city: data.city,
          address: data.address,
        },
      };
    }

    // =========================
    // STEP 2: COMPLIANCE
    // =========================
    if (step === 2) {
      updateData = {
        compliance: {
          certifications: data.certifications || [],
        },
      };
    }

    // =========================
    // STEP 3: OPERATIONS
    // =========================
    if (step === 3) {
      updateData = {
        operations: {
          capacity: data.capacity,
          leadTime: data.leadTime,
          workforce: data.workforce,
          facility: data.facility,
          exportExperience: data.exportExperience,
          logistics: data.logistics,
        },
      };
    }

    // =========================
    // STEP 4: MARKET
    // =========================
    if (step === 4) {
      updateData = {
        market: {
          banking: {
            bankName: data.bankName,
            accountName: data.accountName,
            accountNumber: data.accountNumber,
            supportsUSD: data.supportsUSD,
          },
        },
      };
    }

    // =========================
    // STEP 5: SUBSCRIPTION
    // =========================
    if (step === 5) {
      const normalizePlan = (plan: string) => {
        if (!plan) return "bronze";
        if (plan.toLowerCase().includes("gold")) return "gold";
        if (plan.toLowerCase().includes("silver")) return "silver";
        return "bronze";
      };

      updateData = {
        subscription: {
          plan: normalizePlan(data.plan),
          startedAt: new Date(),
        },
      };
    }

    // =========================
    // FINAL STEP (SUBMIT)
    // =========================
    if (step === 6) {
      updateData = {
        onboarding: {
          step: 6,
          completed: true,
          completionPercent: 100,
        },
      };
    } else {
      updateData.onboarding = {
        step,
        completed: false,
        completionPercent: Math.min(step * 20, 100),
      };
    }

    // =========================
    // UPSERT PROFILE
    // =========================
    const profile = await SupplierProfile.findOneAndUpdate(
      { user: decoded.userId },
      { $set: updateData },
      { new: true, upsert: true }
    );

    return NextResponse.json({
      message: "Step saved successfully",
      step,
      profile,
    });

  } catch (error) {
    console.error("Onboarding error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}