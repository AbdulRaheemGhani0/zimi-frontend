import Footer from "./Footer";
import Navbar from "./Navbar";

function PrivacyPolicy() {
  return (
    <>
    <div><Navbar /></div>
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <p>Your privacy is important to us. This privacy policy explains how we collect, use, and protect your information.</p>
      <h2>Information We Collect</h2>
      <p>We may collect personal information such as your name, email address, and payment information when you use our services.</p>
      <h2>How We Use Your Information</h2>
      <p>Your information helps us provide better services and improve our website.</p>
      <h2>Contact Us</h2>
      <p>If you have any questions about our privacy policy, please contact us.</p>
      <Footer />
    </div>
    
    </>
  );
}

export default PrivacyPolicy;
