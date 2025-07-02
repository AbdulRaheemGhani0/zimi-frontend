

import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Row, Col, Container, Navbar } from "react-bootstrap";
import axios from 'axios';

import "../App.css";

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) return;
      
      setLoading(true);
      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/products/search?q=${encodeURIComponent(query)}`
        );
        setProducts(response.data);
      } catch (err) {
        setError(err.message);
        console.error('Search error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  if (loading) return <div className="text-center my-5">Loading...</div>;
  if (error) return <div className="text-center my-5">Error: {error}</div>;

  return (
    <div className="home-container">
      
      <Navbar />
      <div className="home-content">
        <div className="main-content-area">
          {/* Search Header */}
          <div className="search-header">
            <h5>Search Results for "{query}"</h5>
            <p className="results-count">{products.length} products found</p>
          </div>

          {/* Products Grid Section */}
          <div className="products-main">
            <Container className="AllProducts">
              {products.length === 0 ? (
                <p className="text-center">No products matching your search.</p>
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
   
    </div>
  );
}
