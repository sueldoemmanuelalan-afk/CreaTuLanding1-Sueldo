import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'


function App() {

  return (
    <div>
      <Navbar />
      <ItemListContainer mensaje="Bienvenidos a The Last Player. Próximamente , lista de juegos..." />
    </div>
  )
}

export default App
