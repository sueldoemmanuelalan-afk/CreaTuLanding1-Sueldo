import CartWidget from "./CartWidget";

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-black text-white px-6 py-4">
      <h1 className="text-xl font-bold">The Last Player</h1>

      <ul className="flex gap-6">
        <li className="cursor-pointer hover:text-red-500">Terror</li>
        <li className="cursor-pointer hover:text-green-500">Aventura</li>
        <li className="cursor-pointer hover:text-blue-500">Shooter</li>
        <li className="cursor-pointer hover:text-purple-500">Rol</li>
        <li className="cursor-pointer hover:text-yellow-500">Indie</li>
      </ul>

      <CartWidget />
    </nav>
  );
}

export default Navbar;
