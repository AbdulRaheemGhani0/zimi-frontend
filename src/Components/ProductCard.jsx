
export default function ProductCard() {
  return (
    <div>
      <>
      <div className="product-card">
  <img
     src="https://media.istockphoto.com/id/182892243/photo/airsoft-gun-equipment.jpg?s=1024x1024&w=is&k=20&c=9Z5BRTzSBhRLRjsf_w3Tk7iJgpge3Wp_nk8GA6evOpY="
                          alt="Air gun"
    className="product-image"
  />
  <div className="product-details">
    <h5 className="product-title">Product Name</h5>
    <p className="product-description">
      This is a short description of the product. It highlights key features in
      a few sentences.
    </p>
    <div className="product-price">$49.99</div>
    <button className="btn buy-btn">Add to Cart</button>
  </div>
</div>

</>

    </div>
  )
}
