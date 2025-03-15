
import '../Footer.css'; // Import the CSS file for styling

function Footer() {
  return (
    <div className="Footer-div">
      <div className="footer-main-column">
        <div className="footer-col">
          <h4>Info</h4>
          <ul className="links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Collection</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-main-column">
        <div className="footer-col">
          <h4>Explore</h4>
          <ul className="links">
            <li><a href="#">Latest Products</a></li>
            <li><a href="#">Popular Products</a></li>
            <li><a href="#">New Uploads</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-main-column">
        <div className="footer-col">
          <h4>Legal</h4>
          <ul className="links">
            <li><a href="#">Services</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-main-column">
        <div className="footer-col">
          <h4>Newsletter</h4>
          <p>
            Subscribe to our newsletter for a weekly dose of news, updates, helpful
            tips, and exclusive offers.
          </p>
          <form action="#">
            <input type="text" placeholder="Your email" required />
            <button type="submit">SUBSCRIBE</button>
          </form>
          <div className="icons">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-github"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;











// function Footer() {
//   return (
//     <div className="Footer-div">

//     <div className="footer-main-colum">
//     <div className="footer-col">
//           <h4>Info</h4>
//           <ul className="links">
//             <li>
//               <a href="#">About Us</a>
//             </li>
          
          
//             <li>
//               <a href="#">Service</a>
//             </li>
//             <li>
//               <a href="#">Collection</a>
//             </li>
//           </ul>
//         </div></div>
//         <div className="footer-main-colum">    <div className="footer-col">
//           <h4>Explore</h4>
//           <ul className="links">
            
//             <li>
//               <a href="#">Latest Products</a>
//             </li>
          
//             <li>
//               <a href="#">Popular Products</a>
//             </li>
         
//             <li>
//               <a href="#">New Uploads</a>
//             </li>
//           </ul>
//         </div></div>
//     <div className="footer-main-colum">    <div className="footer-col">
//           <h4>Legal</h4>
//           <ul className="links">
//             <li>
//               <a href="#">Services</a>
//             </li>
//             <li>
//               <a href="#">Privacy Policy</a>
//             </li>
            
           
//             {/* <li>
//               <a href="#">Media Kit</a>
//             </li> */}
//           </ul>
//         </div></div>
    
//         <div  className="footer-main-colum">
//         <div className="footer-col">
//           <h4>Newsletter</h4>
//           <p>
//             Subscribe to our newsletter for a weekly dose of news, updates, helpful
//             tips, and exclusive offers.
//           </p>
//           <form action="#">
//             <input type="text" placeholder="Your email" required="" />
//             <button type="submit">SUBSCRIBE</button>
//           </form>
//           <div className="icons">
//             <i className="fa-brands fa-facebook-f" />
//             <i className="fa-brands fa-twitter" />
//             <i className="fa-brands fa-linkedin" />
//             <i className="fa-brands fa-github" />
//           </div>
//         </div>
//       </div></div>
//   )
// }

// export default Footer;
