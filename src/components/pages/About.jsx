import "../../assets/css/About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-content">
            <h1>About Little Lemon</h1>
            <p>
              Little Lemon opened in 1995 by two Italian brothers, Adrian and
              Mario. Despite the city's diversity, the two brothers recognized
              the lack of Mediterranean cuisine in Chicago, and were inspired to
              bring the flavors of their hometown to the people of Chicago.
            </p>
          </div>
          <div className="about-hero-images">
            <img
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
              alt="Little Lemon Restaurant Interior"
              className="hero-image"
            />
          </div>
        </section>

        {/* Our Story Section */}
        <section className="about-section">
          <h2>Our Story</h2>
          <div className="about-grid">
            <div className="about-content">
              <p>
                When Adrian and Mario first arrived in Chicago, they were
                surprised to find that despite the city's rich culinary
                landscape, there was a noticeable absence of authentic
                Mediterranean cuisine. Drawing on their family recipes and
                culinary training from their hometown in Italy, they decided to
                open Little Lemon.
              </p>
              <p>
                The restaurant started as a small cafe with just a few tables,
                but quickly gained popularity among locals and visitors alike.
                Over the years, Little Lemon has expanded but has maintained its
                commitment to quality and authenticity.
              </p>
              <p>
                Today, nearly thirty years later, the two brothers still oversee
                every aspect of the restaurant, from selecting the freshest
                ingredients to training new chefs in their time-honored
                techniques.
              </p>
            </div>
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Little Lemon Restaurant History"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/images/restaurant.jpg";
                }}
              />
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="about-section">
          <h2>Our Mission</h2>
          <div className="about-grid reverse">
            <div className="about-content">
              <p>
                At Little Lemon, our mission is to bring the authentic flavors
                of the Mediterranean to Chicago while providing an exceptional
                dining experience. We believe in using fresh, locally sourced
                ingredients and traditional cooking methods to create dishes
                that delight and inspire.
              </p>
              <p>
                We're committed to serving our community not just with delicious
                food, but also by creating a warm and welcoming environment
                where friends and family can gather to share meals and create
                memories.
              </p>
              <p>Our philosophy centers around three core principles:</p>
              <ul>
                <li>Using only the freshest, highest-quality ingredients</li>
                <li>Honoring traditional Mediterranean cooking techniques</li>
                <li>Creating a welcoming atmosphere for every guest</li>
              </ul>
            </div>
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1543007631-283050bb3e8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                alt="Mediterranean Ingredients"
              />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="about-section team-section">
          <h2>Meet Our Team</h2>
          <p className="team-intro">
            Our dedicated team brings passion and expertise to every dish we
            serve. Each member plays a vital role in creating the Little Lemon
            experience.
          </p>

          <div className="team-members">
            <div className="team-member">
              <div className="team-member-image-container">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt="Chef Mario"
                  className="team-member-image"
                />
              </div>
              <div className="team-member-info">
                <h3 className="team-member-name">Mario</h3>
                <p className="team-member-role">Co-founder & Head Chef</p>
                <p className="team-member-bio">
                  Mario brings 30 years of culinary expertise from Southern
                  Italy. His passion for authentic flavors and innovative
                  techniques makes each dish special.
                </p>
                <div className="social-links">
                  <a href="#" aria-label="Mario's Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" aria-label="Mario's Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" aria-label="Mario's LinkedIn">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="team-member">
              <div className="team-member-image-container">
                <img
                  src="https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt="Chef Adrian"
                  className="team-member-image"
                />
              </div>
              <div className="team-member-info">
                <h3 className="team-member-name">Adrian</h3>
                <p className="team-member-role">Co-founder & Manager</p>
                <p className="team-member-bio">
                  Adrian handles the business side with the same passion as he
                  does the food. His warm hospitality ensures every guest feels
                  like family.
                </p>
                <div className="social-links">
                  <a href="#" aria-label="Adrian's Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" aria-label="Adrian's Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" aria-label="Adrian's LinkedIn">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="team-member">
              <div className="team-member-image-container">
                <img
                  src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
                  alt="Chef Sophia"
                  className="team-member-image"
                />
              </div>
              <div className="team-member-info">
                <h3 className="team-member-name">Sophia</h3>
                <p className="team-member-role">Dessert Specialist</p>
                <p className="team-member-bio">
                  Sophia combines Mediterranean traditions with modern
                  techniques to create desserts that are both familiar and
                  surprising.
                </p>
                <div className="social-links">
                  <a href="#" aria-label="Sophia's Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" aria-label="Sophia's Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" aria-label="Sophia's Facebook">
                    <i className="fab fa-facebook"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="team-member">
              <div className="team-member-image-container">
                <img
                  src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt="Chef Marco"
                  className="team-member-image"
                />
              </div>
              <div className="team-member-info">
                <h3 className="team-member-name">Marco</h3>
                <p className="team-member-role">Sous Chef</p>
                <p className="team-member-bio">
                  Marco studied culinary arts in Greece and brings fresh
                  Mediterranean influences and techniques to our kitchen.
                </p>
                <div className="social-links">
                  <a href="#" aria-label="Marco's Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" aria-label="Marco's Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" aria-label="Marco's LinkedIn">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-section values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h3>Fresh Ingredients</h3>
              <p>
                We source the freshest ingredients from local farms and
                suppliers to ensure the highest quality dishes.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-utensils"></i>
              </div>
              <h3>Traditional Recipes</h3>
              <p>
                Our recipes have been passed down through generations,
                preserving authentic Mediterranean flavors.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Community Focus</h3>
              <p>
                We're committed to being an active part of our Chicago
                community, supporting local causes and events.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Passion for Food</h3>
              <p>
                Every dish is prepared with care and passion, reflecting our
                love for Mediterranean cuisine.
              </p>
            </div>
          </div>
        </section>

        {/* Visit Us CTA */}
        <section className="about-cta">
          <div className="cta-content">
            <h2>Come Experience Little Lemon</h2>
            <p>
              Join us for an unforgettable Mediterranean dining experience in
              the heart of Chicago.
            </p>
            <div className="cta-buttons">
              <a href="/reservations" className="btn btn-primary">
                Reserve a Table
              </a>
              <a href="/menu" className="btn btn-secondary">
                View Our Menu
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
