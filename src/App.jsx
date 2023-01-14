import { useEffect, useState } from "react";
import Carousel from "./components/carousel/Carousel";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import ProjectsSection from "./components/projectsSection/ProjectsSection";
import SocialMedia from "./components/socialMedia/SocialMedia";

function App() {
  const [widthScreen, setWidthScreen] = useState(0);

  useEffect(() => {
    reportWindowSize();
  }, [widthScreen]);

  const reportWindowSize = () => {
    setWidthScreen(window.innerWidth);
  };

  window.onresize = reportWindowSize;

  return (
    <div className="App">
      <Header />
      <Carousel />
      <ProjectsSection />
      <Form />
      <Footer />
      {widthScreen < 1200 && <SocialMedia />}
    </div>
  );
}

export default App;
