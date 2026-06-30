import FruitSequencer from '@/components/FruitSequencer';
import Philosophy from '@/components/Philosophy';
import RetailBrands from '@/components/RetailBrands';
import SourcingHubs from '@/components/SourcingHubs';
import ScrollTimeline from '@/components/ScrollTimeline';
import SourcingMatrix from '@/components/SourcingMatrix';
import LogisticsTracker from '@/components/LogisticsTracker';
import RFPForm from '@/components/RFPForm';

export default function Home() {
  return (
    <main className="min-h-screen">
      <FruitSequencer />
      <Philosophy />
      <RetailBrands />
      <SourcingHubs />
      <ScrollTimeline />
      <SourcingMatrix />
      <LogisticsTracker />
      <RFPForm />
    </main>
  );
}
