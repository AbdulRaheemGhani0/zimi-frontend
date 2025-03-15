import { useEffect } from "react";
import { useProducts } from "../Context/ProductsContext"; // Import the ProductsContext
import ProductCard from "./ProductCard"; // Import the ProductCard component
import { Row, Col, Container } from "react-bootstrap"; // Import Bootstrap components
import Footer from "./Footer"; // Import the Footer component

import "../App.css"; // Custom CSS for animations and styling
import Navbar from "./Navbar";

function ProductsPage() {
  // Get products, loading, error, and fetch function from ProductsContext
  const { products, fetchUserProducts, loading, error } = useProducts();

  // Fetch all products when the component mounts
  useEffect(() => {
    fetchUserProducts(); // Fetch all products (no userId provided)
  }, [fetchUserProducts]);

  // Show a loading message while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  // Show an error message if there's an error
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="home-container">
      <Navbar />
     

      {/* Products Grid Section */}
      <Container className="products-grid py-5">
        {products.length === 0 ? ( // If no products are found
          <p className="text-center">No products found.</p>
        ) : (
          <Row xs={1} md={2} lg={3} xl={4} className="g-4">
            {products.map((product) => (
              <Col key={product._id}>
                <ProductCard
                  _id={product._id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  image={product.image}
                />
              </Col>
            ))}
          </Row>
        )}
      </Container>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ProductsPage;


// import { useEffect } from "react";
// import { useProducts } from "../Context/ProductsContext.jsx"; // Import the ProductsContext
// import ProductCard from "./ProductCard.jsx"; // Import the ProductCard component
// import { Row, Col, Container } from "react-bootstrap"; // Import Bootstrap components

// function ProductsPage() {
//   // Get products, loading, error, and fetch function from ProductsContext
//   const { products, fetchUserProducts, loading, error } = useProducts();

//   // Fetch all products when the component mounts
//   useEffect(() => {
//     fetchUserProducts(); // Fetch all products (no userId provided)
//   }, [fetchUserProducts]);

//   // Show a loading message while fetching data
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   // Show an error message if there's an error
//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <Container className="products-grid py-5">
//       {products.length === 0 ? ( // If no products are found
//         <p className="text-center">No products found.</p>
//       ) : (
//         // Display products in a grid
//         <Row xs={1} md={2} lg={3} xl={4} className="g-4">
//           {products.map((product) => (
//             <Col key={product._id}>
//               <ProductCard
//                 _id={product._id}
//                 name={product.name}
//                 description={product.description}
//                 price={product.price}
//                 image={product.image}
//               />
//             </Col>
//           ))}
//         </Row>
//       )}
//     </Container>
//   );
// }

// export default ProductsPage;


// import { useEffect } from "react";
// import { useProducts } from "../Context/ProductsContext"; // Import the ProductsContext
// import ProductCard from "./ProductCard"; // Import the ProductCard component
// import { Row, Col, Container } from "react-bootstrap"; // Import Bootstrap components

// function ProductsPage() {
//   // Get products, loading, error, and fetch function from ProductsContext
//   const { products, fetchAllProducts, loading, error } = useProducts();

//   // Fetch all products when the component mounts
//   useEffect(() => {
//     fetchAllProducts(); // Fetch all products
//   }, [fetchAllProducts]);

//   // Show a loading message while fetching data
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   // Show an error message if there's an error
//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <Container className="products-grid py-5">
//       {products.length === 0 ? ( // If no products are found
//         <p className="text-center">No products found.</p>
//       ) : (
//         // Display products in a grid
//         <Row xs={1} md={2} lg={3} xl={4} className="g-4">
//           {products.map((product) => (
//             <Col key={product._id}>
//               <ProductCard
//                 _id={product._id}
//                 name={product.name}
//                 description={product.description}
//                 price={product.price}
//                 image={product.image}
//               />
//             </Col>
//           ))}
//         </Row>
//       )}
//     </Container>
//   );
// }

// export default ProductsPage;





// import { useEffect } from "react";
// import { useProducts } from "../Context/ProductsContext";
// import { useAuth } from "../Context/AuthContext";
// import ProductCard from "./ProductCard";
// import { Row, Col, Container } from "react-bootstrap";

// function ProductsPage() {
//   const { products, fetchUserProducts, loading, error } = useProducts();
//   const { user } = useAuth();
//   const userId = user?._id;

//   useEffect(() => {
//     fetchUserProducts(userId); // Fetch products (user-specific or all)
//   }, [userId, fetchUserProducts]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <Container className="products-grid py-5">
//       {products.length === 0 ? (
//         <p className="text-center">No products found.</p>
//       ) : (
//         <Row xs={1} md={2} lg={3} xl={4} className="g-4">
//           {products.map((product) => (
//             <Col key={product._id}>
//               <ProductCard
//                 _id={product._id}
//                 name={product.name}
//                 description={product.description}
//                 price={product.price}
//                 image={product.image}
//               />
//             </Col>
//           ))}
//         </Row>
//       )}
//     </Container>
//   );
// }

// export default ProductsPage;























