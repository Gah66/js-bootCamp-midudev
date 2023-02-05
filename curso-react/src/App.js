import './App.css'; 
import Mensaje from './Mensaje.js';

const Description = () =>{
  return <p>Este es mi nuevo proyecto React</p>
}

const App = () => {
  /* NO COLOCAR LOS COMPONENTES DENTRO DE LA APP, SIEMPRE FUERA DE LA APP PRINCIPAL*/

  return (
    <div className="App">
      <Mensaje color="crimson" message="Estamos Trabajando"/>
      <Mensaje color="lightgreen" message="En un curso de React"/>
      <Mensaje color="gray" message="Malvado Gafo"/>
      <Description />
    </div>
  );
}

export default App;
