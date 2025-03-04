import React from "react";
import Navbar from "./components/Navbar"; // Ensure correct path
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="flex items-center justify-center h-screen text-2xl font-bold px-4">
        <div className="md:ml-32 lg:ml-48 xl:ml-64 text-center"> {/* Adjust margin for bigger screens */}
          <Routes>
            <Route path="/home" element={<h1>Home Page</h1>} />
            <Route path="/about" element={<h1>About Page</h1>} />
            <Route path="/qualification" element={<h1>Qualification Page</h1>} />
            <Route path="/project" element={<h1>Project Page</h1>} />
            <Route path="/certificate" element={<h1>Certificate Page</h1>} />
            <Route path="/contact" element={<h1>Contact Page</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
