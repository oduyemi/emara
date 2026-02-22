export type Industry =
  | "processed_food"
  | "agriculture"
  | "cosmetics"
  | "pharmaceuticals"
  | "textiles"
  | "industrial_equipment";

export type Step =
  | "industry"
  | "product"
  | "market"
  | "volume"
  | "certifications"
  | "operations"
  | "results";

export type ExportMarket =
  | "eu"
  | "us"
  | "uk"
  | "middle_east"
  | "apac";

export type CompanyProfile = {
  industry: Industry;
  productName: string;
  annualVolume: number;
  exportMarket: ExportMarket;
  hasQualitySystem: boolean;
  hasPreviousExports: boolean;
  certifications: string[];
};

export type GapAnalysisResult = {
  complianceScore: number;
  riskScore: number;
  missingCertifications: string[];
  readinessTier: "Not Ready" | "Developing" | "Export Ready" | "Market Entry Ready";
};