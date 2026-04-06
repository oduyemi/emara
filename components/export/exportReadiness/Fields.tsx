"use client";
import { africaRegions, countryCallingCodes } from "@/data/countries";
import { useEffect, useMemo } from "react";
import { useTranslations } from "next-intl";


type InputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};


export const StepOneFields = ({ data, setData }: any) => {
  const t = useTranslations("ReadinessForm.step1");

  const countries = useMemo(() => {
    return Object.entries(africaRegions);
  }, []);

  const handleChange = (field: string, value: string) => {
    setData((prev: any) => ({ ...prev, [field]: value }));
  };

  useEffect(() => {
    const country = data["Country"];
    if (!country) return;

    const code = countryCallingCodes[country];

    if (code && data["Phone Code"] !== code) {
      setData((prev: any) => ({
        ...prev,
        "Phone Code": code,
      }));
    }
  }, [data["Country"]]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <Input label={t("fullName")} value={data["Full Name"] || ""} onChange={(v) => handleChange("Full Name", v)} />
      <Input label={t("email")} value={data["Email"] || ""} onChange={(v) => handleChange("Email", v)} />
      <Input label={t("companyName")} value={data["Company Name"] || ""} onChange={(v) => handleChange("Company Name", v)} />
      <Input label={t("companyAddress")} value={data["Company Address"] || ""} onChange={(v) => handleChange("Company Address", v)} />
      <Input label={t("city")} value={data["City"] || ""} onChange={(v) => handleChange("City", v)} />
      <Input label={t("state")} value={data["State"] || ""} onChange={(v) => handleChange("State", v)} />

      <div className="col-span-2">
        <label className="text-sm text-gray-600 mb-1 block">{t("country")}</label>
        <select
          value={data["Country"] || ""}
          onChange={(e) => handleChange("Country", e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-200"
        >
          <option value="">{t("selectCountry")}</option>
          {countries.map(([region, list]) => (
            <optgroup key={region} label={region}>
              {list.map((country) => (
                <option key={country} value={country}>{country}</option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>

      <div className="col-span-2 flex gap-3">
        <input value={data["Phone Code"] || ""} readOnly className="w-28 px-3 py-3 rounded-xl border bg-gray-100" />
        <input
          type="tel"
          placeholder={t("phonePlaceholder")}
          value={data["Phone Number"] || ""}
          onChange={(e) => handleChange("Phone Number", e.target.value)}
          className="flex-1 px-4 py-3 rounded-xl border"
        />
      </div>
    </div>
  );
};

const Input = ({ label, value, onChange }: InputProps) => (
  <div>
    <label className="text-sm text-gray-600 mb-1 block">{label}</label>
    <input value={value} onChange={(e) => onChange(e.target.value)} className="w-full px-4 py-3 rounded-xl border" />
  </div>
);