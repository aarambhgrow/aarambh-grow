import { registrationData } from "./registration";
import { financeData } from "./finance";
import { certificationData } from "./certification";
import { brandingData } from "./branding";
import { legalData } from "./legal-ca";
import { operationData } from "./operation";

export const serviceData = {
  Registration: registrationData,
  Finance: financeData,
  Certification: certificationData,
  Branding: brandingData,
  "Legal & CA": legalData,
  Operations: operationData,
};

export const categories = Object.keys(serviceData);
