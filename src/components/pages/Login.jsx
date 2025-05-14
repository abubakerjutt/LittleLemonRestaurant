import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import "../../assets/css/Login.css";

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [showPassword, setShowPassword] = useState({
    login: false,
    signup: false,
    confirm: false
  });

  // Login form validation with Formik and Yup
  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Login form submitted:", values);
      // In a real app, this would authenticate the user with an API
      alert("Login successful!");
    },
  });

  // Signup form validation with Formik and Yup
  const signupFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
          "Password must contain at least one uppercase letter, one lowercase letter, and one number"
        )
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm password is required"),
      terms: Yup.boolean()
        .oneOf([true], "You must accept the terms and conditions")
        .required("You must accept the terms and conditions")
    }),
    onSubmit: (values) => {
      console.log("Signup form submitted:", values);
      // In a real app, this would register the user with an API
      alert("Account created successfully! Please log in.");
      setIsLoginForm(true);
    },
  });

  const togglePasswordVisibility = (field) => {
    setShowPassword(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="login-content">
          <div className="login-image">
            <img
              src="/images/restaurant.jpg"
              alt="Little Lemon Restaurant Interior"
            />
          </div>

          <div className="login-form-container">
            <div className="form-tabs">
              <button
                className={`form-tab ${isLoginForm ? "active" : ""}`}
                onClick={() => setIsLoginForm(true)}
              >
                <i className="fas fa-sign-in-alt"></i> Login
              </button>
              <button
                className={`form-tab ${!isLoginForm ? "active" : ""}`}
                onClick={() => setIsLoginForm(false)}
              >
                <i className="fas fa-user-plus"></i> Sign Up
              </button>
            </div>

            {isLoginForm ? (
              <div className="login-form">
                <h2>Welcome Back</h2>
                <p>
                  Sign in to your account to access your profile, reservations,
                  and order history.
                </p>

                <form onSubmit={loginFormik.handleSubmit} noValidate>
                  <div className="form-group">
                    <label htmlFor="login-email">
                      <i className="fas fa-envelope"></i> Email
                    </label>
                    <input
                      id="login-email"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      {...loginFormik.getFieldProps("email")}
                    />
                    {loginFormik.touched.email && loginFormik.errors.email ? (
                      <div className="form-error">
                        <i className="fas fa-exclamation-circle"></i> {loginFormik.errors.email}
                      </div>
                    ) : null}
                  </div>

                  <div className="form-group">
                    <label htmlFor="login-password">
                      <i className="fas fa-lock"></i> Password
                    </label>
                    <div className="password-input-wrapper">
                      <input
                        id="login-password"
                        name="password"
                        type={showPassword.login ? "text" : "password"}
                        placeholder="Your password"
                        {...loginFormik.getFieldProps("password")}
                      />
                      <button 
                        type="button" 
                        className="password-toggle"
                        onClick={() => togglePasswordVisibility('login')}
                      >
                        <i className={`fas ${showPassword.login ? "fa-eye-slash" : "fa-eye"}`}></i>
                      </button>
                    </div>
                    {loginFormik.touched.password &&
                    loginFormik.errors.password ? (
                      <div className="form-error">
                        <i className="fas fa-exclamation-circle"></i> {loginFormik.errors.password}
                      </div>
                    ) : null}
                  </div>

                  <div className="form-options">
                    <label className="remember-me">
                      <input 
                        type="checkbox" 
                        name="rememberMe"
                        checked={loginFormik.values.rememberMe}
                        onChange={loginFormik.handleChange}
                      />
                      Remember me
                    </label>
                    <Link to="/forgot-password" className="forgot-password">
                      Forgot password?
                    </Link>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    <i className="fas fa-sign-in-alt"></i> Log In
                  </button>
                </form>

                <div className="social-login">
                  <p>Or log in with:</p>
                  <div className="social-buttons">
                    <button className="social-btn google">
                      <i className="fab fa-google"></i> Google
                    </button>
                    <button className="social-btn facebook">
                      <i className="fab fa-facebook-f"></i> Facebook
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="signup-form">
                <h2>Create an Account</h2>
                <p>
                  Join Little Lemon to save your favorite dishes, make
                  reservations, and enjoy special offers.
                </p>

                <form onSubmit={signupFormik.handleSubmit} noValidate>
                  <div className="form-group">
                    <label htmlFor="signup-name">
                      <i className="fas fa-user"></i> Full Name
                    </label>
                    <input
                      id="signup-name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      {...signupFormik.getFieldProps("name")}
                    />
                    {signupFormik.touched.name && signupFormik.errors.name ? (
                      <div className="form-error">
                        <i className="fas fa-exclamation-circle"></i> {signupFormik.errors.name}
                      </div>
                    ) : null}
                  </div>

                  <div className="form-group">
                    <label htmlFor="signup-email">
                      <i className="fas fa-envelope"></i> Email
                    </label>
                    <input
                      id="signup-email"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      {...signupFormik.getFieldProps("email")}
                    />
                    {signupFormik.touched.email && signupFormik.errors.email ? (
                      <div className="form-error">
                        <i className="fas fa-exclamation-circle"></i> {signupFormik.errors.email}
                      </div>
                    ) : null}
                  </div>

                  <div className="form-group">
                    <label htmlFor="signup-password">
                      <i className="fas fa-lock"></i> Password
                    </label>
                    <div className="password-input-wrapper">
                      <input
                        id="signup-password"
                        name="password"
                        type={showPassword.signup ? "text" : "password"}
                        placeholder="Create a password"
                        {...signupFormik.getFieldProps("password")}
                      />
                      <button 
                        type="button" 
                        className="password-toggle"
                        onClick={() => togglePasswordVisibility('signup')}
                      >
                        <i className={`fas ${showPassword.signup ? "fa-eye-slash" : "fa-eye"}`}></i>
                      </button>
                    </div>
                    {signupFormik.touched.password &&
                    signupFormik.errors.password ? (
                      <div className="form-error">
                        <i className="fas fa-exclamation-circle"></i> {signupFormik.errors.password}
                      </div>
                    ) : null}
                  </div>

                  <div className="form-group">
                    <label htmlFor="signup-confirm-password">
                      <i className="fas fa-lock"></i> Confirm Password
                    </label>
                    <div className="password-input-wrapper">
                      <input
                        id="signup-confirm-password"
                        name="confirmPassword"
                        type={showPassword.confirm ? "text" : "password"}
                        placeholder="Confirm your password"
                        {...signupFormik.getFieldProps("confirmPassword")}
                      />
                      <button 
                        type="button" 
                        className="password-toggle"
                        onClick={() => togglePasswordVisibility('confirm')}
                      >
                        <i className={`fas ${showPassword.confirm ? "fa-eye-slash" : "fa-eye"}`}></i>
                      </button>
                    </div>
                    {signupFormik.touched.confirmPassword &&
                    signupFormik.errors.confirmPassword ? (
                      <div className="form-error">
                        <i className="fas fa-exclamation-circle"></i> {signupFormik.errors.confirmPassword}
                      </div>
                    ) : null}
                  </div>

                  <div className="form-terms">
                    <label>
                      <input 
                        type="checkbox" 
                        name="terms"
                        checked={signupFormik.values.terms}
                        onChange={signupFormik.handleChange}
                        onBlur={signupFormik.handleBlur}
                      />
                      I agree to the <Link to="#">Terms of Service</Link> and{" "}
                      <Link to="#">Privacy Policy</Link>
                    </label>
                    {signupFormik.touched.terms && signupFormik.errors.terms ? (
                      <div className="form-error">
                        <i className="fas fa-exclamation-circle"></i> {signupFormik.errors.terms}
                      </div>
                    ) : null}
                  </div>

                  <button type="submit" className="btn btn-primary">
                    <i className="fas fa-user-plus"></i> Create Account
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
