import Hero from "../components/Hero";
import FeaturedProjects from "../components/FeaturedProjects";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection"; // <--- Import this

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <FeaturedProjects />
      <AboutSection />
      
      {/* 4. The Action Section */}
      <ContactSection />
    </main>
  );
}