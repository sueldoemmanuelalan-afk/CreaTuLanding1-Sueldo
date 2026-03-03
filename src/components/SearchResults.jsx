import ItemList from "./ItemList";

function SearchResults({ query, setQuery, results, showResults }) {
  return (
    <div className="mt-25 px-6 text-white flex flex-wrap justify-center gap-6 items-center ">

      <h2 className="text-2xl font-bold ">
      <span className="text-yellow-400">Buscar </span><span className="text-red-500" >videojuegos :</span>
      </h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Escribe el nombre del juego..."
        className="w-full max-w-sm px-2 py-1 rounded bg-gray-700 text-white -mb-2 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
      />
      {showResults && (
        <div className="mt-12 w-full px-6">
          <ItemList items={results} />
        </div>
      )}

      {!showResults && (
        <div className="absolute bottom-0 w-full -z-10">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none w-full h-[100vh] object-cover opacity-60"
          >
            <source src="/public/bg_movie.mp4" type="video/mp4" />
          </video>
        </div>
      )}

    </div>
  );
}

export default SearchResults;