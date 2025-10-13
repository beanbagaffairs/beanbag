import WorkWithUsContent from "@/components/pages/work-with-us/WorkWithUsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work With Us",
  description: "Join the Bean Bag Affairs family and be part of creating extraordinary celebrations and cinematic experiences. Discover career opportunities in event planning, wedding coordination, and film production.",
};

export default function WorkWithUs() {
  return (
    <div className="min-h-screen bg-[#BADBE5]">
      <div className="max-w-[90vw] md:max-w-[80vw] mx-auto">
        <WorkWithUsContent />
      </div>
    </div>
  );
}
