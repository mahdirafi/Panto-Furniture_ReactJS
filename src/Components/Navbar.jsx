import { useEffect, useState } from "react";
import { FaBars, FaShoppingBag, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router";

const navItems = [
  { path: "/", label: "Furniture" },
  { path: "/shop", label: "Shop" },
  { path: "/about", label: "About Us" },
  { path: "/contact", label: "Contact" },
];

const NavItems = ({ toggle }) => {
  return (
    <ul className="flex flex-col md:flex-row items-center md:space-x-8 gap-8">
      {navItems.map((item, index) => (
        <li key={index} >
          <NavLink
          toggle={toggle}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "text-primary font-bold" : "hover:text-primary"
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScroll , setIsScroll] = useState(false);
  const toggle = () => {
    setMenuOpen((preState) => !preState);
  };

  // dynamic Scroll
  useEffect(() => {
    const handleScroll = ()=>{
      if(window.scrollY > 50){
        setIsScroll(true)
    }else{
      setIsScroll(false)
    }
    }
    window.addEventListener('scroll' , handleScroll);
    return(window.addEventListener('scroll',handleScroll));
  } , [])

  return (
    <header className={`fixed top-0 right-0 left-0 z-50 transition duration-300 ease-in-out  
    ${isScroll ? "bg-white shadow-md dark:text-gray-950 " : "text-white bg-transparent"}`}>
      <nav className="max-w-screen-2xl container mx-auto flex items-center justify-between px-2 py-6 ">
        {/* logo */}
        <NavLink to="/" className="font-bold text-2xl">
          Panto
        </NavLink>

        {/* hamburger for mobile menu */}
        <div onClick={toggle} className="md:hidden cursor-pointer">
          {menuOpen ? null : <FaBars />}
        </div>

        {/* Desktop menus */}
        <div className="hidden md:flex">
          <NavItems />
        </div>

        {/* mobile menus */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-black opacity-80 
            flex flex-col items-center justify-center
                     text-white space-y-8 transition-transform transform duration-300
                     ${menuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
        >
          <div className="absolute top-6 right-3 text-xl cursor-pointer" onClick={toggle}>
            <FaTimes />
          </div>
          <NavItems toggle={toggle} />
        </div>

        {/* cart icon */}
        <div className="hidden md:block relative cursor-pointer">
          <FaShoppingBag className="text-3xl" />
          <sup
            className="absolute top-2 left-4 bg-primary text-white w-5 h-5 flex 
          items-center justify-center rounded-full text-sm"
          >
            0
          </sup>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
