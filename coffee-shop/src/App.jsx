
import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Menu from "./components/Menu";
import OrderCart from "./components/OrderCart";
import MenuFilters from "./components/MenuFilters";
import DrinkCustomizer from "./components/DrinkCustomizer";

function App() {
  const [order, setOrder] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedDrink, setSelectedDrink] = useState(null);

  // Add a drink to the order. Each customization is its own cart line,
  // identified by cartId (falls back to id for uncustomized drinks).
  function addToOrder(drink) {
    const cartId = drink.cartId ?? drink.id;

    setOrder((previousOrder) => {
      const existingDrink = previousOrder.find(
        (item) => item.cartId === cartId
      );

      if (existingDrink) {
        return previousOrder.map((item) =>
          item.cartId === cartId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...previousOrder,
        { ...drink, cartId, quantity: 1 }
      ];
    });
  }

  // Remove a drink completely
  function removeFromOrder(cartId) {
    setOrder((previousOrder) =>
      previousOrder.filter((item) => item.cartId !== cartId)
    );
  }

  // Change the quantity of a drink
  function updateQuantity(cartId, amount) {
    setOrder((previousOrder) =>
      previousOrder
        .map((item) =>
          item.cartId === cartId
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

  // Open the customizer for customizable drinks, otherwise add directly
  function handleSelectDrink(drink) {
    if (drink.customizable) {
      setSelectedDrink(drink);
    } else {
      addToOrder(drink);
    }
  }

  // How many of each drink (across all customizations) are in the cart
  const quantitiesById = order.reduce((counts, item) => {
    counts[item.id] = (counts[item.id] ?? 0) + item.quantity;
    return counts;
  }, {});

  return (
    <main className="app">
      <Header />

      <div className="shop-layout">
        <div>
          <MenuFilters
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            category={category}
            onCategoryChange={setCategory}
          />

          <Menu
            searchTerm={searchTerm}
            category={category}
            quantitiesById={quantitiesById}
            onSelectDrink={handleSelectDrink}
          />
        </div>

        <OrderCart
          order={order}
          total={total}
          itemCount={itemCount}
          removeFromOrder={removeFromOrder}
          updateQuantity={updateQuantity}
          clearOrder={clearOrder}
        />
      </div>

      {selectedDrink && (
        <div
          className="customizer-overlay"
          onClick={() => setSelectedDrink(null)}
        >
          <div onClick={(event) => event.stopPropagation()}>
            <DrinkCustomizer
              key={selectedDrink.id}
              drink={selectedDrink}
              onAdd={addToOrder}
              onClose={() => setSelectedDrink(null)}
            />
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
