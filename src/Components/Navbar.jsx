import { Link } from "react-router-dom";
import { Navbar as BsNavbar, Nav, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../NavbarCSS.css'; // Custom CSS for additional styling

function Navbar() {
  const token = localStorage.getItem("token"); // Check if user is logged in

  return (
    <BsNavbar expand="lg" className="custom-navbar">
      <Container>
        {/* Logo */}
        <BsNavbar.Brand as={Link} to="/" className="navbar-logo">
          <h1>Zimi</h1>
        </BsNavbar.Brand>

        {/* Toggle Button for Mobile */}
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle" />

        {/* Navbar Links */}
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Products" className="nav-link">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/About" className="nav-link">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/privacy-policy" className="nav-link">
              Privacy Policy
            </Nav.Link>
            <Nav.Link as={Link} to="/Contactus" className="nav-link">
              Contact Us
            </Nav.Link>
          </Nav>

          {/* Profile/Login Link */}
          <Nav className="ms-3">
            {token ? (
              <Nav.Link as={Link} to="/profile" className="nav-link">
                Profile
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login" className="nav-link">
                Login
              </Nav.Link>
            )}
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}

export default Navbar;






















// blue old navbar 
// import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';


// function Navbar() {

//   const token = localStorage.getItem("token"); // Check if user is logged in

//   return (
//     <div className="navbar-main-container">
//       <div className="logo-container">
//         <h1>Zimi</h1>
//       </div>

//       <div className="navbar-container">
//         <ul className="navbar-ul">
//         <Link to="/"><li className="navbar-li"    >Home</li></Link>

//           <Link to="/Products"><li className="navbar-li"    >Products</li></Link>
          
          
//           <Link to="/About"> <li className="navbar-li">About</li></Link>
//           <Link to="/privacy-policy"><li className="navbar-li">Privicy Policy</li></Link>
//           <Link to="/Contactus"> <li className="navbar-li">Contact Us</li></Link>

//         </ul>
//       </div>

//       <div className="Cart-container">
       
        
//       <ul className="navbar-ul">
//       {token ? (
//         <Link to="/profile">
//           <li className="navbar-li">Profile</li>
//         </Link>
//       ) : (
//         <Link to="/login">
//           <li className="navbar-li">Login</li>
//         </Link>
//       )}
//     </ul>
                 
//             </div>
//     </div>
//   );
// }

// export default Navbar;








