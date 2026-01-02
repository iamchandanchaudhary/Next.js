import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructures from "@/components/Instructures";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingEvents from "@/components/UpcomingEvents";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/96 antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonialCards />
      <UpcomingEvents />
      <Instructures />
    </main>
  );
}
