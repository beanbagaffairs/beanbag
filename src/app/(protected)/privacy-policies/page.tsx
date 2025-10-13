import React from "react";
import PrivacyPolicyContent from "@/components/pages/privacy-policies/PrivacyPolicyContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy",
};

const PrivacyPolicyPage = () => {
  return <PrivacyPolicyContent />;
};

export default PrivacyPolicyPage;
