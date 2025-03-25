import { useState, createContext, useContext, useCallback, useEffect } from "react";
import axios from "axios";

// Create the context
const ProductsContext = createContext();

// Define the provider component
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch products function
  const fetchUserProducts = useCallback(async (userId = null) => {
    setLoading(true);
    setError(null);
    try {
      const url = userId
        ? `https://zimi-backend-final.onrender.com/user/${userId}` // Fetch user-specific products
        : `https://zimi-backend-final.onrender.com/api/products`; // Fetch all products
      const response = await axios.get(url);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Failed to fetch products. Please try again later.");
      setProducts([]); // Clear products in case of error
    } finally {
      setLoading(false);
    }
  }, []);

  // Automatically fetch products when the provider is mounted
  useEffect(() => {
    fetchUserProducts(); // Fetch all products (no userId provided)
  }, [fetchUserProducts]);

  // Provide the context value
  return (
    <ProductsContext.Provider value={{ products, fetchUserProducts, loading, error }}>
      {children}
    </ProductsContext.Provider>
  );
};

// Custom hook to use the context
export const useProducts = () => useContext(ProductsContext);

// import { useState, createContext, useContext, useCallback } from "react";
// import axios from "axios";

// // Create the context
// const ProductsContext = createContext();

// // Define the provider component
// export const ProductsProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Fetch products function
//   const fetchUserProducts = useCallback(async (userId = null) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const url = userId
//         ? `http://localhost:5000/api/products`   // Fetch user-specific products
//         : `http://localhost:5000/user/${userId}`  ; // Fetch all products
//       const response = await axios.get(url);
//       setProducts(response.data);
      
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       setError("Failed to fetch products. Please try again later.");
//       console.log("products br ==>",products );
//       setProducts([]);
//       console.log("products ar==>",products );
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   // Provide the context value
//   return (
//     <ProductsContext.Provider value={{ products, fetchUserProducts, loading, error }}>
//       {children}
//     </ProductsContext.Provider>
//   );
// };

// // Custom hook to use the context
// export const useProducts = () => useContext(ProductsContext);























// import { useState, createContext, useContext, useCallback } from "react";
// import axios from "axios";

// const ProductsContext = createContext();

// export const ProductsProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchUserProducts = useCallback(async (userId) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await axios.get(`http://localhost:5000/products/user/${userId}`);
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching user products:", error);
//       setError("Failed to fetch products. Please try again later.");
//       setProducts([]);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   return (
//     <ProductsContext.Provider value={{ products, fetchUserProducts, loading, error }}>
//       {children}
//     </ProductsContext.Provider>
//   );
// };

// export const useProducts = () => useContext(ProductsContext);

