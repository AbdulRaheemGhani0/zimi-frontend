import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../productCard.css";
import { Button } from "react-bootstrap";

export default function ProductCard({ _id, name, description, price, image }) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/product/${_id}`);
  };

  return (
    <div className="product-card-wrapper">
      <div className="product-img">
        <img 
          src={image || "https://via.placeholder.com/400"} 
          alt={name}
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/400";
          }}
        />
      </div>
      <div className="product-info">
        <div className="product-text">
          <h1>{name.length > 30 ? `${name.substring(0, 30)}...` : name}</h1>
          <h2>by ZIMI MART</h2>
          <p>
            {description.length > 100 
              ? `${description.substring(0, 100)}...` 
              : description}
          </p>
        </div>
        <div className="product-price-btn">
          <p><span>{price.toFixed(2)}</span>$</p>
          <Button 
            variant="primary" 
            className="custom-buy-btn"
            onClick={handleViewDetails}
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string,
};

ProductCard.defaultProps = {
  image: "https://via.placeholder.com/400",
};





















