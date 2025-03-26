import { Row, Col, Container } from "react-bootstrap";
import { useProducts } from "../Context/ProductsContext"; // Import the ProductsContext
import ProductCard from "./ProductCard";
import Footer from "./Footer";
import { FaFire } from "react-icons/fa"; // Import icons
import "../App.css"; // Custom CSS for animations and styling

function Home() {
  const { products = [] } = useProducts(); // Fetch products from context

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section text-center py-5">
        <Container>
          <h1 className="hero-heading">
            Find Out Best Trending Products In The Market <FaFire className="icon" />
          </h1>
          <p className="hero-subheading">
            Here are some of the best products in the world you must buy. Explore our collection
            of high-quality products.
          </p>
        </Container>
      </div>

      {/* Products Grid Section */}
      <Container className="products-grid py-5">
        {products.length === 0 ? (
          <p className="text-center">Loading Products</p>
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

export default Home;

// import Footer from "./Footer";
// import ProductCard from "./ProductCard";

// function Home() {












//   return (
//     <div className="Hero-section">
//       <div  className="mainheading">
//         <div><h1 style={{color: "yellow"}} >Find Out Best Trending Products In The Market</h1>
//       <p   className="paragraph-1">
//         Here are some best products in world you must buy. The trending products
//         are mentions us in the trending products section.
//       </p></div>
// {/* <div className="welcome-img"><img src="https://images.pexels.com/photos/14170555/pexels-photo-14170555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" /></div> */}
//       </div>
      
//       <div   className="mainheading">
//         <h1 >Most Trending Products</h1>
//       </div>
//       <div className="main-products-div">
//         <div className="single-product">
//           <ProductCard /> <ProductCard />
//           <ProductCard /> <ProductCard /><ProductCard /> <ProductCard /><ProductCard /> <ProductCard /><ProductCard /> <ProductCard /><ProductCard /> <ProductCard /><ProductCard /> <ProductCard /><ProductCard />
//         </div>
       
//       </div>


// <Footer />

// </div>


  
//   );
// }

// export default Home;
