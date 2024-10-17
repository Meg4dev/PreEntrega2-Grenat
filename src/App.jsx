import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemList from './components/ItemList'
import StaticPNG from "./components/StaticPNG";
function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <ItemListContainer message="Bienvenido a mi Eccomerce de Musica!" />
        <StaticPNG />
      </main>
    </>
  );
}

export default App;
