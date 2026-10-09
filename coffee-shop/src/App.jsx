
import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Menu from "./components/Menu";
import OrderCart from "./components/OrderCart";

function App() {
  const [order, setOrder] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedDrink, setSelectedDrink] = useState(null);

  // Add a drink to the order
  function addToOrder(drink) {
    setOrder((previousOrder) => {
      const existingDrink = previousOrder.find(
        (item) => item.id === drink.id
      );

      if (existingDrink) {
        return previousOrder.map((item) =>
          item.id === drink.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...previousOrder,
        { ...drink, quantity: 1 }
      ];
    });
  }

  // Remove a drink completely
  function removeFromOrder(drinkId) {
    setOrder((previousOrder) =>
      previousOrder.filter((item) => item.id !== drinkId)
    );
  }

  // Change the quantity of a drink
  function updateQuantity(drinkId, amount) {
    setOrder((previousOrder) =>
      previousOrder
        .map((item) =>
          item.id === drinkId
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  // Empty the entire cart
  function clearOrder() {
    setOrder([]);
  }

  // Calculate total price
  const total = order.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Count all drinks, including quantities
  const itemCount = order.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <main className="app">
      <Header />

      <div className="shop-layout">
        <Menu addToOrder={addToOrder} />

        <OrderCart
          order={order}
          total={total}
          itemCount={itemCount}
          removeFromOrder={removeFromOrder}
          updateQuantity={updateQuantity}
          clearOrder={clearOrder}
        />
      </div>
    </main>
  );
}

export default App;
