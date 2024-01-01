import React from "react";
import ReactDom from "react-dom/client";

//creating our application component.
function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

//Writing the component.

function Pizza({ name, ingredients }) {
  //markup.
  return (
    <>
      <img src="/pizzas/focaccia.jpg" alt="PIZZA HAI BHARWE" />
      <h2>{name}</h2>
      <p>{ingredients}</p>
    </>
  );
}

//COMPONENTS.
function Header() {
  return <h1>React Pizza</h1>;
}
function Footer() {
  return (
    <footer>
      We are currently open {new Date().toLocaleTimeString("en-US")}
    </footer>
  );
}
function Menu() {
  //JS LOGIC TO SHOW ALER.
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  if (hour >= openHour && hour <= closeHour) {
    alert("Restaraunt is open");
  } else {
    alert("we are closed");
  }

  //collection of pizzas.
  return (
    <div>
      <h3>Our Menu</h3>
      <Pizza
        name={"Foccacia"}
        ingredients={"Bread with italian olive oil and rosemar"}
      />
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
