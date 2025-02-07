import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Auth/firebase.js'; // Ensure Firebase is initialized

const SignupForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  const onFinish = async (values) => {
    const { name, email, password, confirmPassword } = values;
    setLoading(true);

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
      alert('Signup successful!');
      navigate('/');
    } catch (error) {
      alert(error.message || 'Signup failed');
    }
    setLoading(false);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="bg-white p-4 rounded shadow-sm w-100" style={{ maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Sign Up</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const values = Object.fromEntries(formData.entries());
            onFinish(values);
          }}
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" required />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="email" required />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name="password" required />
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" required />
          </div>

          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account? <Link to="/login" className="text-primary">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;





// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// const SignupForm = () => {
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const onFinish = async (values) => {
//     const { name, email, password, confirmPassword } = values;
//     setLoading(true);

//     // Check if passwords match
//     if (password !== confirmPassword) {
//       alert('Passwords do not match!');
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/signup', {
//         name,
//         email,
//         password,
//       });
//       localStorage.setItem('token', response.data.token);
//       alert('Signup successful!'); // Replace with a toast or modal for better UX
//       navigate('/dashboard');
//     } catch (error) {
//       alert(error.response?.data?.message || 'Signup failed'); // Replace with a toast or modal for better UX
//     }
//     setLoading(false);
//   };

//   const onFinishFailed = (errorInfo) => {
//     alert('Please check your inputs and try again!'); // Replace with a toast or modal for better UX
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
//       <div className="bg-white p-4 rounded shadow-sm w-100" style={{ maxWidth: '400px' }}>
//         <h2 className="text-center mb-4">Sign Up</h2>
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             const formData = new FormData(e.target);
//             const values = Object.fromEntries(formData.entries());
//             onFinish(values);
//           }}
//         >
//           <div className="mb-3">
//             <label htmlFor="name" className="form-label">Name</label>
//             <input
//               type="text"
//               className="form-control"
//               id="name"
//               name="name"
//               placeholder="Enter your name"
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">Email</label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               name="email"
//               placeholder="Enter your email"
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               id="password"
//               name="password"
//               placeholder="Enter your password"
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
//             <input
//               type="password"
//               className="form-control"
//               id="confirmPassword"
//               name="confirmPassword"
//               placeholder="Confirm your password"
//               required
//             />
//           </div>

//           <button type="submit" className="btn btn-primary w-100" disabled={loading}>
//             {loading ? 'Signing up...' : 'Sign Up'}
//           </button>
//         </form>
//         <p className="text-center mt-4">
//           Already have an account? <Link to="/login" className="text-primary">Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignupForm;







// import { Link } from "react-router-dom";

// export default function Register() {
//   return (
//     <div>
//          <div className="login-wrap">
//   <h2>Create Account</h2>
//   <div className="form">
//     <input type="text" placeholder="Username" name="un" />
//     <input type="Email" placeholder="Email" name="un" />

//     <input type="password" placeholder="Password" name="pw" />
//     <button>Sign Up</button>
    
//       <p> Already have an account? Login  </p>
//       <Link to="/Login"> <li className="navbar-li">LogIn</li></Link>
//   </div>
// </div>

//     </div>
//   )
// }
