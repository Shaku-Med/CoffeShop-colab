
import { useState } from "react";

function DrinkCustomizer({ drink, onAdd, onClose }) {
  const [size, setSize] = useState("Medium");
  const [milk, setMilk] = useState("Whole Milk");
  const [sweetness, setSweetness] = useState("Regular");
  const [extras, setExtras] = useState([]);

  const sizes = {
    Small: 0,
    Medium: 0.50,
    Large: 1.00
  };

  const milks = {
    "Whole Milk": 0,
    "Oat Milk": 0.75,
    "Almond Milk": 0.75
  };

  const extraOptions = {
    "Extra Shot": 1.00,
    "Caramel": 0.50,
    "Whipped Cream": 0.50
  };

  function toggleExtra(extra) {
    setExtras((previous) =>
      previous.includes(extra)
        ? previous.filter((item) => item !== extra)
        : [...previous, extra]
    );
  }

  const extrasTotal = extras.reduce(
    (total, extra) => total + extraOptions[extra],
    0
  );

  const finalPrice =
    drink.price + sizes[size] + milks[milk] + extrasTotal;

  function handleAdd() {
    onAdd({
      ...drink,
      size,
      milk,
      sweetness,
      extras,
      price: finalPrice,
      cartId: JSON.stringify([
        drink.id, size, milk, sweetness, [...extras].sort()
      ])
    });

    onClose();
  }

  return (
    <section className="customizer">
      <h2>Customize {drink.name}</h2>

      <label htmlFor="drink-size">Size</label>
      <select
        id="drink-size"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      >
        {Object.keys(sizes).map((option) => (
          <option key={option} value={option}>
            {option} (+${sizes[option].toFixed(2)})
          </option>
        ))}
      </select>

      <label htmlFor="drink-milk">Milk</label>
      <select
        id="drink-milk"
        value={milk}
        onChange={(e) => setMilk(e.target.value)}
      >
        {Object.keys(milks).map((option) => (
          <option key={option} value={option}>
            {option} (+${milks[option].toFixed(2)})
          </option>
        ))}
      </select>

      <label htmlFor="drink-sweetness">Sweetness</label>
      <select
        id="drink-sweetness"
        value={sweetness}
        onChange={(e) => setSweetness(e.target.value)}
      >
        {["None", "Light", "Regular", "Extra"].map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>

      <fieldset>
        <legend>Extras</legend>
        {Object.entries(extraOptions).map(([name, price]) => (
          <label key={name} className="extra-option">
            <input
              type="checkbox"
              checked={extras.includes(name)}
              onChange={() => toggleExtra(name)}
            />
            {name} (+${price.toFixed(2)})
          </label>
        ))}
      </fieldset>

      <p className="customizer-total">
        Total: ${finalPrice.toFixed(2)}
      </p>

      <div className="customizer-actions">
        <button type="button" onClick={onClose}>
          Cancel
        </button>
        <button type="button" onClick={handleAdd}>
          Add to Order
        </button>
      </div>
    </section>
  );
}

export default DrinkCustomizer;
