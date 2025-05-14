import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "../../assets/css/Menu.css";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showCartNotification, setShowCartNotification] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { addToCart } = useCart();

  const categories = [
    { id: "all", name: "All Menu" },
    { id: "starters", name: "Starters" },
    { id: "mains", name: "Main Dishes" },
    { id: "desserts", name: "Desserts" },
    { id: "drinks", name: "Drinks" },
  ];

  // Sample menu data
  const menuItems = [
    {
      id: 1,
      name: "Greek Salad",
      price: 12.99,
      description:
        "Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil.",
      image: "/images/greek-salad.jpg",
      category: "starters",
      tags: ["Vegetarian", "Fresh"],
    },
    {
      id: 2,
      name: "Bruschetta",
      price: 16.99,
      description:
        "Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil.",
      image: "/images/bruschetta.jpg",
      category: "starters",
      tags: ["Popular", "Italian"],
    },
    {
      id: 3,
      name: "Hummus",
      price: 10.99,
      description:
        "Creamy blend of chickpeas, tahini, lemon juice, and garlic. Served with warm pita bread.",
      image: "/images/menu/hummus.webp",
      category: "starters",
      tags: ["Vegetarian", "Healthy"],
    },
    {
      id: 4,
      name: "Tzatziki",
      price: 9.99,
      description:
        "Yogurt mixed with cucumber, garlic, salt, olive oil, and herbs. A refreshing dip or sauce.",
      image: "/images/menu/tzatziki.webp",
      category: "starters",
      tags: ["Vegetarian", "Fresh"],
    },
    {
      id: 5,
      name: "Lemon Dessert",
      price: 8.5,
      description:
        "Fresh baked lemon bread coated in salt and sugar. Powdered in citrus and lemon zest.",
      image: "/images/lemon-dessert.jpg",
      category: "desserts",
      tags: ["Sweet", "Homemade"],
    },
    {
      id: 6,
      name: "Mediterranean Tea",
      price: 4.99,
      description:
        "Traditional Mediterranean herbal tea with fresh mint and honey. Served hot or cold.",
      image: "/images/menu/tea.jpeg",
      category: "drinks",
      tags: ["Refreshing", "Healthy"],
    },
    {
      id: 7,
      name: "Baklava",
      price: 7.99,
      description:
        "Rich, sweet pastry made of layers of filo filled with chopped nuts and sweetened with honey syrup.",
      image: "/images/menu/baklava.webp",
      category: "desserts",
      tags: ["Sweet", "Traditional"],
    },
    {
      id: 8,
      name: "Mediterranean Platter",
      price: 21.99,
      description:
        "A variety of hummus, tzatziki, olives, feta, and warm pita bread. Perfect for sharing.",
      image: "/images/menu/souvlaki.jpeg",
      category: "starters",
      tags: ["Shareable", "Popular"],
    },
  ];

  // Filter out items without images
  const validMenuItems = menuItems.filter((item) => item.image);

  const filteredItems =
    activeCategory === "all"
      ? validMenuItems
      : validMenuItems.filter((item) => item.category === activeCategory);

  // Handle add to cart with notification
  const handleAddToCart = (item) => {
    addToCart(item);

    // Show notification
    setShowCartNotification(true);
    setTimeout(() => {
      setShowCartNotification(false);
    }, 2000);
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Get grid columns based on window width
  const getGridColumns = () => {
    if (windowWidth <= 767) {
      return "1fr";
    } else if (windowWidth <= 991) {
      return "repeat(2, 1fr)";
    } else {
      return "repeat(3, 1fr)";
    }
  };

  return (
    <div className="menu-page">
      <div className="container">
        {/* Menu Hero */}
        <div className="menu-hero">
          <h1>Our Menu</h1>
          <p>
            Experience the vibrant flavors of the Mediterranean. Each dish is
            crafted with fresh ingredients and traditional recipes, brought to
            you with a modern twist.
          </p>
          <div className="menu-hero-image">
            <img
              src="/images/restaurant-food.jpg"
              alt="Featured dishes from Little Lemon"
            />
          </div>
        </div>

        {/* Cart Notification */}
        {showCartNotification && (
          <div className="cart-notification">Item added to cart!</div>
        )}

        {/* Menu Categories */}
        <div className="menu-categories">
          <div className="category-tabs">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-tab ${
                  activeCategory === category.id ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="menu-items">
          <h2>
            {activeCategory === "all"
              ? "Full Menu"
              : categories.find((c) => c.id === activeCategory).name}
          </h2>
          <div
            className="menu-grid"
            style={{
              display: "grid",
              gridTemplateColumns: getGridColumns(),
              gap: "25px",
              margin: "0 auto",
              width: "85%",
            }}
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="menu-card"
                style={{
                  width: "90%",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0 3px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div
                  className="menu-image-container"
                  style={{
                    height: "180px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="menu-image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    className="item-tags"
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      left: "10px",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "4px",
                    }}
                  >
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="menu-tag"
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: "600",
                          padding: "4px 8px",
                          backgroundColor: "rgba(0, 0, 0, 0.6)",
                          color: "white",
                          borderRadius: "4px",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  className="menu-content"
                  style={{
                    padding: "16px",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  <div
                    className="menu-header"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "12px",
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        fontSize: "18px",
                        color: "var(--primary-blue)",
                        fontWeight: 600,
                      }}
                    >
                      {item.name}
                    </h3>
                    <span
                      className="menu-price"
                      style={{
                        fontWeight: 700,
                        color: "var(--primary-orange)",
                        fontSize: "16px",
                        backgroundColor: "rgba(249, 171, 64, 0.1)",
                        padding: "4px 8px",
                        borderRadius: "4px",
                      }}
                    >
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                  <p
                    className="menu-description"
                    style={{
                      color: "#666",
                      marginBottom: "16px",
                      lineHeight: 1.5,
                      flexGrow: 1,
                      fontSize: "14px",
                    }}
                  >
                    {item.description}
                  </p>
                  <div
                    className="menu-footer"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "10px",
                      marginTop: "auto",
                    }}
                  >
                    <button
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(item)}
                      style={{
                        flex: 1,
                        padding: "8px 12px",
                        fontSize: "14px",
                        borderRadius: "4px",
                        fontWeight: 600,
                        textAlign: "center",
                        cursor: "pointer",
                        backgroundColor: "var(--primary-blue)",
                        color: "white",
                        border: "none",
                      }}
                    >
                      <i className="fas fa-cart-plus"></i> Add to Cart
                    </button>
                    <Link
                      to="/order"
                      className="menu-order-btn"
                      style={{
                        flex: 1,
                        padding: "8px 12px",
                        fontSize: "14px",
                        borderRadius: "4px",
                        fontWeight: 600,
                        textAlign: "center",
                        backgroundColor: "var(--primary-yellow)",
                        color: "var(--text-dark)",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      Order Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="menu-cta">
          <div className="cta-content">
            <h2>Ready to taste the Mediterranean?</h2>
            <p>
              Join us for a dining experience you won't forget. Reserve your
              table now or order online for pickup or delivery.
            </p>
            <div className="cta-image">
              <img
                src="/images/chefs.jpg"
                alt="Our chefs preparing Mediterranean cuisine"
              />
            </div>
            <div className="cta-buttons">
              <Link to="/reservations" className="cta-btn cta-primary">
                Reserve a Table
              </Link>
              <Link to="/order" className="cta-btn cta-secondary">
                Order Online
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
