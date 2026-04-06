import { useTranslations } from "next-intl";


const t = useTranslations("ReadinessForm.scale");



export const SCALE_OPTIONS = [
  { label: t("veryHigh"), value: 5 },
  { label: t("high"), value: 4 },
  { label: t("indifferent"), value: 3 },
  { label: t("low"), value: 2 },
  { label: t("veryLow"), value: 1 }
];