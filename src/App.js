import './App.css';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from "./Data/data";

function App() {
  return (
    <div className="App">
      <Home dataProps={data}/>
    </div>
  );
}

export default App;
