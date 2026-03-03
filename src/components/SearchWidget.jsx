import { useNavigate } from "react-router-dom";

function SearchWidget() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/search")}
      className="text-white text-xl hover:text-yellow-400 transition cursor-pointer"
    >
    <span className="text-3xl">🔍</span>
    </button>
  );
}

export default SearchWidget;