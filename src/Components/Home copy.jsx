




// import { Row, Col, Container } from "react-bootstrap";
// import { useProducts } from "../Context/ProductsContext"; // Import the ProductsContext
// import ProductCard from "./ProductCard";
// import Footer from "./Footer";import { Link } from "react-router-dom";
// import { Navbar as BsNavbar, Nav } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../NavbarCSS.css'; // Custom CSS for additional styling

// import { FaFire } from "react-icons/fa"; // Import icons
// import "../App.css"; // Custom CSS for animations and styling


// function Home() {
//   const { products = [] } = useProducts(); // Fetch products from context

//   return (
//     <div className="home-container">
//       {/* Hero Section */}
//       {/* <div className="hero-section text-center py-5">
//         <Container>
          
//           <div className="categoriesOnHome">   <Nav className="ms-auto">
//             <Nav.Link as={Link} to="/" className="nav-link">
//               Home
//             </Nav.Link>
//             <Nav.Link as={Link} to="/Products" className="nav-link">
//               Products
//             </Nav.Link>
//             <Nav.Link as={Link} to="/About" className="nav-link">
//               About
//             </Nav.Link>
//             <Nav.Link as={Link} to="/privacy-policy" className="nav-link">
//               Privacy Policy
//             </Nav.Link>
//             <Nav.Link as={Link} to="/Contactus" className="nav-link">
//               Contact Us
//             </Nav.Link>
//           </Nav>  </div>

//           <h1 className="hero-heading">
//             Find Out Best Trending Products In The Market <FaFire className="icon" />
//           </h1>
//           <p className="hero-subheading">
//             Here are some of the best products in the world you must buy. Explore our collection
//             of high-quality products.
//           </p>
          
//         </Container>
//       </div> */}
//       <div> {/* Products Grid Section */}
//       <Container className="AllProducts">
//         {products.length === 0 ? (
//           <p className="text-center">No products found.</p>
//         ) : (
//           <div className="mainproductcontainer">
//           <Row xs={1} md={2} lg={3} xl={4} className="g-4">
//             {products.map((product) => (
//               <Col key={product._id}>
//                 <ProductCard
//                   _id={product._id}
//                   name={product.name}
//                   description={product.description}
//                   price={product.price}
//                   image={product.image}
//                 />
//               </Col>
//             ))}
//           </Row></div>
//         )}
//       </Container></div>
      
     

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }

// export default Home;
