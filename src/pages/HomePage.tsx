import AboutSection from "../components/AboutSection";
import ContactTerminal from "../components/ContactTerminal";
import ExperienceTimelineSection from "../components/ExperienceTimelineSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ProjectGridSection from "../components/ProjectGridSection";
import SkillsSection from "../components/SkillsSection";
import TechStackSection from "../components/TechStackSection";

export default function HomePage(): JSX.Element {
  return (
    <main className="bg-premium-gradient min-h-screen bg-obsidian">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ProjectGridSection />
      <SkillsSection />
      <ExperienceTimelineSection />
      <ContactTerminal />
      <Footer />
    </main>
  );
}
