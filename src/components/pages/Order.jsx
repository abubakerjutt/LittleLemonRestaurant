import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "../../assets/css/Order.css";

const Order = () => {
  // Categories for our menu
  const categories = ["Starters", "Main Dishes", "Desserts", "Drinks"];
  const [activeCategory, setActiveCategory] = useState("Starters");
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  
  // Use cart context
  const { 
    cart, 
    addToCart, 
    removeFromCart, 
    updateQuantity, 
    getTotalItems, 
    getTotalPrice, 
    clearCart 
  } = useCart();

  // Sample menu items (same as in Menu.jsx)
  const menuItems = {
    Starters: [
      {
        id: 1,
        name: "Greek Salad",
        price: 12.99,
        description:
          "Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil.",
        image: "/images/greek-salad.jpg",
      },
      {
        id: 2,
        name: "Bruschetta",
        price: 16.99,
        description:
          "Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil.",
        image: "/images/bruschetta.jpg",
      },
      {
        id: 3,
        name: "Hummus",
        price: 10.99,
        description:
          "Creamy blend of chickpeas, tahini, lemon juice, and garlic. Served with warm pita bread.",
        image: "/images/menu/hummus.webp",
      },
      {
        id: 4,
        name: "Tzatziki",
        price: 9.99,
        description:
          "Yogurt mixed with cucumber, garlic, salt, olive oil, and herbs. A refreshing dip or sauce.",
        image: "/images/menu/tzatziki.webp",
      },
    ],
    "Main Dishes": [
      {
        id: 5,
        name: "Moussaka",
        price: 18.99,
        description:
          "Layered eggplant, minced meat, and béchamel sauce. A Greek classic with deep flavors.",
        image: "/images/menu/moussaka.webp",
      },
      {
        id: 6,
        name: "Grilled Sea Bass",
        price: 24.99,
        description:
          "Fresh Mediterranean sea bass, grilled to perfection with olive oil, lemon, and herbs.",
        image: "/images/menu/sea-base.jpeg",
      },
      {
        id: 7,
        name: "Souvlaki Platter",
        price: 19.99,
        description:
          "Skewers of marinated pork or chicken, served with pita bread, tzatziki, and a side of Greek salad.",
        image: "/images/menu/souvlaki.jpeg",
      },
      {
        id: 8,
        name: "Pasta Primavera",
        price: 17.99,
        description:
          "Fresh pasta with seasonal vegetables, herbs, and light cream sauce. Garnished with parmesan.",
        image: "/images/menu/pasta-carbonara.webp",
      },
    ],
    Desserts: [
      {
        id: 9,
        name: "Lemon Dessert",
        price: 8.5,
        description:
          "Fresh baked lemon bread coated in salt and sugar. Powdered in citrus and lemon zest.",
        image: "/images/lemon-dessert.jpg",
      },
      {
        id: 10,
        name: "Baklava",
        price: 9.99,
        description:
          "Rich, sweet pastry made of layers of filo filled with chopped nuts and sweetened with honey.",
        image: "/images/baklava.jpg",
      },
    ],
    Drinks: [
      {
        id: 11,
        name: "House Wine",
        price: 8.99,
        description:
          "Our selection of red or white wine from local Mediterranean vineyards.",
        image: "/images/wine.jpg",
      },
      {
        id: 12,
        name: "Sparkling Water",
        price: 3.99,
        description: "Refreshing sparkling water with lemon or lime.",
        image: "/images/water.jpg",
      },
    ],
  };

  // Handle checkout
  const handleCheckout = (e) => {
    e.preventDefault();
    alert(
      "Order placed successfully! Your food will be ready for pickup soon."
    );
    clearCart();
    setIsCheckoutOpen(false);
  };

  return (
    <div className="order-page">
      <div className="container">
        <section className="order-hero">
          <h1>Your Cart</h1>
          <p>
            Review your items and checkout when you're ready. Your delicious meal is just a few clicks away!
          </p>
        </section>

        <div className="order-content">
          {cart.length === 0 ? (
            <div className="empty-cart-section">
              <div className="empty-cart-message">
                <i className="fas fa-shopping-cart"></i>
                <h2>Your cart is empty</h2>
                <p>Add some delicious dishes from our menu!</p>
                <Link to="/menu" className="back-to-menu-btn">Browse Menu</Link>
              </div>
            </div>
          ) : (
            <div className="cart-details-section">
              <div className="cart-items-list">
                <h2>Your Items</h2>
                {cart.map((item) => (
                  <div key={item.id} className="cart-detail-item">
                    <div className="cart-item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="cart-item-info">
                      <h3>{item.name}</h3>
                      <p className="cart-item-price">${item.price.toFixed(2)}</p>
                      <p className="cart-item-desc">{item.description}</p>
                    </div>
                    <div className="cart-item-actions">
                      <div className="quantity-control">
                        <button 
                          className="qty-btn decrease"
                          onClick={() => removeFromCart(item.id)}
                        >
                          -
                        </button>
                        <span className="item-qty">{item.quantity}</span>
                        <button 
                          className="qty-btn increase"
                          onClick={() => addToCart(item)}
                        >
                          +
                        </button>
                      </div>
                      <p className="item-total">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="order-summary-section">
                <div className="order-summary-card">
                  <h2>Order Summary</h2>
                  <div className="summary-details">
                    <div className="summary-row">
                      <span>Items ({getTotalItems()}):</span>
                      <span>${getTotalPrice().toFixed(2)}</span>
                    </div>
                    <div className="summary-row">
                      <span>Delivery Fee:</span>
                      <span>$3.99</span>
                    </div>
                    <div className="summary-row">
                      <span>Tax:</span>
                      <span>${(getTotalPrice() * 0.08).toFixed(2)}</span>
                    </div>
                    <div className="summary-total">
                      <span>Total:</span>
                      <span>${(getTotalPrice() + 3.99 + (getTotalPrice() * 0.08)).toFixed(2)}</span>
                    </div>
                  </div>
                  <button 
                    className="checkout-btn"
                    onClick={() => setIsCheckoutOpen(true)}
                  >
                    Proceed to Checkout
                  </button>
                  <Link to="/menu" className="continue-shopping-btn">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {isCheckoutOpen && (
          <div className="checkout-overlay">
            <div className="checkout-modal">
              <button
                className="close-modal"
                onClick={() => setIsCheckoutOpen(false)}
              >
                &times;
              </button>

              <h2>Checkout</h2>

              <div className="checkout-summary">
                <h3>Order Summary</h3>
                {cart.map((item) => (
                  <div key={item.id} className="summary-item">
                    <p>
                      {item.name} x {item.quantity}
                    </p>
                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
                <div className="summary-total">
                  <h4>Total:</h4>
                  <p>${(getTotalPrice() + 3.99 + (getTotalPrice() * 0.08)).toFixed(2)}</p>
                </div>
              </div>

              <form onSubmit={handleCheckout} className="checkout-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>

                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <textarea id="address" name="address" rows="3" required />
                </div>

                <div className="form-group">
                  <label>Order Type</label>
                  <div className="radio-group">
                    <label>
                      <input
                        type="radio"
                        name="orderType"
                        value="delivery"
                        defaultChecked
                      />
                      Delivery
                    </label>
                    <label>
                      <input type="radio" name="orderType" value="pickup" />
                      Pickup
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="paymentMethod">Payment Method</label>
                  <select id="paymentMethod" name="paymentMethod" required>
                    <option value="">Select payment method</option>
                    <option value="creditCard">Credit Card</option>
                    <option value="cash">Cash on Delivery</option>
                  </select>
                </div>

                <button type="submit" className="place-order-btn">
                  Place Order
                </button>
              </form>
            </div>
          </div>
        )}

        <section className="order-info">
          <div className="info-content">
            <h2>Ordering Information</h2>
            <div className="info-grid">
              <div className="info-card">
                <h3>Delivery Hours</h3>
                <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
                <p>Saturday - Sunday: 12:00 PM - 11:00 PM</p>
              </div>

              <div className="info-card">
                <h3>Delivery Area</h3>
                <p>We deliver within a 5-mile radius of our restaurant.</p>
                <p>Delivery fee: $3.99</p>
              </div>

              <div className="info-card">
                <h3>Pickup Information</h3>
                <p>Orders can be picked up at our location:</p>
                <p>123 Maldove Way, Chicago, Illinois</p>
              </div>

              <div className="info-card">
                <h3>Contact</h3>
                <p>For order inquiries, please call:</p>
                <p>(629)-243-6827</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Order;
