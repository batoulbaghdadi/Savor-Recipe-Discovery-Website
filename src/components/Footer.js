import Sticker from "../assets/sticker.png";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2 className="footer-title">SAVOR</h2>
          <p className="footer-tagline">Discover flavors. Create memories.</p>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-love">Made with love for food lovers.</p>
          <div className="sticker-wrapper">
            <img src={Sticker} alt="Chef Snoopy sticker" className="snoopy-sticker" />
          </div>
          <p className="footer-copyright">© 2026 SAVOR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;