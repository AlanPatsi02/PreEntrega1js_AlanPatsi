import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {

  return (
    <><NavBar />
    <ItemListContainer greeting ={"Bienvenido a mi ecommerce donde encontrarás todo para armar tu setup!"} />
    </>
  )
}

export default App
