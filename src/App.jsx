import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import  Clothes from "./pages/Clothes";
import About from "./pages/About";  
import Contact from "./pages/Contact"  
import Login from "./pages/Login";



function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
          <NavLink to="/" className="text-xl font-bold text-blue-600">MyStore</NavLink>

          <div className="flex space-x-6">
            <NavLink to="/" className="text-gray-600 hover:text-blue-600">Home</NavLink>
            <NavLink to="/clothes" className="text-gray-600 hover:text-blue-600">Products</NavLink>
            <NavLink to="/about" className="text-gray-600 hover:text-blue-600">About</NavLink>
            <NavLink to="/contact" className="text-gray-600 hover:text-blue-600">Contact</NavLink>
            <NavLink to="/login" className="text-gray-600 hover:text-blue-600">Login</NavLink>



          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clothes" element={<Clothes/>} />
         <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={< Login/>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
