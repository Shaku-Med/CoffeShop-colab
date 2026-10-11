# CoffeeShop
A React coffee shop ordering app, with plans to expand into a complete coffee shop system.
A coffee shop ordering app designed for customers to order when they arrive. This is just the start — in the future, I plan to expand it into a more complete system for customers, employees, and the business.
## Project Structure

    coffee-shop/src/
    ├── App.jsx                  # Holds the order, search, and filter state
    ├── App.css / index.css      # Styles and theme colors
    └── components/
        ├── Header.jsx           # Shop title and tagline
        ├── MenuFilters.jsx      # Search bar and category tabs
        ├── Menu.jsx             # Menu data and filtered list of drinks
        ├── MenuItem.jsx         # A single drink card
        ├── DrinkCustomizer.jsx  # Popup for size, milk, sweetness, extras
        ├── OrderCart.jsx        # Cart panel with total and buttons
        └── OrderItem.jsx        # A single line in the cart
