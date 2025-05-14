import { Link } from "react-router-dom";
import "../../assets/css/Home.css";

const Home = () => {
  // Sample specials data
  const specials = [
    {
      id: 1,
      name: "Greek Salad",
      price: "$12.99",
      description:
        "Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil.",
      image: "/images/greek-salad.jpg",
    },
    {
      id: 2,
      name: "Bruschetta",
      price: "$16.99",
      description:
        "Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil.",
      image: "/images/bruschetta.jpg",
    },
    {
      id: 3,
      name: "Lemon Dessert",
      price: "$8.50",
      description:
        "Fresh baked lemon bread coated in salt and sugar. Powdered in citrus and lemon zest.",
      image: "/images/lemon-dessert.jpg",
    },
  ];

  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Coriolanus Snow",
      quote: "This is the best Mediterranean food that I've ever had!",
      rating: 5,
      image: "/customer-photos/Coriolanus-Snow.jpg",
    },
    {
      id: 2,
      name: "Enola Holmes",
      quote:
        "My Shiba Inu, Mugi, really loved the cozy vibes and delicious food here.",
      rating: 5,
      image: "/customer-photos/Enola-Holmes.jpg",
    },
    {
      id: 3,
      name: "Harry Potter",
      quote:
        "I've had some great Mediterranean food before, but none of them beats Little Lemon in flavor and texture.",
      rating: 5,
      image: "/customer-photos/Harry-Potter.jpg",
    },
    {
      id: 4,
      name: "Hermione Granger",
      quote:
        "Great food, welcoming staff, cozy atmosphere. A great place to treat your kids to.",
      rating: 5,
      image: "/customer-photos/Hermione-Granger.jpg",
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                Little Lemon <span>Chicago</span>
              </h1>
              <p>
                We are a family owned Mediterranean restaurant, located on
                Maldove Street in Chicago, Illinois. We focus on traditional
                recipes served with a modern twist.
              </p>
              <div className="cta-buttons">
                <Link to="/reservations" className="btn btn-primary">
                  <i className="fas fa-calendar-alt mr-2"></i> Reserve a table
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/restaurant-food.jpg"
                alt="Little Lemon Restaurant Food"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specials Section */}
      <section className="specials">
        <div className="container">
          <div className="specials-header">
            <h2 className="specials-title">This weeks specials</h2>
            <Link to="/menu" className="btn btn-primary">
              <i className="fas fa-utensils mr-2"></i> Online Menu
            </Link>
          </div>
          <div className="specials-grid">
            {specials.map((special) => (
              <div key={special.id} className="special-card">
                <div className="special-img">
                  <img src={special.image} alt={special.name} />
                </div>
                <div className="special-content">
                  <div className="special-header">
                    <h3 className="special-title">{special.name}</h3>
                    <span className="special-price">{special.price}</span>
                  </div>
                  <p className="special-desc">{special.description}</p>
                  <Link to="/order" className="special-action">
                    <i className="fas fa-motorcycle mr-2"></i> Order for
                    Delivery
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <div className="section-title">
            <h2>Testimonials</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-avatar">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">
                      <i className="fas fa-star"></i>
                    </span>
                  ))}
                </div>
                <h3>{testimonial.name}</h3>
                <p>
                  <i className="fas fa-quote-left quote-icon"></i>{" "}
                  {testimonial.quote}{" "}
                  <i className="fas fa-quote-right quote-icon"></i>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Little Lemon</h2>
              <h3>Chicago</h3>
              <p>
                <i className="fas fa-info-circle mr-2"></i> Little Lemon opened
                in 1995 by two Italian brothers, Adrian and Mario. Despite the
                city's diversity, the two brothers recognized the lack of
                Mediterranean cuisine in Chicago, and were inspired to bring the
                flavors of their hometown to the people of Chicago. The two
                brothers continue to oversee the Little Lemon restaurant, nearly
                thirty years later.
              </p>
              <Link to="/about" className="btn btn-primary mt-3">
                <i className="fas fa-arrow-right mr-2"></i> Learn more about us
              </Link>
            </div>
            <div className="about-images">
              <div className="about-img">
                <img
                  src="/images/restaurant.jpg"
                  alt="Little Lemon Restaurant Interior"
                />
              </div>
              <div className="about-img">
                <img src="/images/chefs.jpg" alt="Little Lemon Chefs" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
