import "./App.css";
import Achivements from "./components/organisms/Achivements";
import Header from "./components/organisms/Header";
import Home from "./components/organisms/Home";
import Information from "./components/organisms/Information";
import Services from "./components/organisms/Services";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Achivements />
      <Information />
      <Services />
    </>
  );
}

export default App;
