// import { StrictMode } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

import About from './Components/About.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import App from './App.jsx';
import ProductsPage from './Components/ProductsPage.jsx';
import PrivacyPolicy from './Components/PrivacyPolicy.jsx';
import ContactUs from './Components/ContactUs.jsx';
import UserProfile from './Components/Profile.jsx';
import { AuthProvider } from './Context/Authcontext.jsx'; 

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <AuthProvider>
    <Routes>
  <Route index element={<App />} />
  <Route path="/about" element={<About />} />

  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    <Route path="/login" element={<Login />} />
    <Route path="/Products" element={<ProductsPage/>} />
    <Route path="/signup" element={< Register/>} />
    <Route path="/Contactus" element={<ContactUs />} />
    <Route path="/Profile" element={<UserProfile />} />


  {/* <Route path="concerts">
    <Route index element={<ConcertsHome />} />
    <Route path=":city" element={<City />} />
    <Route path="trending" element={<Trending />} />
  </Route> */}
</Routes>
</AuthProvider>
    </BrowserRouter>
    
)
