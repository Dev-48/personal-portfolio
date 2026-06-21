import './index.css';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import ExpertiseSection from './components/ExpertiseSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import MembershipsSection from "./components/MembershipsSection";
import CertificationsSection from './components/CertificationsSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <ExpertiseSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <MembershipsSection />
        <CertificationsSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
