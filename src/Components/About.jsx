import Footer from "./Footer";
import Navbar from "./Navbar";

function About() {
  return (
    <>
    <div><Navbar /></div>
    <div className="about-container">



      <h1>About Us</h1>
      <p>Welcome to our eCommerce platform! We are dedicated to providing the best products and services to our customers.</p>
      <h2>Our Mission</h2>
      <p>To deliver high-quality products at competitive prices while ensuring excellent customer service.</p>
      <h2>Meet the Team</h2>
      <p>Our team consists of experienced professionals who are passionate about eCommerce and customer satisfaction.</p>
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach out to us through our contact page.</p>
      <Footer />
    </div>

    <div className="the-footer-div"></div>
    </>
  );
}

export default About;
