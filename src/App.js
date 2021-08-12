import "./assets/styles/globals.css";

import Main from "./components/Main/Main";
import Features from "./components/Features/Features";
import Devices from "./components/Devices/Devices";
import Tools from "./components/Tools/Tools";
import Logos from "./components/Logos/Logos";
import Downloads from "./components/Downloads/Downloads";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Main />
      <Features />
      <Devices />
      <Tools />
      <Logos />
      <Downloads />
      <Footer />
    </>
  );
}

export default App;
