import useFadeIn from "@/hooks/useFadeIn";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import ReactivationService from "@/components/ReactivationService";
import WebsiteService from "@/components/WebsiteService";
import Integrations from "@/components/Integrations";
import WhoItsFor from "@/components/WhoItsFor";
import Pricing from "@/components/Pricing";
import RoiCalculator from "@/components/RoiCalculator";
import FaqSection from "@/components/FaqSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

const Index = () => {
  useFadeIn();

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="section-fade-in"><ServicesOverview /></div>
      <div className="section-fade-in"><ReactivationService /></div>
      <div className="section-fade-in"><WebsiteService /></div>
      <div className="section-fade-in"><Integrations /></div>
      <div className="section-fade-in"><WhoItsFor /></div>
      <div className="section-fade-in"><Pricing /></div>
      <div className="section-fade-in"><RoiCalculator /></div>
      <div className="section-fade-in"><FaqSection /></div>
      <FinalCta />
      <Footer />
    </div>
  );
};

export default Index;
