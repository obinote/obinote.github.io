import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Timelines from "./components/Timelines";
import Portofolio from "./components/Portofolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: { enable: true, value_area: 900 },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00",
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
      <About />
      <Timelines />
      <Portofolio />
      <Contact />
    </div>
  );
}

export default App;
