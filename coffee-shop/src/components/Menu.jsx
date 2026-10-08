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

function Menu() {
  return (
    <section className="menu">
      {MENU_ITEMS.map((drink) => (
        <MenuItem key={drink.id} drink={drink} />
      ))}
    </section>
  )
}

export default Menu
