import { useState, useEffect } from "react";
import { getAllItemsArray } from "../firebase/db";
import SearchResults from "../components/SearchResults";
import Swal from "sweetalert2";

function SearchResultsContainer() {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);
  const [results, setResults] = useState([]);
  const [alertShown, setAlertShown] = useState(false);

  useEffect(() => {
    getAllItemsArray().then(data => setItems(data));
  }, []);

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }

    const filtered = items.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered);

    if (filtered.length === 0 && !alertShown) {
    setAlertShown(true);

    Swal.fire({
      title: 'Juego no encontrado 🎮',
      text: 'No encontramos resultados con ese nombre.',
      icon: 'warning',
      confirmButtonText: 'Seguir buscando',
      confirmButtonColor: '#dc2626',
      background: '#0f0f0f',
      color: '#facc15',
      customClass: {
        popup: 'swal-gamer'
      }
    }).then(() => {
      setAlertShown(false);
    });
  }

  }, [query, items]);

  const showResults = query.trim() !== "" && results.length > 0;

  return (
    <SearchResults
      query={query}
      setQuery={setQuery}
      results={results}
      showResults={showResults}
    />
  );
}

export default SearchResultsContainer;