import "bootstrap/dist/css/bootstrap.css";
import Cabecera from "./Cabecera";
import Lista from "./lista";
import PieDePagina from "./PieDePagina";

const alumnos = [
  { id: 1, nombre: "juan" },
  { id: 2, nombre: "matias" },
  { id: 3, nombre: "damian" },
  { id: 4, nombre: "diana" },
  { id: 5, nombre: "alejandra" },
  { id: 6, nombre: "jorge" },
]

function App() {
  return (    
    <div className="App">
      <Cabecera titulo="hola soy un titulo" />
      <main className="container w-50">
        <Lista alumnos={alumnos}></Lista> 
      </main>
      <PieDePagina texto="CopyRigth 2021. Educacion IT"></PieDePagina>      
    </div>
  );
}

export default App;
