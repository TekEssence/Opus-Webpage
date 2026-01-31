import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout.jsx"
import About from "./pages/About.jsx"
import AboutCertification from "./pages/AboutCertification.jsx"
import AboutPillars from "./pages/AboutPillars.jsx"
import AboutVision from "./pages/AboutVision.jsx"
import AboutWhy from "./pages/AboutWhy.jsx"
import Compliance from "./pages/Compliance.jsx"
import Contact from "./pages/Contact.jsx"
import Home from "./pages/Home.jsx"
import Services from "./pages/Services.jsx"

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="about/vision-mission" element={<AboutVision />} />
        <Route path="about/pillars" element={<AboutPillars />} />
        <Route path="about/why-opus" element={<AboutWhy />} />
        <Route path="about/certification" element={<AboutCertification />} />
        <Route path="services" element={<Services />} />
        <Route path="compliance" element={<Compliance />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default App
