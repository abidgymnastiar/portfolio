import Hero from "./section/Hero";
import Navbar from "./components/Navbar";
import TechnicalProficiency from "./section/TechnicalProficiency";
import AboutMe from "./section/Aboutme";
import MyProjects from "./section/MyProjects";
import ContactMe from "./section/ContactMe";
import Footer from "./section/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechnicalProficiency />
      <AboutMe />
      <MyProjects />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
