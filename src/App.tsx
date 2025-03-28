import Hero from "./section/Hero";
import Navbar from "./components/Navbar";
import TechnicalProficiency from "./section/TechnicalProficiency";
import AboutMe from "./section/Aboutme";
import MyProjects from "./section/MyProjects";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechnicalProficiency />
      <AboutMe />
      <MyProjects />
    </>
  );
}

export default App;
