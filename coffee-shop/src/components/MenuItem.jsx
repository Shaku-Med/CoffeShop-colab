function MenuItem({ drink, qtyInCart, onAdd }) {
  const {
    id,
    name,
    category,
    price,
    emoji,
    description,
    customizable
  } = drink;

  return (
    <article className="card">
      <div className="card-art" aria-hidden="true">
        <span className="card-emoji">{emoji}</span>
      </div>

      <div className="card-body">
        <p className="card-category">{category}</p>
        <h3 className="card-title">{name}</h3>
        <p className="card-blurb">{description}</p>
      </div>

      <div className="card-footer">
        <span className="card-price">
          ${price.toFixed(2)}
        </span>

        <button
          type="button"
          className="add-button"
          onClick={() => onAdd(drink)}
        >
          {qtyInCart > 0
            ? `In cart ×${qtyInCart} · Add`
            : "Add to cart"}
        </button>
      </div>
    </article>
  );
}

export default MenuItem;