import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './';
import MainSection from './pages/MainSection';
import Services from './pages/Services';
import About from './pages/Home/About';
import Faq from './pages/Faq';
import Contact from './pages/Home/Contact'



function App() {
  return (
    <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="MainSection" element={<MainSection />} /> 
          <Route path="Services" element={<Services />} /> 
          <Route path="About" element={<About />} /> 
          <Route path="Faq" element={<Faq />} /> 
          <Route path="Contact" element={<Contact />} /> 
        </Routes>
    </>
  );
}

export default App;