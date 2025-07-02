import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar as BsNavbar, Nav, Container, Form, Button, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../NavbarCSS.css';
import { FaSearch } from 'react-icons/fa';

function Navbar() {
  const token = localStorage.getItem("token");
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search-results?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
    }
  };

  return (
    <BsNavbar expand="lg" className="custom-navbar">
      <Container>
        {/* Logo */}
        <BsNavbar.Brand as={Link} to="/" className="navbar-logo">
          <img 
            src="/111111111111111111111-removebg-preview (2).png" 
            alt="Zimi Logo" 
            className="logo-image"
          />
        </BsNavbar.Brand>

        {/* Search Bar - Added in the middle */}
        <div className="navbar-search mx-3">
          <Form onSubmit={handleSearch} className="d-flex">
            <InputGroup>
              <Form.Control
                type="search"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <Button 
                variant="outline-secondary" 
                type="submit"
                className="search-button"
              >
                <FaSearch />
              </Button>
            </InputGroup>
          </Form>
        </div>

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

