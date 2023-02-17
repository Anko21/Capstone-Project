import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HighlightsSection from "./components/HighlightsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import ReserveSection from "./components/ReserveSection";
import LoginSection from "./components/LoginSection";
import PaymentSection from "./components/PaymentSection";
import Alert from "./components/Alert"

function App() {
  return (
    <main>
      <Header/>
      <HeroSection/>
      <HighlightsSection/>
      <TestimonialsSection/>
      <AboutSection/>
      <Footer/>
      <ReserveSection/>
      <LoginSection/>
      <PaymentSection/>
      <Alert/>
    </main>
  );
}

export default App;