function MenuItem({ drink }) {
  return (
    <article className="card">
      <div className="card-art">
        <span className="card-emoji">{drink.emoji}</span>
      </div>

      <div className="card-body">
        <p className="card-category">{drink.category}</p>
        <h3 className="card-title">{drink.name}</h3>
        <p className="card-blurb">{drink.description}</p>
      </div>

      <div className="card-footer">
        <span className="card-price">
          ${drink.price.toFixed(2)}
        </span>
        <button className="add-button">Add +</button>
      </div>
    </article>
  )
}

export default MenuItem