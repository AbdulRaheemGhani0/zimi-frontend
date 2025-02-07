import { useAuth } from '../Context/Authcontext.jsx'; // ✅ Import useAuth hook
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar.jsx';

const UserProfile = () => {
  const { user, logout } = useAuth(); // ✅ Get user & logout from AuthContext
  const navigate = useNavigate();



  const handleLogout = async () => {
    await logout(); // ✅ Logout using context function
    navigate('/login');
  };

  // ✅ Redirect user if not logged in
  if (!user) {
    navigate('/');
  }

  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <div className="row">
          {/* Left Section - Profile Details */}
          <div className="col-md-4">
            <div className="card shadow-sm p-4 text-center">
              <img
                src={user.photoURL || 'https://via.placeholder.com/150'}
                alt="Profile"
                className="rounded-circle mb-3 border"
                style={{ width: '120px', height: '120px', objectFit: 'cover', border: '3px solid #007bff' }}
              />
              <h4 className="mb-1">{user.displayName || 'User'}</h4>
              <p className="text-muted">{user.email}</p>
            </div>
          </div>

          {/* Right Section - Logout Button */}
          <div className="col-md-8 d-flex flex-column align-items-end gap-2">
  
  <button className="btn btn-primary w-50 h-20">
    Notifications
  </button>
  <button className="btn btn-primary w-50 h-20">
    Add Product
  </button>
  <button className="btn btn-primary w-50" onClick={handleLogout}>
    Logout
  </button>
</div>
       </div>
        

        {/* My Products Section */}
        <div className="mt-5">
          <h3 className="text-center mb-4">My Products</h3>
          <div className="row">
            {/* Sample Products - Replace with actual data */}
            {[1, 2, 3].map((product, index) => (
              <div className="col-md-4" key={index}>
                <div className="card shadow-sm">
                  <img
                    src="https://via.placeholder.com/300"
                    alt="Product"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Product {index + 1}</h5>
                    <p className="card-text">This is a sample product description.</p>
                    <button className="btn btn-primary w-100">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;






// import { useAuth } from '../Context/Authcontext.jsx'; // ✅ Import useAuth hook
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './Navbar.jsx';

// const UserProfile = () => {
//   const { user, logout } = useAuth(); // ✅ Get user & logout from AuthContext
//   const navigate = useNavigate();

//   console.log("User details ==> ", user); // ✅ Debugging log

//   const handleLogout = async () => {
//     await logout(); // ✅ Logout using context function
//     navigate('/login');
//   };

//   // ✅ Handle case where user is not logged in
//   if (!user) {
//     navigate('/');
//     // return <Navigate to="/login" />;
//     // return (
//     //   <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
//     //     <h4 className="text-muted">User not logged in...</h4>
//     //   </div>
//     // );
//   }

//   return (
//     <>
//     <div><Navbar/> </div>
//     <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
//       <div className="card shadow-lg p-4 text-center animated fadeInUp" style={{ width: '350px', borderRadius: '15px' }}>
//         <div className="card-body">
//           <img
//             src={user.photoURL || 'https://via.placeholder.com/150'}
//             alt="Profile"
//             className="rounded-circle mb-3 border"
//             style={{ width: '120px', height: '120px', objectFit: 'cover', border: '3px solid #007bff' }}
//           />
//           <h4 className="mb-1">{user.displayName || 'User'}</h4>
//           <p className="text-muted">{user.email}</p>

//           <button className="btn btn-danger w-100 mt-2" onClick={handleLogout}>
//             Logout
//           </button>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default UserProfile;

