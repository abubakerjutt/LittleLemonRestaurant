import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../../assets/css/Reservations.css";

const Reservations = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);

  // Available times
  const availableTimes = [
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
  ];

  // Formik setup with Yup validation
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      date: "",
      time: "",
      guests: 2,
      occasion: "",
      seatingPreference: "indoor",
      specialRequests: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please enter your name"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter your email"),
      date: Yup.date()
        .min(
          new Date(new Date().setHours(0, 0, 0, 0)),
          "Please select a future date"
        )
        .required("Please select a date"),
      time: Yup.string().required("Please select a time"),
      guests: Yup.number()
        .min(1, "Must be at least 1 guest")
        .max(10, "Maximum party size is 10")
        .required("Please specify number of guests"),
      occasion: Yup.string(),
      seatingPreference: Yup.string().required(
        "Please select a seating preference"
      ),
      specialRequests: Yup.string().max(250, "Maximum 250 characters"),
    }),
    onSubmit: (values) => {
      // Handle form submission
      console.log("Form submitted:", values);
      setBookingDetails(values);
      setIsSubmitted(true);
      // In a real application, this would send the data to an API
    },
  });

  return (
    <div className="reservations-page">
      <div className="container">
        <section className="reservations-hero">
          <div className="reservations-hero-content">
            <h1>Reserve a Table</h1>
            <p>
              Bring family and friends to enjoy authentic Mediterranean cuisine
              in a warm and welcoming atmosphere.
            </p>
          </div>
          <div className="reservations-hero-image">
            <img
              src="/images/restaurant.jpg"
              alt="Little Lemon Restaurant Interior"
            />
          </div>
        </section>

        {!isSubmitted ? (
          <section className="reservation-form-section">
            <div className="reservation-info">
              <h2>Book Your Experience</h2>
              <p>
                Please fill out the form below to reserve a table at Little
                Lemon. For parties larger than 10, please call us directly at
                (629)-243-6827.
              </p>

              <div className="reservation-gallery">
                <div className="reservation-image main-image">
                  <img
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt="Little Lemon Restaurant Table"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/restaurant.jpg";
                    }}
                  />
                </div>

                <div className="seating-options">
                  <h3>Seating Options</h3>
                  <div className="seating-options-grid">
                    <div
                      className={`seating-option ${
                        formik.values.seatingPreference === "indoor"
                          ? "selected"
                          : ""
                      }`}
                      onClick={() =>
                        formik.setFieldValue("seatingPreference", "indoor")
                      }
                    >
                      <div className="seating-image">
                        <img
                          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                          alt="Indoor Dining"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/images/restaurant.jpg";
                          }}
                        />
                      </div>
                      <div className="seating-label">Indoor Dining</div>
                    </div>

                    <div
                      className={`seating-option ${
                        formik.values.seatingPreference === "outdoor"
                          ? "selected"
                          : ""
                      }`}
                      onClick={() =>
                        formik.setFieldValue("seatingPreference", "outdoor")
                      }
                    >
                      <div className="seating-image">
                        <img
                          src="https://images.unsplash.com/photo-1572913017567-02f0649bc4fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                          alt="Outdoor Patio"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/images/restaurant-food.jpg";
                          }}
                        />
                      </div>
                      <div className="seating-label">Outdoor Patio</div>
                    </div>

                    <div
                      className={`seating-option ${
                        formik.values.seatingPreference === "private"
                          ? "selected"
                          : ""
                      }`}
                      onClick={() =>
                        formik.setFieldValue("seatingPreference", "private")
                      }
                    >
                      <div className="seating-image">
                        <img
                          src="https://images.unsplash.com/photo-1602810319428-019690571b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                          alt="Private Dining"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/images/chefs.jpg";
                          }}
                        />
                      </div>
                      <div className="seating-label">Private Dining</div>
                    </div>
                  </div>
                  {formik.touched.seatingPreference &&
                  formik.errors.seatingPreference ? (
                    <div className="form-error">
                      {formik.errors.seatingPreference}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="reservation-form-container">
              <form onSubmit={formik.handleSubmit} className="reservation-form">
                <div className="form-group">
                  <label htmlFor="name">Name*</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    {...formik.getFieldProps("name")}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="form-error">{formik.errors.name}</div>
                  ) : null}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email*</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="form-error">{formik.errors.email}</div>
                  ) : null}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date">Date*</label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      {...formik.getFieldProps("date")}
                    />
                    {formik.touched.date && formik.errors.date ? (
                      <div className="form-error">{formik.errors.date}</div>
                    ) : null}
                  </div>

                  <div className="form-group">
                    <label htmlFor="time">Time*</label>
                    <select
                      id="time"
                      name="time"
                      {...formik.getFieldProps("time")}
                    >
                      <option value="">Select a time</option>
                      {availableTimes.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                    {formik.touched.time && formik.errors.time ? (
                      <div className="form-error">{formik.errors.time}</div>
                    ) : null}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="guests">Number of Guests*</label>
                  <input
                    id="guests"
                    name="guests"
                    type="number"
                    min="1"
                    max="10"
                    {...formik.getFieldProps("guests")}
                  />
                  {formik.touched.guests && formik.errors.guests ? (
                    <div className="form-error">{formik.errors.guests}</div>
                  ) : null}
                </div>

                <div className="form-group">
                  <label htmlFor="occasion">Occasion (Optional)</label>
                  <select
                    id="occasion"
                    name="occasion"
                    {...formik.getFieldProps("occasion")}
                  >
                    <option value="">Select an occasion</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="business">Business Meal</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Hidden input for seating preference that is controlled by visual selector */}
                <input
                  type="hidden"
                  name="seatingPreference"
                  value={formik.values.seatingPreference}
                />

                <div className="form-group">
                  <label htmlFor="specialRequests">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    rows="3"
                    placeholder="Please note any special requirements or requests here..."
                    {...formik.getFieldProps("specialRequests")}
                  ></textarea>
                  {formik.touched.specialRequests &&
                  formik.errors.specialRequests ? (
                    <div className="form-error">
                      {formik.errors.specialRequests}
                    </div>
                  ) : null}
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn btn-primary">
                    Reserve Now
                  </button>
                </div>
              </form>
            </div>
          </section>
        ) : (
          <section className="confirmation-section">
            <div className="confirmation-message">
              <div className="confirmation-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <h2>Your Reservation is Confirmed!</h2>
              <p>
                Thank you for choosing Little Lemon. We've sent a confirmation
                email to <strong>{bookingDetails.email}</strong>.
              </p>
              <div className="confirmation-details">
                <h3>Reservation Details</h3>
                <div className="confirmation-detail">
                  <span className="detail-label">Name:</span>
                  <span className="detail-value">{bookingDetails.name}</span>
                </div>
                <div className="confirmation-detail">
                  <span className="detail-label">Date:</span>
                  <span className="detail-value">{bookingDetails.date}</span>
                </div>
                <div className="confirmation-detail">
                  <span className="detail-label">Time:</span>
                  <span className="detail-value">{bookingDetails.time}</span>
                </div>
                <div className="confirmation-detail">
                  <span className="detail-label">Guests:</span>
                  <span className="detail-value">{bookingDetails.guests}</span>
                </div>
                <div className="confirmation-detail">
                  <span className="detail-label">Seating:</span>
                  <span className="detail-value">
                    {bookingDetails.seatingPreference === "indoor"
                      ? "Indoor Dining"
                      : bookingDetails.seatingPreference === "outdoor"
                      ? "Outdoor Patio"
                      : "Private Dining"}
                  </span>
                </div>
                {bookingDetails.occasion && (
                  <div className="confirmation-detail">
                    <span className="detail-label">Occasion:</span>
                    <span className="detail-value">
                      {bookingDetails.occasion.charAt(0).toUpperCase() +
                        bookingDetails.occasion.slice(1)}
                    </span>
                  </div>
                )}
              </div>
              <div className="confirmation-image">
                <img
                  src="/images/restaurant-food.jpg"
                  alt="Reservation Confirmed"
                />
              </div>
              <div className="confirmation-note">
                <p>
                  <strong>Note:</strong> If you need to make any changes to your
                  reservation, please call us at (629)-243-6827 at least 2 hours
                  before your reservation time.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Move Explore Our Space here, below the form section */}
        <section className="restaurant-features">
          <h3>Explore Our Space</h3>
          <div className="features-gallery">
            <div className="feature-card">
              <div className="feature-image">
                <img
                  src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
                  alt="Outdoor deck with umbrella and comfortable seating"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/restaurant.jpg";
                  }}
                />
              </div>
              <div className="feature-content">
                <h4>Outdoor Terrace</h4>
                <p>
                  Enjoy Mediterranean cuisine on our beautiful wooden
                  deck with comfortable seating and shade. Perfect for
                  dining with a view during warm evenings while experiencing
                  the vibrant Chicago atmosphere.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-image">
                <img
                  src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Chefs preparing food in kitchen"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/chefs.jpg";
                  }}
                />
              </div>
              <div className="feature-content">
                <h4>Open Kitchen</h4>
                <p>
                  Watch our talented chefs prepare your Mediterranean
                  favorites with fresh, locally-sourced ingredients from
                  our open kitchen concept. Experience the passion and
                  skill that goes into each of our signature dishes.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-image">
                <img
                  src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Private dining area with elegant table setting"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/restaurant-food.jpg";
                  }}
                />
              </div>
              <div className="feature-content">
                <h4>Private Dining Room</h4>
                <p>
                  Our elegant private dining space is perfect for 
                  special celebrations, business meetings, or intimate
                  gatherings. Custom menus available with dedicated
                  service for a memorable experience for up to 20 guests.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="reservations-info-section">
          <div className="info-card">
            <div className="info-icon">
              <i className="far fa-clock"></i>
            </div>
            <h3>Hours</h3>
            <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
            <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
          </div>
          <div className="info-card">
            <div className="info-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3>Location</h3>
            <p>123 Mediterranean Street</p>
            <p>Chicago, IL 60642</p>
          </div>
          <div className="info-card">
            <div className="info-icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h3>Contact</h3>
            <p>Phone: (629)-243-6827</p>
            <p>Email: reservations@littlelemon.com</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Reservations;
