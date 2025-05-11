import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import ManifestationHero from "@/components/programs/manifestation/Hero";
import ManifestationTrainerProfile from "@/components/programs/manifestation/TrainerProfile";
import ManifestationBanner from "@/components/programs/manifestation/Banner";
import TransformationSteps from "@/components/programs/manifestation/TransformationSteps";
import FitnessTestimonials from "@/components/programs/fitness/Testimonials"

// Import other manifestation-specific components here when they are created, e.g.:
// import ManifestationSuccessStories from "@/components/programs/manifestation/SuccessStories";
// import ManifestationTransformations from "@/components/programs/manifestation/Transformations";
// import ManifestationTestimonials from "@/components/programs/manifestation/Testimonials";
// import ManifestationFAQ from "@/components/programs/manifestation/FAQ";

export default function ManifestationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ManifestationHero />
        <ManifestationTrainerProfile />
        <TransformationSteps />
        {/* Placeholder for other sections - uncomment and use when ready */}
        {/* <ManifestationSuccessStories /> */}
        {/* <ManifestationTransformations /> */}
        {/* <ManifestationTestimonials /> */}
        <FitnessTestimonials />
        <ManifestationBanner />
        {/* <ManifestationFAQ /> */}
      </main>
      <Footer />
    </div>
  );
}
