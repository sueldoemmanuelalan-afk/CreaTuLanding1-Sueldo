import { useNavigate } from "react-router-dom";

function NotFound({ title, message }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-4xl text-center border-4 border-yellow-400 rounded-3xl p-10 shadow-[0_0_30px_#facc15] bg-zinc-900">
        <h2 className="text-7xl md:text-9xl font-extrabold text-yellow-400 drop-shadow-[0_0_15px_#facc15] mb-6">
          404
        </h2>
        <h3 className="text-2xl md:text-4xl font-bold text-yellow-400 mb-6 tracking-widest">
          NOT FOUND
        </h3>
        <h1 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4">
          {title}
        </h1>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          {message}
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-yellow-400 hover:bg-red-600 hover:text-white text-black font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg">
          Volver al inicio
        </button>
      </div>
    </div>
  );
}

export default NotFound;