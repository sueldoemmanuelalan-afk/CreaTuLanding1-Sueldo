import { BrowserRouter, Routes, Route } from 'react-router';
import NavBarContainer from "./components/NavBarContainer";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  return (
    <BrowserRouter>
        <NavBarContainer />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
