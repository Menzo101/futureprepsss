import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Chatbox } from "./components/Chatbox";
import { Credit } from "./pages/Credit";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
// import Faq from "./components/Faq";
import { Footer } from "./components/Footer";
import { Testimonial } from "./components/Testimonial";
import { Banner } from "./components/Banner";
import Downloadus from "./components/Downloadus";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="course" element={<Credit />} />
          <Route path="courses/:id" />
          <Route path="*" />
        </Routes>
      </BrowserRouter>
      {/* <Faq />
      <Testimonial /> */}

      <Footer />
    </>
  );
}

export default App;
