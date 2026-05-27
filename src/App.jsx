import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Services from './components/Services.jsx';
import Technologies from './components/Technologies.jsx';
import WhyHireMe from './components/WhyHireMe.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-ink">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <WhyHireMe />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
