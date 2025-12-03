import "./App.css";
import Achivements from "./components/organisms/Achivements";
import Header from "./components/organisms/Header";
import Home from "./components/organisms/Home";
import Information from "./components/organisms/Information";
import Projects from "./components/organisms/Projects";
import Questions from "./components/organisms/Questions";
import Services from "./components/organisms/Services";
import Testimonials from "./components/organisms/Testimonials";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Achivements />
      <Information />
      <Services />
      <Projects />
      <Testimonials />
      <Questions />
    </>
  );
}

export default App;
