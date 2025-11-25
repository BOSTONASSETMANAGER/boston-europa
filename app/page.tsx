import Navbar from "@/components/navbar"
import HeroSection from "@/components/sections/hero-section"
import StepsSection from "@/components/sections/steps-section"
import BenefitsSection from "@/components/sections/benefits-section"
import WhyChooseSection from "@/components/sections/why-choose-section"
import CtaSection from "@/components/sections/cta-section"
import Footer from "@/components/footer"
import GiantLogoSection from "@/components/sections/giant-logo-section"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <HeroSection />
      <StepsSection />
      <BenefitsSection />
      <WhyChooseSection />
      <CtaSection />
      <Footer />
      <GiantLogoSection />
    </main>
  )
}
