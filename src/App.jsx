import React from 'react';
import './index.css'
import Navigation from './components/Navigation';
import Header from './components/Header';
import FeaturedProjects from './components/FeaturedProjects';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="grid-wrapper">
      <Navigation />
      <Header />
      <FeaturedProjects />
      <ContactSection />
      <Footer /> 
    </div>
  );
} 

export default App;
