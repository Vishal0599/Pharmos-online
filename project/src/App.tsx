import { useState } from "react";
import Header from "./components/Header";
import QuickActionBanner from "./components/QuickActionBanner";
import HeroSection from "./components/HeroSection";
import ConsultationServices from "./components/ConsultationServices";
import HomeServices from "./components/HomeServices";
import ActionCards from "./components/ActionCards";
import WhyChoosePharmos from "./components/WhyChoosePharmos";
import SupportSection from "./components/SupportSection";
import BottomNav from "./components/BottomNav";
import SideMenu from "./components/SideMenu";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="bg-gray-50 min-h-screen flex justify-center">
      <div className="w-full relative">
        <SideMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

        <Header onMenuToggle={() => setMenuOpen((v) => !v)} menuOpen={menuOpen} />

        <main className="pt-[76px] pb-24">
          <QuickActionBanner />
          <HeroSection />
          <ConsultationServices />
          <HomeServices />
          <ActionCards />
          <WhyChoosePharmos />
          <SupportSection />
        </main>

        <BottomNav active={activeTab} onSelect={setActiveTab} />
      </div>
    </div>
  );
}
