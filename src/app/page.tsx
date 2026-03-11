import FAQSection from '@/components/FAQsection';
import HeroSection from '@/components/HeroSection';
import NukeEffect from '@/components/NukeEffect';
import { AboutSection, TracksSection, SponsorsSection, Footer } from '@/components/Sections';
import Timeline from '@/components/Timeline';

export default function Home() {
  return (
    <main className="relative min-h-screen animated-gradient">
      <NukeEffect />
      <HeroSection />
      <AboutSection />
      <TracksSection />
      <Timeline />
      <SponsorsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
