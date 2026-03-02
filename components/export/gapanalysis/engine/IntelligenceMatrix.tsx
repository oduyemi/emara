import { Industry, ExportMarket } from "./types";

type CertificationRule = {
  required: string[];
  riskWeight: number;
};

export const IntelligenceMatrix: Record<
  Industry,
  Record<ExportMarket, CertificationRule>
> = {
  agriculture: {
    eu: {
      required: ["GlobalG.A.P", "EU Phytosanitary Certificate"],
      riskWeight: 25,
    },
    us: {
      required: ["USDA Approval", "Phytosanitary Certificate"],
      riskWeight: 20,
    },
    uk: {
      required: ["UK Plant Health Certification"],
      riskWeight: 18,
    },
    middle_east: {
      required: ["Halal Certification"],
      riskWeight: 15,
    },
    apac: {
      required: ["Country-Specific Import Permit"],
      riskWeight: 22,
    },
  },

  processed_food: {
    eu: {
      required: ["HACCP", "ISO 22000", "EU Food Safety Registration"],
      riskWeight: 30,
    },
    us: {
      required: ["FDA Registration", "HACCP"],
      riskWeight: 28,
    },
    uk: {
      required: ["UK Food Safety Compliance"],
      riskWeight: 25,
    },
    middle_east: {
      required: ["Halal Certification", "ISO 22000"],
      riskWeight: 20,
    },
    apac: {
      required: ["Local Food Import License"],
      riskWeight: 24,
    },
  },

  cosmetics: {
    eu: {
      required: ["EU CPNP Registration"],
      riskWeight: 28,
    },
    us: {
      required: ["FDA Cosmetic Listing"],
      riskWeight: 24,
    },
    uk: {
      required: ["UK SCPN Registration"],
      riskWeight: 22,
    },
    middle_east: {
      required: ["Halal Certification"],
      riskWeight: 20,
    },
    apac: {
      required: ["Local Cosmetic Approval"],
      riskWeight: 23,
    },
  },

  pharmaceuticals: {
    eu: {
      required: ["EU GMP", "EMA Approval"],
      riskWeight: 40,
    },
    us: {
      required: ["FDA Drug Approval"],
      riskWeight: 38,
    },
    uk: {
      required: ["MHRA Approval"],
      riskWeight: 35,
    },
    middle_east: {
      required: ["MOH Registration"],
      riskWeight: 32,
    },
    apac: {
      required: ["Local Drug Authority Approval"],
      riskWeight: 36,
    },
  },

  textiles: {
    eu: {
      required: ["REACH Compliance"],
      riskWeight: 18,
    },
    us: {
      required: ["FTC Textile Labelling"],
      riskWeight: 15,
    },
    uk: {
      required: ["UKCA Marking"],
      riskWeight: 16,
    },
    middle_east: {
      required: ["Country Textile Certification"],
      riskWeight: 14,
    },
    apac: {
      required: ["Import Compliance Certificate"],
      riskWeight: 17,
    },
  },

  industrial_equipment: {
    eu: {
      required: ["CE Marking"],
      riskWeight: 30,
    },
    us: {
      required: ["UL Certification"],
      riskWeight: 28,
    },
    uk: {
      required: ["UKCA Marking"],
      riskWeight: 26,
    },
    middle_east: {
      required: ["SASO Certification"],
      riskWeight: 24,
    },
    apac: {
      required: ["Local Technical Approval"],
      riskWeight: 27,
    },
  },
};