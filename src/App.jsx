import { Route, Routes } from "react-router-dom";
import About from "./Pages/Home/About";
import Appoinment from "./Pages/Home/Appoinment";
import Contact from "./Pages/Home/Contact";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Home/Login";
import Review from "./Pages/Home/Review";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appoinment" element={<Appoinment />} />
        <Route path="contact" element={<Contact />} />
        <Route path="review" element={<Review />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
