
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import './App.css'
import Home from "./Home.jsx";
import FAQ from "./Routes/FAQ.jsx"
import HowToBuy from "./Routes/HowToBuy.jsx";
import Tokenomics from './Routes/Tokenomics.jsx';
import About from "./Routes/About.jsx";



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Tokenomics" element={<Tokenomics />} />
            <Route path="/How-To-Buy" element={<HowToBuy />} />
            <Route path="/FAQ" element={<FAQ />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
