import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AgencyIntro from './components/AgencyIntro';
import Services from './components/Services';
import TechStack from './components/TechStack';
import OmnichannelStrategy from './components/OmnichannelStrategy';
import UniqueAdvantages from './components/UniqueAdvantages';
import Process from './components/Process';
import Statistics from './components/Statistics';
import CaseStudies from './components/CaseStudies';
import ContentFramework from './components/ContentFramework';
import OptimizationLoop from './components/OptimizationLoop';
import Industries from './components/Industries';
import AISolutions from './components/AISolutions';
import DataSecurity from './components/DataSecurity';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg selection:bg-brand-500/30 selection:text-brand-100">
      <Navbar />
      <main>
        <Hero />
        <AgencyIntro />
        <Statistics />
        <Services />
        <TechStack />
        <OmnichannelStrategy />
        <UniqueAdvantages />
        <CaseStudies />
        <Process />
        <ContentFramework />
        <OptimizationLoop />
        <Industries />
        <AISolutions />
        <DataSecurity />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
