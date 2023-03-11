import React, { useState } from "react";
import "./App.css";
import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
import Card from "./component/Cart/Cart";
import CardProvider from "./store/CartProvider";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CardProvider>
      <>
        {cartIsShown && <Card onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
          <Meals />
        </main>
      </>
    </CardProvider>
  );
}

export default App;
