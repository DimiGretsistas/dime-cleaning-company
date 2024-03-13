import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from '.';
import MainSection from './pages/MainSection';


function App() {
  return (
    <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="MainSection" element={<MainSection />} /> 
          {/* <Route path="Services" element={<Services />} />  */}
        </Routes>
    </>
  );
}

export default App;