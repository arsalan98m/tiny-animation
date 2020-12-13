import "./App.css";

// components
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Section from "./components/Section";
import Samples from "./components/Samples";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Section />
      <Samples />
    </div>
  );
}

export default App;
