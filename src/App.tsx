import { MotionConfig } from "framer-motion";
import { I18nProvider } from "./lib/i18n";
import { BookingProvider } from "./lib/booking";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Difference from "./components/Difference";
import Programs from "./components/Programs";
import DayAtSchool from "./components/DayAtSchool";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Admissions from "./components/Admissions";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import MobileCTA from "./components/MobileCTA";
import BookingModal from "./components/BookingModal";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <I18nProvider>
        <BookingProvider>
          <Header />
          <main>
            <Hero />
            <Difference />
            <Programs />
            <DayAtSchool />
            <WhyUs />
            <Testimonials />
            <Gallery />
            <Admissions />
            <FAQ />
            <FinalCTA />
          </main>
          <Footer />
          <MobileCTA />
          <BookingModal />
        </BookingProvider>
      </I18nProvider>
    </MotionConfig>
  );
}
