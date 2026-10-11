
import OrderItem from "./OrderItem";

function OrderCart({
  order,
  total,
  itemCount,
  removeFromOrder,
  updateQuantity,
  clearOrder
}) {
  return (
    <aside className="cart-panel">
      <h2>Your Order ({itemCount})</h2>

      {order.length === 0 ? (
        <p className="empty-cart">
          Your cart is empty. Add something delicious!
        </p>
      ) : (
        <>
          <div className="cart-items">
            {order.map((item) => (
              <OrderItem
                key={item.cartId}
                item={item}
                removeFromOrder={removeFromOrder}
                updateQuantity={updateQuantity}
              />
            ))}
          </div>

          <div className="cart-footer">
            <div className="cart-total">
              <span>Total</span>
              <strong>${total.toFixed(2)}</strong>
            </div>

            <button
              className="checkout-button"
              onClick={() =>
                alert("Checkout coming soon!")
              }
            >
              Checkout
            </button>

            <button
              className="clear-button"
              onClick={clearOrder}
            >
              Clear Order
            </button>
          </div>
        </>
      )}
    </aside>
  );
}

export default OrderCart;
