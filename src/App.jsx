import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarContainer from "./components/NavBarContainer";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContainer from './components/CartContainer';
import CheckoutContainer from './components/CheckoutContainer';
import NotFound from './components/NotFound';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <BrowserRouter>
        <NavBarContainer />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId/item/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/checkout" element={<CheckoutContainer />} />
          <Route path="*" element={<NotFound title="Página no encontrada" message="La ruta que intentas visitar no existe o fue eliminada."/>} />
        </Routes>
        <Toaster position="top-right" reverseOrder={false} />
    </BrowserRouter>
  )
}

export default App
