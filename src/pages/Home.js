import HeroImg from "../assets/hero1.png"; 
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      
      <div className="hero-split-section">
        <div className="hero-text-side">
          <span className="hero-badge">Welcome to Savor</span>
          <h1 className="hero-heading-main">Fresh & Tasty</h1>
          <p className="hero-heading-sub">
            Explore our curated collection of beautiful, vibrant dishes to inspire your daily meals and bring life to your kitchen.
          </p>
          
          
          <Link to="/recipes" className="btn btn-primary-home">
            Discover Recipes
          </Link>
        </div>
        
        <div className="hero-image-side">
          <img src={HeroImg} alt="Fresh avocado and ingredients" className="hero-side-img" />
        </div>
      </div>

   
      <div className="join-section">
        <h3>Join Savor Today</h3>
        <p>Stay updated and check out more delicious recipes every day!</p>
        
       
        <Link to="/SignUp" className="btn btn-account">
          Create an Account
        </Link>

        <div className="login-prompt">
          <span>Already have an account? </span>
          <Link to="/login" className="login-link">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;