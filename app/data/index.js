import { registrationData } from "./registration";
import { financeData } from "./finance";
import { certificationData } from "./certification";
import { brandingData } from "./branding";
import { legalCAData } from "./legal-ca";
import { operationsData } from "./operation";

export const serviceData = {
  Registration: registrationData,
  Finance: financeData,
  Certification: certificationData,
  Branding: brandingData,
  "Legal & CA": legalCAData,
  Operations: operationsData,
};

export const categories = Object.keys(serviceData);
