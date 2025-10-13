import ContactFormSection from "@/components/pages/contact-us/ContactFormSection";
import FAQSection from "@/components/pages/contact-us/FAQSection";
import LocationSection from "@/components/pages/contact-us/LocationSection";
import HeroSection from "@/components/ui/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Pull up a bean bag, pour yourself a coffee, and let's talk about creating something extraordinary. At Bean Bag Affairs, we believe the first conversation should feel just as comfortable as the celebrations we design.",
};

const ContactPage = () => {

  return (
    <main className="text-[#1C2042] bg-white font-formular flex flex-col gap-20">
      {/* Top Section */}
      <HeroSection
        title="Contact Us"
        description="Pull up a bean bag, pour yourself a coffee, and let’s talk about creating something extraordinary. At Bean Bag Affairs, we believe the first conversation should feel just as comfortable as the celebrations we design."
      />
      <div className="max-w-[90vw] md:max-w-[80vw] mx-auto flex flex-col gap-20">
        <ContactFormSection />
        <FAQSection />
        <LocationSection />
      </div>
    </main>
  );
};

export default ContactPage;
