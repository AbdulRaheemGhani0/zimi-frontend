import { Link } from "react-router-dom";
import { useAuth } from '../Context/Authcontext.jsx'; // Import AuthContext
// import {  useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar() {
  const { user } = useAuth(); // Get user & logout from AuthContext
  // const navigate = useNavigate();

  // const handleLogout = async () => {
  //   await logout();
  //   navigate('/login');
  // };, logout
  

  return (
    <div className="navbar-main-container">
      <div className="logo-container">
        <h1>Zimi</h1>
      </div>

      <div className="navbar-container">
        <ul className="navbar-ul">
        <Link to="/"><li className="navbar-li"    >Home</li></Link>

          <Link to="/Products"><li className="navbar-li"    >Products</li></Link>
          
          
          <Link to="/About"> <li className="navbar-li">About</li></Link>
          <Link to="/privacy-policy"><li className="navbar-li">Privicy Policy</li></Link>
          <Link to="/Contactus"> <li className="navbar-li">Contact Us</li></Link>

        </ul>
      </div>

      <div className="Cart-container">
         {/* Conditional Rendering for User */}
       
        {user ? (
          <ul  className="navbar-ul">
             <Link to="/Profile"> <li className="navbar-li">Profile
                {/* ✅ User Logged In - Show Avatar */}
                {/* <button */}
                  {/* className="btn btn-light dropdown-toggle d-flex align-items-center"
                  type="button"
                  */}
                {/* > */}
                  {/* <img
                    src={user.photoURL || 'https://via.placeholder.com/40'}
                    alt="Profile"
                    className="rounded-circle border"
                    style={{ width: '40px', height: '40px', objectFit: 'cover',  }}
                  /> */}
                {/* </button> */}
                </li></Link></ul>
              
            ) : (
              // ✅ User Not Logged In - Show Login Button
              <ul  className="navbar-ul">
                          <Link to="/Login"> <li className="navbar-li">Login</li></Link>

              </ul>
            )}      </div>
    </div>
  );
}

export default Navbar;
















// import { Link } from "react-router-dom";
// import { useAuth } from '../Context/AuthContext';
// import {  useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';


// function Navbar() {
//   return (
//     <div className="navbar-main-container">
//       <div className="logo-container">
//         <h1>Zimi</h1>
//       </div>

//       <div className="navbar-container">
//         <ul className="navbar-ul">
//           <Link to="/Products"><li className="navbar-li"    >Products</li></Link>
          
          
//           <Link to="/About"> <li className="navbar-li">About</li></Link>
//           <Link to="/privacy-policy"><li className="navbar-li">Privicy Policy</li></Link>
//           <Link to="/Contactus"> <li className="navbar-li">Contact Us</li></Link>

//         </ul>
//       </div>

//       <div className="Cart-container">
//       <Link to="/Login"> <li className="navbar-li">Login/SignUp</li></Link>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
