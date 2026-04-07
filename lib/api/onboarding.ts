export const saveOnboardingStep = async (step: number, data: any) => {
    const res = await fetch("/api/supplier/onboarding", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ step, data }),
    });
  
    if (!res.ok) {
      throw new Error("Failed to save step");
    }
  
    return res.json();
  };