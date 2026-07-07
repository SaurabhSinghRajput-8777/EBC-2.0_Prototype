export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "LifeBack™",
  "url": "https://lifeback.sipl.com",
  "logo": "https://lifeback.sipl.com/logo.png",
  "description": "AI-assisted behavioral screening platform focused on early depression detection.",
};

export const medicalSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "LifeBack™ - Early Depression Detection",
  "description": "Research-backed AI platform for behavioral screening.",
  "about": {
    "@type": "MedicalCondition",
    "name": "Depression"
  }
};
