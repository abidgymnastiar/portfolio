import Hero from "./section/Hero";
import Navbar from "./components/Navbar";
import TechnicalProficiency from "./section/TechnicalProficiency";
// import AboutMe from "./section/AboutMMe";
import MyProjects from "./section/MyProjects";
import ContactMe from "./section/ContactMe";
import Footer from "./section/Footer";
import Blog from "./section/Blogg";

function App() {
  return (
    <div className="bg-gradient-secondary">
      <Navbar />
      <Hero />
      <Blog />
      <TechnicalProficiency />
      {/* <AboutMe /> */}
      <MyProjects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
