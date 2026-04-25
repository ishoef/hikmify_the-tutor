import Footer from "@/components/layout/footer";
import HowItWorks from "@/components/modules/home/booking-flow";
import CourseSection from "@/components/modules/home/featured-tutors";
import Hero from "@/components/modules/home/hero-section";

export default function Home() {
  return (
    <div>
      <Hero />
      <CourseSection />
      <HowItWorks/>
      <Footer/>
    </div>
  );
}
