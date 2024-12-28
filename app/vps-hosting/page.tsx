import Header from "@/components/layout/header/Header";
import VpsBanner from "@/components/layout/banner/VpsBanner";
import HomeThreePricing from "@/components/containers/home-three/HomeThreePricing";
import HostingFeatureTwo from "@/components/containers/hosting/HostingFeatureTwo";
import HostingTab from "@/components/containers/hosting/HostingTab";
import FaqSection from "@/components/containers/faq/FaqSection";
import Testimonial from "@/components/containers/support/Testimonial";
import Brand from "@/components/containers/support/Brand";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";

const page = () => {
  return (
    <>
      <Header />
      <VpsBanner />
      <HomeThreePricing />
      <HostingFeatureTwo />
      <HostingTab />
      <FaqSection />
      <Testimonial />
      <Brand />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default page;
