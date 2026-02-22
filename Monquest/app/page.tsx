import CarbonHero from "./components/CarbonHero";
import CarbonFeatures from "./components/CarbonFeatures";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-white">
      <CarbonHero />
      <CarbonFeatures />
    </div>
  );
}
