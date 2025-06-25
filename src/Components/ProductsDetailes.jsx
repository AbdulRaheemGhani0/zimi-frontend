
import { useState, useMemo } from "react";
import { Carousel, Button, Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "../Context/ProductsContext";
import OrderNowModal from "./Modal";
import ProductCard from "./ProductCard";
import "../ProductDetails.css";

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { products, loading, error } = useProducts();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useMemo(() => {
    if (products.length > 0) {
      const selectedProduct = products.find((p) => p._id === productId);
      if (selectedProduct) {
        setProduct(selectedProduct);
        const related = products.filter(
          (p) => p.category === selectedProduct.category && p._id !== productId
        ).slice(0, 4);
        setRelatedProducts(related);
      } else {
        navigate("/not-found");
      }
    }
  }, [productId, products, navigate]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Alert variant="danger">Failed to load product details. Please try again later.</Alert>
      </div>
    );
  }

  if (!product) {
    return null;
  }

  const additionalImages = [
    product.image,
    "https://cdn.pixabay.com/photo/2024/11/29/04/45/saffron-finch-9232101_640.jpg",
    "https://cdn.pixabay.com/photo/2024/07/16/12/20/pipe-8899206_640.jpg",
    "https://cdn.pixabay.com/photo/2024/05/15/18/30/flowers-8761486_640.jpg"
  ];

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
    <Container className="product-detail-container">
      {/* Product Main Section */}
      <div className="product-detail-card">
        {/* Images Column */}
        <div className="product-images-section">
          <Carousel 
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
            indicators={false}
            controls={additionalImages.length > 1}
            className="product-images-carousel"
          >
            {additionalImages.map((image, index) => (
              <Carousel.Item key={index}>
                <div className="product-image-container">
                  <img
                    src={image}
                    alt={`Product View ${index + 1}`}
                    className="product-main-image"
                    onError={(e) => {
                      e.target.src = "https://cdn.pixabay.com/photo/2016/08/19/15/11/lost-1605501_640.jpg";
                    }}
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
          
          {/* Thumbnail Navigation */}
          {additionalImages.length > 1 && (
            <div className="thumbnail-container">
              {additionalImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className={`thumbnail ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  onError={(e) => {
                    e.target.src = "https://cdn.pixabay.com/photo/2016/08/19/15/11/lost-1605501_640.jpg";
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Info Column */}
        <div className="product-info-section">
          {product.isHot && <div className="product-badge">HOT SALE</div>}
          {product.isNew && <div className="product-badge" style={{background: 'linear-gradient(to right, #3498db, #2c3e50)'}}>NEW</div>}
          
          <div className="product-category">{product.category || 'General'}</div>
          <h1 className="product-title">{product.name}</h1>
          
          <div className="product-rating">
            {renderStars(product.rating || 4)}
            <span className="product-rating-count">{product.reviewCount || 0} Reviews</span>
          </div>
          
          <div className="product-price-container">
            {product.oldPrice && (
              <span className="product-old-price">${product.oldPrice}</span>
            )}
            <span className="product-new-price">${product.price}</span>
          </div>
          
          <p className="product-description">
            {product.description}
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
          
          <div className="product-actions">
            <button 
              className="product-btn secondary-btn"
              onClick={() => navigate(-1)}
            >
              <span>Continue Shopping</span>
            </button>
            <button 
              className="product-btn"
              onClick={() => setShowOrderModal(true)}
            >
              <span>Add to Cart</span>
            </button>
          </div>
          
          <div className="product-stock">In Stock</div>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="related-products-section">
          <h2 className="section-title">Related Products</h2>
          <p className="section-subtitle">You might also like these items</p>
          
          <div className="related-products-grid">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct._id}
                _id={relatedProduct._id}
                name={relatedProduct.name}
                description={relatedProduct.description}
                price={relatedProduct.price}
                image={relatedProduct.image}
              />
            ))}
          </div>
        </div>
      )}

      {/* Order Now Modal */}
      <OrderNowModal
        show={showOrderModal}
        onClose={() => setShowOrderModal(false)}
        product={product}
      />
    </Container>
  );
};

export default ProductDetail;










