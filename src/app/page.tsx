import Banner from "@/components/landing/Banner";
import FAQSection from "@/components/landing/FAQSection";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Team from "@/components/landing/Team";
import Testimonials from "@/components/landing/Testimonials";
import Footer from "@/components/landing/Footer";
import ProgramsCard from "@/components/landing/Programs";
import Introduction from "@/components/landing/Introduction";


export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Introduction/>
      <Testimonials/>
      <ProgramsCard/>
      <Team/>
      <Banner/>
      <FAQSection/>
      <Footer/>
      
    </div>
    
  );
}
