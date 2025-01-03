import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FixedNavbar from "./components/FixedNavbar";
import ContactForm from "./components/ContactForm";
import AboutPage from "./components/AboutPage";
import FaqComponent from "./components/FaqComponent";
import Testimonials from "./components/Testimonials";
<<<<<<< HEAD
import Footer from "../src/components/Footer";
=======
>>>>>>> 4d6f19a7c295ca29b94aae830df57fca016dd30f
import Introduction from "./components/Introduction";
import Footer from "../src/components/Footer";
import MarqueeHeader from "./components/MarqueeHeader";
import ProductGallery from "./components/ProductGallery";
import WhatsAppButton from "./components/WhatsAppButton";
import BreadcrumbHeader from "./components/BreadcrumbHeader";
import CamphorBenefits from "./components/CamphorBenefits";


function App() {
  return (
    <Router>
      <MarqueeHeader />
      <FixedNavbar />
      <BreadcrumbHeader />
      <main>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FaqComponent />} />
          <Route path="/product-gallery" element={<ProductGallery />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </Router>
  );
}

export default App;
