import Cart from "./components/Cart";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import PhoneBtns from "./components/PhoneBtns";
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
      <PhoneBtns/>
    </div>
  );
}

export default App;
