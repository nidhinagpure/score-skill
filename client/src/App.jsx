
import { Routes, Route } from "react-router";

// File import here
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import Login from "./pages/Login";


// Components import here 
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Login"element={<Login/>} />

      </Routes>

    </div>

  )
}

export default App;