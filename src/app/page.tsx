import Banner from "@/components/Banner";
import FAQSection from "@/components/FAQSection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Testimonials/>
      <Team/>
      <Banner/>
      <FAQSection/>
      <Footer/>
      
    </div>
    
  );
}
