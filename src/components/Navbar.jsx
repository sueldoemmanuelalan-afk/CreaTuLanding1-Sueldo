import { useRef, useState } from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import logo from "../assets/LogoTheLastPlayer1.jpg";

function Navbar({ categories }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const detailRef = useRef(null);
  const closeDDropdown = () => {
    detailRef.current?.removeAttribute("open");
  };

  return (
  <div className="relative">
    <nav className="navbar flex items-center justify-between bg-black border-b border-yellow-500 text-white px-6 py-4 fixed w-full top-0 z-50">
      <Link to="/" 
        className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 flex items-center"
      >
      <img
        src={logo}
        alt="logo The Last Player"
        title="The Last Player"
        className="w-15 transition-transform duration-700 hover:-rotate-[360deg]"
      />
      <span className="hidden lg:block text-3xl font-bold ml-2 hover:text-red-500">
        The LasT Player
      </span>
      </Link>
        <button 
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <div className="hidden lg:block relative">
          <details ref={detailRef}>
            <summary className="cursor-pointer bg-red-500 hover:bg-yellow-300 hover:text-black px-2 py-1 rounded">
              Categorías
            </summary>
            <ul className="mt-2 w-50 lg:w-100 grid grid-cols-1 z-10 bg-gray-800 p-4 rounded shadow-lg absolute">
              {categories.map((category) => (
              <Link
                to={`/category/${category}`}
                key={category}
                onClick={closeDDropdown}
                className="hover:text-yellow-300"
              >
                {category}
              </Link>
              ))}
            </ul>
          </details>
        </div>
        <CartWidget />
    </nav>
    
    {menuOpen && (
      <div className="text-white lg:hidden fixed top-[72px] left-0 w-full bg-black border-t border-gray-700 z-40">
        <ul className="flex flex-col p-4 gap-3">
          {categories.map((category) => (
            <li key={category}>
              <Link
                to={`/category/${category}`}
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-300"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      )}
  </div>
    );
}

export default Navbar;
