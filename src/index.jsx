import React from 'react';
import MainSection from './pages/MainSection';
import Services from './pages/Services';
import About from './pages/Home/About';
import Faq from './pages/Faq';
import Contact from './pages/Home/Contact';


export default function Home() {
    return (
        <>
        <MainSection />
        <Services />
        <About />
        <Faq />
        <Contact />

        </>
    );
}