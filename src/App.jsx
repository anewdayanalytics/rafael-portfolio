import { useState } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import PortfolioSection from "./components/PortfolioSection";
import DiscussProjectSection from "./components/DiscussProjectSection";
import ExperienceSection from "./components/ExperienceSection";
import TestimonialSection from "./components/TestimonialSection";
import FooterSection from "./components/FooterSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeroSection />
      <PortfolioSection />
      <DiscussProjectSection />
      <ExperienceSection />
      <TestimonialSection />
      <FooterSection />
    </>
  );
}

export default App;
