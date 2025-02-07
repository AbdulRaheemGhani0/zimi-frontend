import Footer from "./Footer"
import Navbar from "./Navbar"
import ProductCard from "./ProductCard"


function ProductsPage() {
  return (
    <>

    <div> <Navbar /></div>
    <div className="ProductsPage"  >
      <h1>All Products</h1>

<div className="Products-devision"><ProductCard /><ProductCard /><ProductCard /><ProductCard /><ProductCard /><ProductCard /><ProductCard /><ProductCard /><ProductCard /></div>


<Footer />

    </div>
    </> )
}

export default ProductsPage
