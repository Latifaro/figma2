import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./App.module.scss";

function App() {
  //counter
  const [cartItems, setCartItems] = useState(0);
  // summan 
  const [pay, setPay] = useState(0);
  //bilder
  const [clicked, setClicked] = useState(false);
  // cart empty
  const [empty, setEmpty] = useState(true);

  function remove() {
    setCartItems(false);
    setClicked(false);
    setPay(false);
    setEmpty(true);
  }

  function increment() {
    if (cartItems <= 1) {
      setClicked(true);
      setEmpty(false);
    }
    setCartItems(cartItems + 1);
    setPay(pay + 125);
  }

  //för counter
  function decrement() {
    if (cartItems > 0) {
      setCartItems(cartItems - 1);
      setPay(pay - 125);
    } else {
      setCartItems(false);
      setClicked(false);
    }
  }
  return (
    <div className="App">
      <Navbar
        remove={remove}
        cartItems={cartItems}
        clicked={clicked}
        pay={pay}
        empty={empty}
      />
      <Main increment={increment} decrement={decrement} cartItems={cartItems} />
    </div>
  );
}

export default App;
