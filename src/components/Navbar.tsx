import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
         
          <Link to="/" className="text-3xl font-bold text-gray-800">
            MyPortfolio
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-xl font-semibold">
            <Link to="/home" className="hover:text-blue-500">Home</Link>
            <Link to="/about" className="hover:text-blue-500">About</Link>
            <Link to="/qualification" className="hover:text-blue-500">Qualification</Link>
            <Link to="/project" className="hover:text-blue-500">Projects</Link>
            <Link to="/certificate" className="hover:text-blue-500">Certificates</Link>
            <Link to="/contact" className="hover:text-blue-500">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={32} /> : <Menu size={32} />} {/* Increased icon size */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center py-6 space-y-6 text-2xl font-semibold"> {/* Increased font size */}
            <Link to="/home" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/qualification" onClick={() => setIsOpen(false)}>Qualification</Link>
            <Link to="/project" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link to="/certificate" onClick={() => setIsOpen(false)}>Certificates</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
