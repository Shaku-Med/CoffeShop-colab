import MenuItem from "./MenuItem";

export const MENU_ITEMS = [
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    category: 'Hot Coffee',
    description: 'Espresso with steamed milk and a thick layer of foam.',
    price: 4.50,
    emoji: '☕',
    customizable: true,
  },
  {
    id: 'latte',
    name: 'Latte',
    category: 'Hot Coffee',
    description: 'Espresso mixed with smooth steamed milk.',
    price: 4.75,
    emoji: '☕',
    customizable: true,
  },
  {
    id: 'americano',
    name: 'Americano',
    category: 'Hot Coffee',
    description: 'Espresso combined with hot water for a smooth, bold coffee.',
    price: 3.50,
    emoji: '☕',
    customizable: true,
  },
  {
    id: 'iced-latte',
    name: 'Iced Latte',
    category: 'Cold Coffee',
    description: 'Espresso and cold milk served over ice.',
    price: 5.00,
    emoji: '🧊',
    customizable: true,
  },
  {
    id: 'caramel-iced-coffee',
    name: 'Caramel Iced Coffee',
    category: 'Cold Coffee',
    description: 'Iced coffee with milk and sweet caramel.',
    price: 5.25,
    emoji: '🥤',
    customizable: true,
  },
  {
    id: 'hot-chocolate',
    name: 'Hot Chocolate',
    category: 'Other Drinks',
    description: 'Rich chocolate blended with warm steamed milk.',
    price: 4.00,
    emoji: '🍫',
    customizable: true,
  },

]

function Menu({ searchTerm, category, quantitiesById, onSelectDrink }) {
  const query = searchTerm.trim().toLowerCase()

  const visibleItems = MENU_ITEMS.filter((drink) => {
    const matchesCategory = category === 'All' || drink.category === category
    const matchesSearch =
      drink.name.toLowerCase().includes(query) ||
      drink.description.toLowerCase().includes(query)

    return matchesCategory && matchesSearch
  })

  return (
    <section className="menu">
      {visibleItems.length === 0 ? (
        <p className="empty-menu">No drinks match your search.</p>
      ) : (
        visibleItems.map((drink) => (
          <MenuItem
            key={drink.id}
            drink={drink}
            qtyInCart={quantitiesById[drink.id] ?? 0}
            onAdd={onSelectDrink}
          />
        ))
      )}
    </section>
  )
}

export default Menu
