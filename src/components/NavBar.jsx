import { useState } from "react";
import { Link } from "react-scroll";
import logoImage from "../assets/images/logo.png";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src={logoImage} alt="Logo" className="h-12" />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex flex-grow justify-center items-center space-x-8">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-[#5bb450] font-bold text-xl hover:text-white cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="product"
            smooth={true}
            duration={500}
            className="text-[#5bb450] font-bold text-xl hover:text-white cursor-pointer"
          >
            Products
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="text-[#5bb450] font-bold text-xl hover:text-white cursor-pointer"
          >
            Services
          </Link>
          <Link
            to="blog"
            smooth={true}
            duration={500}
            className="text-[#5bb450] font-bold text-xl hover:text-white cursor-pointer"
          >
            Blog
          </Link>
          <Link
            to="team"
            smooth={true}
            duration={500}
            className="text-[#5bb450] font-bold text-xl hover:text-white cursor-pointer"
          >
            Team
          </Link>
        </div>

        {/* Button */}
        <div className="hidden md:flex">
          <button className="bg-[#5bb450] text-white font-bold px-6 py-2 rounded-full hover:bg-green-600 transition duration-300">
            Let Us Save The World
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-[#5bb450] hover:text-[#5bb450]" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isMobileMenuOpen && (
        <ul className="flex flex-col gap-4 mt-4 bg-white/80 backdrop-blur-md p-4 rounded-lg">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-[#5bb450] font-bold text-xl"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="product"
              smooth={true}
              duration={500}
              className="text-[#5bb450] font-bold text-xl"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="text-[#5bb450] font-bold text-xl"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="blog"
              smooth={true}
              duration={500}
              className="text-[#5bb450] font-bold text-xl"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="team"
              smooth={true}
              duration={500}
              className="text-[#5bb450] font-bold text-xl"
            >
              Team
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
