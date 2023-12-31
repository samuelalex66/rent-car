import "../src/dist/styles.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "../src/components/Navbar";
import { Route, Routes } from "react-router-dom";
import Models from "./Pages/Models";
import TestimonialsPage from "./Pages/TestimonialsPage";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/about" element={<About />} />
        <Route index path="/models" element={<Models />} />
        <Route index path="/testimonials" element={<TestimonialsPage />} />
        <Route index path="/team" element={<Team />} />
        <Route index path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;