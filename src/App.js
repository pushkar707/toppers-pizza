import React,{useEffect} from "react";
import Cart from "./components/Cart";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import PhoneBtns from "./components/PhoneBtns";
import { useGlobalContext } from "./context";
import './static/css/app.css'

function App() {
  const {setcart} = useGlobalContext()

  useEffect(() => {
		const existingCart = JSON.parse(
			localStorage.getItem('react-toppers-app-cart')
		);

		if (existingCart) {
			setcart(existingCart);
		}
	}, []);

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
