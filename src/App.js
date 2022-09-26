import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {preventDefaultBrowser } from "./utilities/fakedb"

function App() {
  preventDefaultBrowser();
  return (
    <div className="App">
        <Header></Header>
        <Shop></Shop>
    </div>
  );
}

export default App;
