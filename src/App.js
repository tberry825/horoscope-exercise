import './App.css';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from "./Data/data";

function App() {
  return (
    <div className="App" style = {{
      backgroundImage:
      'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrFLeIrapEaZCJuw7YtWVFXDYcovUttTYvxLhcXKfUhbMGHS5fzkMcJ8ho9d9rf88pmVg&usqp=CAU")',
      backgroundRepeat: 'no-repeat', 
      backgroundSize: 'cover',
   }}>
      <Home dataProps={data}/>
    </div>
  );
}

export default App;
