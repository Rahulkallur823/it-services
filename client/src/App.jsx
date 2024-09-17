import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Cont from './pages/Cont';
import Service from "./pages/Service";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Erro } from "./pages/Erro";
import { Navbar } from "./pages/Navbar";
import { Logout } from "./pages/Logout";

// Subscribe to thapatechnical channel for more awesome content. 

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Cont />} />
        <Route path="/service" element={<Service />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
