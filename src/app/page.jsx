import FruitSequencer from '@/components/FruitSequencer';
import FruitStand from '@/components/FruitStand';
import HowItWorks from '@/components/HowItWorks';
import Reviews from '@/components/Reviews';

export default function Home() {
  return (
    <main className="min-h-screen">
      <FruitSequencer />
      <FruitStand />
      <HowItWorks />
      <Reviews />
    </main>
  );
}
