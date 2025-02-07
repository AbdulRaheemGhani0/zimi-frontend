
import Footer from "./Footer";
import ProductCard from "./ProductCard";

function Home() {












  return (
    <div className="Hero-section">
      <div  className="mainheading">
        <div><h1 style={{color: "yellow"}} >Find Out Best Trending Products In The Market</h1>
      <p   className="paragraph-1">
        Here are some best products in world you must buy. The trending products
        are mentions us in the trending products section.
      </p></div>
{/* <div className="welcome-img"><img src="https://images.pexels.com/photos/14170555/pexels-photo-14170555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" /></div> */}
      </div>
      
      <div   className="mainheading">
        <h1 >Most Trending Products</h1>
      </div>
      <div className="main-products-div">
        <div className="single-product">
          <ProductCard /> <ProductCard />
          <ProductCard /> <ProductCard /><ProductCard /> <ProductCard /><ProductCard /> <ProductCard /><ProductCard /> <ProductCard /><ProductCard /> <ProductCard /><ProductCard /> <ProductCard /><ProductCard />
        </div>
       
      </div>


<Footer />

</div>


  
  );
}

export default Home;
