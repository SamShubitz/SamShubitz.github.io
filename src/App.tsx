import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
