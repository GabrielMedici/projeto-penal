import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import CostSection from './components/CostSection';
import FamilySection from './components/FamilySection';
import TransparencySection from './components/TransparencySection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <CostSection />
        <FamilySection />
        <TransparencySection />
      </main>
      <Footer />
    </div>
  );
}
