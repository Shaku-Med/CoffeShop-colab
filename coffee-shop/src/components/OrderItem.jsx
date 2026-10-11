
function OrderItem({
  item,
  removeFromOrder,
  updateQuantity
}) {
  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <span className="cart-item-emoji">
          {item.emoji}
        </span>

        <div>
          <h3>{item.name}</h3>
          {item.size && (
            <p>
              {[item.size, item.milk, item.sweetness, ...item.extras].join(" · ")}
            </p>
          )}
          <p>${item.price.toFixed(2)} each</p>
        </div>
      </div>

      <div className="cart-item-actions">
        <div className="quantity-controls">
          <button
            aria-label={`Decrease ${item.name} quantity`}
            onClick={() => updateQuantity(item.cartId, -1)}
          >
            −
          </button>

          <span>{item.quantity}</span>

          <button
            aria-label={`Increase ${item.name} quantity`}
            onClick={() => updateQuantity(item.cartId, 1)}
          >
            +
          </button>
        </div>

        <strong>
          ${(item.price * item.quantity).toFixed(2)}
        </strong>

        <button
          className="remove-button"
          aria-label={`Remove ${item.name}`}
          onClick={() => removeFromOrder(item.cartId)}
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default OrderItem;
