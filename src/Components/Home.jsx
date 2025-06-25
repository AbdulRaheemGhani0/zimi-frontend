import { Row, Col, Container } from "react-bootstrap";
import { useProducts } from "../Context/ProductsContext";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import "../App.css";

function Home() {
  const { products = [] } = useProducts();
  const navigate = useNavigate();

  const handleViewDetails = (productId) => {
    navigate(`/product/${productId}`);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < rating ? "#FFD700" : "none"} stroke="#FFD700" strokeWidth="0.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="main-content-area">
          {/* Categories Section */}
          <div className="categories-section">
            <div className="categories-list">
              <button className="category-btn active">All Products</button>
              <button className="category-btn">Men's Clothing</button>
              <button className="category-btn">Women's Clothing</button>
              <button className="category-btn">Electronics</button>
              <button className="category-btn">Home & Kitchen</button>
              <button className="category-btn">Accessories</button>
            </div>
          </div>

          {/* Products Grid Section */}
          <div className="products-main">
            <Container className="AllProducts">
              {products.length === 0 ? (
                <p className="text-center">No products found.</p>
              ) : (
                <div className="mainproductcontainer">
                  <Row xs={1} md={2} lg={3} className="g-4">
                    {products.map((product) => (
                      <Col key={product._id} className="product-col">
                        <div className="product-card">
                          {product.isHot && <div className="product-badge">HOT SALE</div>}
                          {product.isNew && <div className="product-badge" style={{background: 'linear-gradient(to right, #3498db, #2c3e50)'}}>NEW</div>}
                          
                          <div className="product-image-container">
                            <img src={product.image} alt={product.name} className="product-image" />
                          </div>
                          
                          <div className="product-body">
                            <div className="product-category">{product.category || 'General'}</div>
                            <h2 className="product-title">{product.name}</h2>
                            <p className="product-description">
                              {product.description.length > 100 
                                ? `${product.description.substring(0, 100)}...` 
                                : product.description}
                            </p>
                            
                            <div className="product-features">
                              {product.features?.slice(0, 3).map((feature, index) => (
                                <span key={index} className="product-feature">{feature}</span>
                              )) || (
                                <>
                                  <span className="product-feature">Premium</span>
                                  <span className="product-feature">High Quality</span>
                                </>
                              )}
                            </div>
                            
                            <div className="product-bottom">
                              <div className="product-price-container">
                                {product.oldPrice && (
                                  <span className="product-old-price">${product.oldPrice}</span>
                                )}
                                <span className="product-new-price">${product.price}</span>
                              </div>
                              
                              <button onClick={() => handleViewDetails(product._id)} className="product-btn">
                                <span>View Details</span>
                              </button>
                              <button className="product-btn">
                                <span>Add to Cart</span>
                                <svg className="product-btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4"/>
                                  <line x1="3" y1="6" x2="21" y2="6"/>
                                  <path d="M16 10a4 4 0 01-8 0"/>
                                </svg>
                              </button>
                            </div>
                            
                            <div className="product-meta">
                              <div className="product-rating">
                                {renderStars(product.rating || 4)}
                                <span className="product-rating-count">{product.reviewCount || 0} Reviews</span>
                              </div>
                              <div className="product-stock">In Stock</div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              )}
            </Container>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;








// import { Row, Col, Container } from "react-bootstrap";
// import { useProducts } from "../Context/ProductsContext";
// import { useNavigate } from "react-router-dom";
// import Footer from "./Footer";
// import "../App.css";

// function Home() {
//   const { products = [] } = useProducts();

// const navigate = useNavigate();

//   const handleViewDetails = () => {
//     navigate(`/product/${_id}`);
//   };



//   const renderStars = (rating) => {
//     const stars = [];
//     for (let i = 0; i < 5; i++) {
//       stars.push(
//         <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < rating ? "#FFD700" : "none"} stroke="#FFD700" strokeWidth="0.5">
//           <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
//         </svg>
//       );
//     }
//     return stars;
//   };

//   return (
//     <div className="home-container">
//       <div className="home-content">
//         <div className="main-content-area">
//           {/* Categories Section */}
//           <div className="categories-section">
            
//             <div className="categories-list">
//               <button className="category-btn active">All Products</button>
//               <button className="category-btn">Men's Clothing</button>
//               <button className="category-btn">Women's Clothing</button>
//               <button className="category-btn">Electronics</button>
//               <button className="category-btn">Home & Kitchen</button>
//               <button className="category-btn">Accessories</button>
//             </div>
//           </div>

//           {/* Products Grid Section */}
//           <div className="products-main">
//             <Container className="AllProducts">
//               {products.length === 0 ? (
//                 <p className="text-center">No products found.</p>
//               ) : (
//                 <div className="mainproductcontainer">
//                   <Row xs={1} md={2} lg={3} className="g-4">
//                     {products.map((product) => (
//                       <Col key={product._id} className="product-col">
//                         <div className="product-card">
//                           {product.isHot && <div className="product-badge">HOT SALE</div>}
//                           {product.isNew && <div className="product-badge" style={{background: 'linear-gradient(to right, #3498db, #2c3e50)'}}>NEW</div>}
                          
//                           <div className="product-image-container">
//                             <img src={product.image} alt={product.name} className="product-image" />
//                           </div>
                          
//                           <div className="product-body">
//                             <div className="product-category">{product.category || 'General'}</div>
//                             <h2 className="product-title">{product.name}</h2>
//                             <p className="product-description">
//                               {product.description.length > 100 
//                                 ? `${product.description.substring(0, 100)}...` 
//                                 : product.description}
//                             </p>
                            
//                             <div className="product-features">
//                               {product.features?.slice(0, 3).map((feature, index) => (
//                                 <span key={index} className="product-feature">{feature}</span>
//                               )) || (
//                                 <>
//                                   <span className="product-feature">Premium</span>
//                                   <span className="product-feature">High Quality</span>
//                                 </>
//                               )}
//                             </div>
                            
//                             <div className="product-bottom">
//                               <div className="product-price-container">
//                                 {product.oldPrice && (
//                                   <span className="product-old-price">${product.oldPrice}</span>
//                                 )}
//                                 <span className="product-new-price">${product.price}</span>
//                               </div>
                              
//                               <button  onClick={handleViewDetails} className="product-btn">
//                                 <span>View Details</span>
                                
//                               </button>
//                                 <button className="product-btn">
//                                 <span>Add to Cart</span>
//                                 <svg className="product-btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                                   <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4"/>
//                                   <line x1="3" y1="6" x2="21" y2="6"/>
//                                   <path d="M16 10a4 4 0 01-8 0"/>
//                                 </svg>
//                               </button>
//                             </div>
                            
//                             <div className="product-meta">
//                               <div className="product-rating">
//                                 {renderStars(product.rating || 4)}
//                                 <span className="product-rating-count">{product.reviewCount || 0} Reviews</span>
//                               </div>
//                               <div className="product-stock">In Stock</div>
//                             </div>
//                           </div>
//                         </div>
//                       </Col>
//                     ))}
//                   </Row>
//                 </div>
//               )}
//             </Container>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default Home;// import { Row, Col, Container } from "react-bootstrap";
