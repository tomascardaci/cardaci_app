import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ItemListContainer greeting={"¡Bienvenidos!"}>
          <h3>Proyecto de Tomás Cardaci</h3>
        </ItemListContainer> 
      </header>
      <NavBar/> 
    </div>
  );
}

export default App;
