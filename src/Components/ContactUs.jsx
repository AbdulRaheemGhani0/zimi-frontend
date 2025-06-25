import Footer from "./Footer";
import Navbar from "./Navbar";
import "../App.css";
import "../About.css"; // Reuse the same CSS file

function ContactUs() {
  return (
    <>
      <div><Navbar /></div>
      <div className="about-container">
        <div className="about-content">
          <h1 className="about-title">Contact Us</h1>
          <p className="about-description">
            We will love to hear from you! Reach out to us for any questions, feedback, or support.
          </p>

          <div className="about-section">
            <h2 className="about-subtitle">Email Us</h2>
            <p className="about-text">
              For general inquiries, email us at: <a href="mailto:faheem3360@gmail.com">faheem3360@gmail.com</a>.
            </p>
          </div>

          <div className="about-section">
            <h2 className="about-subtitle">Call Us</h2>
            <p className="about-text">
              Call our customer support team at: <a href="tel:+447936645921">+447936645921</a>.
            </p>
          </div>

          <div className="about-section">
            <h2 className="about-subtitle">Visit Us</h2>
            <p className="about-text">
              Our office is located at: 24 Main Street, New York, US.
            </p>
          </div>

          <div className="about-section">
            <h2 className="about-subtitle">Follow Us</h2>
            <p className="about-text">
              Stay connected with us on social media:
              <br />
              <a href="https://www.facebook.com/groups/729136461784123/posts/741351567229279/">Facebook</a> | <a href="https://twitter.com">Twitter</a> | <a href="https://instagram.com">Instagram</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
