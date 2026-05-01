import TutorSection from "@/components/modules/home/featured-tutors";
import HowItWorks from "@/components/modules/home/booking-flow";
import Testimonial from "@/components/modules/home/testimonial";
import States from "@/components/modules/home/states";
import Hero from "@/components/modules/home/hero-section";
import Categories from "@/components/modules/home/categories";
import FinalCTA from "@/components/modules/home/finalCTA";
import OurVision from "@/components/modules/home/our-vision";
import OurTeam from "@/components/modules/home/our-team";
import FollowUs from "@/components/modules/home/followUs";

export default function HomePage() {
  return (
    <div className="bg-background">
      <Hero />
      <States />
      <TutorSection />
      <Categories />
      <HowItWorks />
      <Testimonial />
      <OurVision />
      <OurTeam />
      <FollowUs />
      <FinalCTA />
    </div>
  );
}