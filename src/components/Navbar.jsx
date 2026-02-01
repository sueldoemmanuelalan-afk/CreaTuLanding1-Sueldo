import { useRef } from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router";

function Navbar({ categories }) {
  const detailRef = useRef(null);
  const closeDDropdown = () => {
    detailRef.current?.removeAttribute("open");
  };

  return (
    <nav className="navbar flex items-center justify-between bg-black text-white px-6 py-4">
      <Link to="/" className="text-xl font-bold">The LasT Player</Link>
      <div className="dropdown relative ">
        <details ref={detailRef}>
          <summary className="cursor-pointer bg-red-500 hover:bg-yellow-300 hover:text-black px-2 py-1 rounded">Categorías</summary>
            <ul className="mt-2 w-50 lg:grid-cols-2 lg:w-100 ms-[-75px] grid grid-cols-1 z-10 bg-gray-800 p-4 rounded shadow-lg absolute">
              {categories.map((category) => (
              <Link to={`/category/${category}`} key={category} onClick={closeDDropdown} className=" cursor-pointer hover:text-yellow-300">{category}</Link>
              ))}
            </ul>
        </details>
      </div>
      <CartWidget />
    </nav>
  );
}

export default Navbar;
