// import logo from './logo.svg';
// import './App.css';
import { HomeView } from "./components/HomeView/HomeView";
import { NavBar } from "./components/HomeView/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ItemCount } from "./components/ItemCount/ItemCount";
import { Pika } from "./components/Pika/Pika";

function App() {

 

  const texto = "Hola soy otro saludo"

  //Ejemplo 1
  

  return (
    <div>
      <NavBar />
      
      {/* <ItemListContainer saludo="Hola Mundo!" /> */}
      <ItemListContainer saludo={texto} />
      <ItemCount />
      <hr />
      <Pika />

      

      

    </div>
  );
}

export default App;

