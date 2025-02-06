import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {

const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = ()=> {
  setMenuOpen(!menuOpen);
}

  return (
    <header className="bg-white shadow">
      <nav className="flex items-center justify-between w-[92%] mx-auto">
        {/* Logo */}
        <div>
          <h2 className="mx-12">Horizon Hôtel</h2>
        </div>
        {/* Logo */}

        {/* Liens de navigation */}
        <div className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0  ${
          menuOpen ? "top-[9%]" : "top-[-100%]"
          } md:w-auto w-full flex items-center px-5`}>
          <ul className="flex items-center flex-col md:flex-row gap-10 ">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">Accueil</a>
            </li>
            <li>
              <a href="#about" className="text-gray-600 hover:text-gray-900">A propos</a>
            </li>
            <li>
              <a href="#book" className="text-gray-600 hover:text-gray-900">Réservation</a>
            </li>
           
            <li>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </li>
          </ul>
        </div>
        {/* Liens de navigation */}

        {/* Button et icon */}
        <div className="flex items-center gap-4">
          <button className="bg-slate-200 px-2 py-2 rounded-full my-3 md:mx-12">Connexion</button>
          <RxHamburgerMenu className="mr-5 text-3xl cursor-pointer md:hidden"
          onClick={toggleMenu}
          name={menuOpen ? "close":"menu"}
          />
        </div>
        {/* Button et icon */}
        
        
      </nav>
    </header>
  );
};

export default Header;
