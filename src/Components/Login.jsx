import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Auth/firebase'; 

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const onFinish = async (values) => {
    const { email, password } = values;
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      
      navigate('/'); 
    } catch (error) {
      alert(error.message || 'Login failed');
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // alert(`Welcome, ${result.user.displayName}!`);
      navigate('/');
    } catch (error) {
      alert(error.message || 'Google login failed');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="bg-white p-4 rounded shadow-sm w-100" style={{ maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Login</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const values = Object.fromEntries(formData.entries());
            onFinish(values);
          }}
        >
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="email" required />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name="password" required />
          </div>

          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <button onClick={handleGoogleLogin} className="btn btn-danger w-100 mt-3">
          Login with Google
        </button>
        <p className="text-center mt-4">
          Dont have an account? <Link to="/signup" className="text-primary">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;


// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../Auth/firebase'; // Ensure Firebase is initialized

// const LoginForm = () => {
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const auth = getAuth();

//   const onFinish = async (values) => {
//     const { email, password } = values;
//     console.log("values ==>",values)
//     setLoading(true);

//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       alert('Login successful!');
//       navigate('/'); // Redirect to a dashboard or home page
//     } catch (error) {
//       alert(error.message || 'Login failed');
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
//       <div className="bg-white p-4 rounded shadow-sm w-100" style={{ maxWidth: '400px' }}>
//         <h2 className="text-center mb-4">Login</h2>
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             const formData = new FormData(e.target);
//             const values = Object.fromEntries(formData.entries());
//             onFinish(values);
//           }}
//         >
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">Email</label>
//             <input type="email" className="form-control" id="email" name="email" required />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">Password</label>
//             <input type="password" className="form-control" id="password" name="password" required />
//           </div>

//           <button type="submit" className="btn btn-primary w-100" disabled={loading}>
//             {loading ? 'Logging in...' : 'Login'}
//           </button>
//         </form>
//         <p className="text-center mt-4">
//           Dont have an account? <Link to="/signup" className="text-primary">Sign Up</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;














// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// const LoginForm = () => {
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const onFinish = async (values) => {
//     const { email, password } = values;
//     setLoading(true);
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
//       localStorage.setItem('token', response.data.token);
//       alert('Login successful!'); // Replace Ant Design message with a simple alert
//       navigate('/dashboard');
//     } catch (error) {
//       alert(error.response?.data?.message || 'Login failed'); // Replace Ant Design message with a simple alert
//     }
//     setLoading(false);
//   };

//   const onFinishFailed = (errorInfo) => {
//     alert('Please check your inputs and try again!'); // Replace Ant Design message with a simple alert
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
//       <div className="bg-white p-4 rounded shadow-sm w-100" style={{ maxWidth: '400px' }}>
//         <h2 className="text-center mb-4">Login</h2>
//         <form onSubmit={(e) => {
//           e.preventDefault();
//           const formData = new FormData(e.target);
//           const values = Object.fromEntries(formData.entries());
//           onFinish(values);
//         }}>
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

//           <button type="submit" className="btn btn-primary w-100" disabled={loading}>
//             {loading ? 'Logging in...' : 'Login'}
//           </button>
//         </form>
//         <p className="text-center mt-4">
//           Dont have an account? <Link to="/signup" className="text-primary">Sign Up</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;














// import { Link } from "react-router-dom";

// export default function Login() {

//   return (
//     <div>
//       <form>
//       <div className="login-wrap">
//   <h2>Login</h2>
//   <div className="form">
//   <input type="Email" placeholder="Email" name="un" />
//   <input type="password" placeholder="Password" name="pw" />
//     <button type="submit"> Sign in </button>

//       <p> Dont have an account? Register </p>
//       <Link to="/signup"> <li className="navbar-li">Sign Up</li></Link>
//   </div>
// </div></form>

//     </div>

//   )
// }
