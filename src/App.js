import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import *  as Icon from "../node_modules/react-feather";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Icon.Camera color="red" size={32}/>
      <h1 className="display-1">Display 1</h1>
      <Form />
      </header>
    </div>
  );
}

export default App;
