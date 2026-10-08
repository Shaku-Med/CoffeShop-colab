import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
  const [order, setOrder] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedDrink, setSelectedDrink] = useState(null);

  return (
    <main className="app">
      <Header />
      <Menu />
    </main>
  );
}

export default App;
