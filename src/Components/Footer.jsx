
import '../Footer.css'; // Import the CSS file for styling

function Footer() {
  return (
    <div className="Footer-div">
      <div className="footer-main-column">
        <div className="footer-col">
          <h4>Info</h4>
          <ul className="links">
            <li><a href="/about">About Us</a></li>
            <li><a href="/privacy-policy">Service</a></li>
            <li><a href="/Products">Collection</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-main-column">
        <div className="footer-col">
          <h4>Explore</h4>
          <ul className="links">
            <li><a href="/Products">Latest Products</a></li>
            <li><a href="/Products">Popular Products</a></li>
            <li><a href="/Products">New Uploads</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-main-column">
        <div className="footer-col">
          <h4>Legal</h4>
          <ul className="links">
            <li><a href="/Products">Services</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default Footer;





