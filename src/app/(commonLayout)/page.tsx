import HowItWorks from "@/components/modules/home/booking-flow";
import CourseSection from "@/components/modules/home/featured-tutors";
import FollowUs from "@/components/modules/home/followUs";
import Hero from "@/components/modules/home/hero-section";
import LearningSection from "@/components/modules/home/learningSection";
import PlatformSection from "@/components/modules/home/platformSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <CourseSection />
      <HowItWorks />
      <PlatformSection />
      {/* <LearningSection/> */}
      <FollowUs />
    </div>
  );
}
