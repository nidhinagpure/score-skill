
import { Routes, Route } from "react-router";

// File import here
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Doudt from "./pages/Doudt";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Myprofile from "./pages/Myprofile";


// Components import here 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/doudt" element={<Doudt/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Login"element={<Login/>} />
        <Route path="/myprofile"element={<Myprofile/>} />
      </Routes>
      <Footer />

    </div>

  )
}

export default App;