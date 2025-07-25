
import { Routes, Route } from "react-router";
 
// File import here
import Home from "./pages/Home";


// Components import here 
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <div>
     <Navbar/>
     <Routes>
        <Route path="/" element={<Home/>}/>
     </Routes>
   
    </div>
    
  )
}

export default App;