import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import ClassComponent from "./components/ClassComponent";
import Welcome from "./components/Welcom";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>

      <Welcome />
      <Contact />
      <About />
      <ClassComponent />
    </div>
  );
}

export default App;
