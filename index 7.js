import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  const [cart, setCart] = useState([]);
  const [contact, setContact] = useState({ name: "", email: "", message: "" });

  const addToCart = (tree) => {
    setCart([...cart, tree]);
  };

  const checkout = () => {
    alert("Redirecting to secure payment processor...");
    setCart([]);
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const submitContact = () => {
    alert(`Thank you, ${contact.name}. We will get back to you soon!`);
    setContact({ name: "", email: "", message: "" });
  };

  const fruitTrees = [
    {
      name: "Apple Tree",
      description: "A hardy fruit tree producing sweet apples perfect for wildlife and humans alike.",
      price: 29.99,
      image: "https://images.unsplash.com/photo-apple-tree"
    },
    {
      name: "Pear Tree",
      description: "Produces crisp, juicy pears ideal for attracting deer and other wildlife.",
      price: 34.99,
      image: "https://images.unsplash.com/photo-pear-tree"
    },
    {
      name: "Persimmon Tree",
      description: "A favorite among whitetail deer, this tree produces rich, sweet fruit in fall.",
      price: 39.99,
      image: "https://images.unsplash.com/photo-persimmon-tree"
    }
  ];

  return (
    <div className="min-h-screen bg-amber-50 text-green-900 p-4">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">MV Fruits and Forage</h1>
        <p className="text-lg mt-2">Wildlife Foodplots & Fruit Trees</p>
      </header>

      <section className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {fruitTrees.map((tree) => (
          <div key={tree.name} className="shadow-lg border border-green-300 p-4 rounded-xl">
            <img src={tree.image} alt={tree.name} className="w-full h-48 object-cover rounded-xl mb-4" />
            <h2 className="text-xl font-semibold mb-2">{tree.name}</h2>
            <p className="mb-2">{tree.description}</p>
            <p className="font-bold mb-4">${tree.price}</p>
            <button className="bg-green-700 hover:bg-green-800 text-white w-full py-2 rounded" onClick={() => addToCart(tree)}>Add to Cart</button>
          </div>
        ))}
      </section>

      <section className="max-w-4xl mx-auto mt-16 p-6 border-t border-green-200">
        <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="mb-4">
            {cart.map((item, index) => (
              <li key={index} className="mb-2">{item.name} - ${item.price}</li>
            ))}
          </ul>
        )}
        {cart.length > 0 && (
          <button className="bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded" onClick={checkout}>Proceed to Payment</button>
        )}
      </section>

      <section className="max-w-4xl mx-auto mt-16 p-6 border-t border-green-200">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p>
          MV Fruits and Forage was founded with a passion for the outdoors and a mission to provide high-quality fruit trees and foodplot solutions for wildlife enthusiasts. Based in the heart of the countryside, we specialize in cultivating trees that thrive in local conditions and attract deer, birds, and other wildlife to your property.
        </p>
      </section>

      <section className="max-w-4xl mx-auto mt-16 p-6 border-t border-green-200">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <div className="space-y-4">
          <input type="text" name="name" placeholder="Your Name" value={contact.name} onChange={handleContactChange} className="w-full p-2 border rounded" />
          <input type="email" name="email" placeholder="Your Email" value={contact.email} onChange={handleContactChange} className="w-full p-2 border rounded" />
          <textarea name="message" placeholder="Your Message" value={contact.message} onChange={handleContactChange} className="w-full p-2 border rounded" />
          <button className="bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded" onClick={submitContact}>Send Message</button>
        </div>
      </section>

      <footer className="text-center mt-16 p-4 border-t border-green-200">
        <p>&copy; 2025 MV Fruits and Forage. All rights reserved.</p>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
