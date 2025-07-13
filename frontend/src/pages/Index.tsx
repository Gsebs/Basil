import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { CodeDemoSection } from "@/components/code-demo-section";
import { FeaturesSection } from "@/components/features-section";
import { SocialProofSection } from "@/components/social-proof-section";
import { PricingSection } from "@/components/pricing-section";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <CodeDemoSection />
      <FeaturesSection />
      <SocialProofSection />
      <PricingSection />
    </div>
  );
};

export default Index;
