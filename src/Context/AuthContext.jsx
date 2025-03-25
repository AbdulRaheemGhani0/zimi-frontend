import { createContext, useContext, useState, useEffect, useMemo } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user data on initial load
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");

        // If no token is found, skip the request
        if (!token) {
          setLoading(false);
          return;
        }

        // Fetch user data from the server
        const response = await axios.get("https://zimi-backend-final.onrender.com/auth/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Ensure the response contains a valid user object
        if (response.data && response.data.user) {
          setUser(response.data.user);
        } else {
          setUser(null); // Set user to null if the response is invalid
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        setUser(null); // Set user to null on error
      } finally {
        setLoading(false); // Ensure loading is set to false
      }
    };

    fetchUser();
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      const response = await axios.post("https://zimi-backend-final.onrender.com/auth/login", {
        email,
        password,
      });

      // Ensure the response contains a valid token and user object
      if (response.data.accessToken && response.data.user) {
        localStorage.setItem("token", response.data.accessToken); // Store token in localStorage
        setUser(response.data.user); // Set user in state
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      console.error("Login failed:", error);
      throw error; // Re-throw the error for the caller to handle
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await axios.post("https://zimi-backend-final.onrender.com/auth/logout");
      localStorage.removeItem("token"); // Remove token from localStorage
      setUser(null); // Clear user from state
    } catch (error) {
      console.error("Logout failed:", error);
      throw error; // Re-throw the error for the caller to handle
    }
  };

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      user,
      loading,
      login,
      logout,
    }),
    [user, loading]
  );

  return (
    <AuthContext.Provider value={contextValue}>
      {!loading && children} {/* Render children only when loading is false */}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);




// import { createContext, useState, useEffect, useContext } from "react";
// import axios from "axios";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);



//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           console.error("No token found");
//           setLoading(false);
//           return;
//         }
  
//         const response = await axios.get("https://zimi-backend-final.onrender.com/auth/user", {
//           headers: {
//             Authorization: `Bearer ${token}`, // ✅ Send token in header
//           },
//         });
  
//         console.log("User data:", response.data);
//         setUser(response.data.user);
//       } catch (error) {
//         console.error("Error fetching user:", error.response?.data || error.message);
//         setUser(null);
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     fetchUser();
//   }, []);

  
 

//   // 🔑 Login Function
//   const login = async (email, password) => {
//     try {
//       const response = await axios.post(
//         "https://zimi-backend-final.onrender.com/auth/login",
//         { email, password },
//         { withCredentials: true }
//       );
  
//       if (response.data.accessToken) {
//         localStorage.setItem("token", response.data.accessToken); // ✅ Store access token
//         setUser(response.data.user);
//       } else {
//         console.error("No access token received");
//       }
//     } catch (error) {
//       console.error("Login failed", error.response?.data?.error);
//       throw error;
//     }
//   };
  
//   // 🚪 Logout Function
//   const logout = async () => {
//     try {
//       await axios.post("https://zimi-backend-final.onrender.com/auth/logout", {}, { withCredentials: true });
//       localStorage.removeItem("token");
//       setUser(null);
//     } catch (error) {
//       console.error("Logout failed:", error.response?.data?.error);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, loading, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // ✅ Custom Hook for using Auth Context
// export const useAuth = () => useContext(AuthContext);







 // import { createContext, useState, useEffect, useContext } from "react";
// import axios from "axios";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Fetch User Data
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const token = localStorage.getItem("token"); // ✅ Get token from localStorage
//         if (!token) {
//           console.error("No token found");
//           setLoading(false);
//           return;
//         }

//         const response = await axios.get("http://localhost:5000/auth/user", {
//           headers: {
//             Authorization: `Bearer ${token}`, // ✅ Send token in Authorization header
//           },
//         });

//         console.log("User data:", response.data);
//         setUser(response.data.user); // ✅ Set user data
//       } catch (error) {
//         console.error("Error fetching user:", error.response?.data || error.message);
//         setUser(null);
//       } finally {
//         setLoading(false); // ✅ Ensure loading stops
//       }
//     };

//     fetchUser();
//   }, []);

//   // Login Function
//   const login = async (email, password) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/auth/login",
//         { email, password },
//         { withCredentials: true }
//       );
//       localStorage.setItem("token", response.data.token); // ✅ Store token
//       setUser(response.data.user); // ✅ Set user
//     } catch (error) {
//       console.error("Login failed", error.response?.data?.error);
//       throw error;
//     }
//   };

//   // Logout Function
//   const logout = async () => {
//     try {
//       await axios.post("http://localhost:5000/auth/logout", {}, { withCredentials: true });
//       localStorage.removeItem("token"); // ✅ Clear token from storage
//       setUser(null);
//     } catch (error) {
//       console.error("Logout failed", error.response?.data?.error);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, loading, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

