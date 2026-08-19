import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout.jsx"

const About = lazy(() => import("./pages/About.jsx"))
const AboutCertification = lazy(() => import("./pages/AboutCertification.jsx"))
const AboutPillars = lazy(() => import("./pages/AboutPillars.jsx"))
const AboutVision = lazy(() => import("./pages/AboutVision.jsx"))
const AboutWhy = lazy(() => import("./pages/AboutWhy.jsx"))
const AboutTechnology = lazy(() => import("./pages/AboutTechnology.jsx"))
const Compliance = lazy(() => import("./pages/Compliance.jsx"))
const Contact = lazy(() => import("./pages/Contact.jsx"))
const Home = lazy(() => import("./pages/Home.jsx"))
const Services = lazy(() => import("./pages/Services.jsx"))
const PracticeHealthCheck = lazy(() => import("./pages/PracticeHealthCheck.jsx"))

const PageLoader = () => (
  <div className="grid min-h-[45vh] place-items-center bg-slate-50" role="status" aria-label="Loading page">
    <span className="h-10 w-10 animate-spin rounded-full border-4 border-brand-blue/20 border-t-brand-blue" />
  </div>
)

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Suspense fallback={<PageLoader />}><Home /></Suspense>} />
        <Route path="about" element={<Suspense fallback={<PageLoader />}><About /></Suspense>} />
        <Route path="about/vision-mission" element={<Suspense fallback={<PageLoader />}><AboutVision /></Suspense>} />
        <Route path="about/pillars" element={<Suspense fallback={<PageLoader />}><AboutPillars /></Suspense>} />
        <Route path="about/why-opus" element={<Suspense fallback={<PageLoader />}><AboutWhy /></Suspense>} />
        <Route path="about/technology-automation" element={<Suspense fallback={<PageLoader />}><AboutTechnology /></Suspense>} />
        <Route path="about/certification" element={<Suspense fallback={<PageLoader />}><AboutCertification /></Suspense>} />
        <Route path="services" element={<Suspense fallback={<PageLoader />}><Services /></Suspense>} />
        <Route
          path="practice-health-check"
          element={<Suspense fallback={<PageLoader />}><PracticeHealthCheck /></Suspense>}
        />
        <Route path="compliance" element={<Suspense fallback={<PageLoader />}><Compliance /></Suspense>} />
        <Route path="contact" element={<Suspense fallback={<PageLoader />}><Contact /></Suspense>} />
      </Route>
    </Routes>
  </BrowserRouter>

)

export default App
