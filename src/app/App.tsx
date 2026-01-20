import { Header } from '@/app/components/Header';
import { HeroSection } from '@/app/components/HeroSection';
import { LifestyleSection } from '@/app/components/LifestyleSection';
import { TrendingSection } from '@/app/components/TrendingSection';
import { PropertyOwnerSection } from '@/app/components/PropertyOwnerSection';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <LifestyleSection />
        <TrendingSection />
        <PropertyOwnerSection />
      </main>
      <Footer />
    </div>
  );
}
