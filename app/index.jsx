import { Link } from "expo-router";

import { ScrollView } from "react-native";
import TopNav from "../components/pages/landingpage/TopNav";
import Hero from "../components/pages/landingpage/Hero";
import AppContent from "../components/pages/landingpage/AppContent";
import MerchantInvite from "../components/pages/landingpage/MerchantInvite";
import Footer from "../components/pages/landingpage/Footer";

export default function LandingPage() {
  return (
    <ScrollView className="min-h-screen">
      <TopNav />
      <Hero />
      <AppContent />
      <MerchantInvite/>
      <Footer/>
    </ScrollView>
  );
}
