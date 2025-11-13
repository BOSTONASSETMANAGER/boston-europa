import Navbar from "@/components/navbar"
import HeroSection from "@/components/sections/hero-section"
import StepsSection from "@/components/sections/steps-section"
import BenefitsSection from "@/components/sections/benefits-section"
import WhyChooseSection from "@/components/sections/why-choose-section"
import CtaSection from "@/components/sections/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StepsSection />
      <BenefitsSection />
      <WhyChooseSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
