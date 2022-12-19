import Cart from "./components/Cart";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import './static/css/app.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <div className="left-content">
        <Items/>
        </div>
        <div className="right-content">
          <Cart/>
        </div>
      </div>
    </div>
  );
}

export default App;
