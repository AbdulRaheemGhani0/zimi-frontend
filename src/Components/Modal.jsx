import { useState } from 'react';
import axios from 'axios';
import Modal from './Modal'; // Import the Modal component
import { useAuth } from '../Context/AuthContext.jsx'; // Import the AuthContext
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import "../Ordernowbtn.css"; // Import CSS for styling

const OrderNowForm = ({ product   }) => {
    const [quantity, setQuantity] = useState(1);
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

    const { user } = useAuth(); // Get the user from AuthContext
    const navigate = useNavigate(); // For redirection

    // Handle Order Now button click
    const handleOrderNowClick = () => {
        if (!user) {
            // If the user is not logged in, redirect to the login page
            navigate('/login');
        } else {
            // If the user is logged in, open the modal
            setIsModalOpen(true);
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await axios.post('https://zimi-backend-final.onrender.com/submit-order', {
                productId: product._id,
                productName: product.name,
                quantity,
                email,
                address,
                number,
            });

            setMessage(response.data.message);
            setTimeout(() => {
                setIsModalOpen(false); // Close the modal after submission
                setMessage(''); // Reset the message
            }, 2000);
        } catch (error) {
            console.error('Error submitting order:', error);
            setMessage('Failed to submit order. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            {/* Order Now Button */}
            <button onClick={handleOrderNowClick}>Order Now</button>

            {/* Modal with Order Form */}
            {user && ( // Only show the modal if the user is logged in
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="quantity">Quantity:</label>
                            <input
                                type="number"
                                id="quantity"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                min="1"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="address">Address:</label>
                            <input
                                type="text"
                                id="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="number">Contact Number:</label>
                            <input
                                type="text"
                                id="number"
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" disabled={isLoading}>
                            {isLoading ? 'Submitting...' : 'Submit Order'}
                        </button>
                    </form>

                    {message && (
                        <div className={`message ${message.includes("successfully") ? 'success' : 'error'}`}>
                            {message}
                        </div>
                    )}
                </Modal>
            )}
        </div>
    );
};

export default OrderNowForm;



// import { useState } from "react";
// import { Modal, Button, Form, Spinner, Alert } from "react-bootstrap";
// import axios from "axios";

// const OrderNowModal = ({ show, onClose, product }) => {
//   const [quantity, setQuantity] = useState(1);
//   const [email, setEmail] = useState("");
//   const [address, setAddress] = useState("");
//   const [number, setNumber] = useState("");
//   const [message, setMessage] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const response = await axios.post("https://zimi-backend-final.onrender.com/submit-order", {
//         productId: product._id,
//         productName: product.name,
//         quantity,
//         email,
//         address,
//         number,
//       });

//       setMessage(response.data.message);
//       setTimeout(() => {
//         onClose(); // Close the modal after successful submission
//         setMessage(""); // Reset the message
//       }, 2000);
//     } catch (error) {
      
//       console.error("Error submitting order:", error);
//       setMessage("Failed to submit order. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <Modal show={show} onHide={onClose} centered>
//       <Modal.Header closeButton>
//         <Modal.Title>Order Now: {product.name}</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group className="mb-3">
//             <Form.Label>Quantity</Form.Label>
//             <Form.Control
//               type="number"
//               value={quantity}
//               onChange={(e) => setQuantity(e.target.value)}
//               min="1"
//               required
//             />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Email</Form.Label>
//             <Form.Control
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Address</Form.Label>
//             <Form.Control
//               type="text"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Contact Number</Form.Label>
//             <Form.Control
//               type="text"
//               value={number}
//               onChange={(e) => setNumber(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <Button variant="success" type="submit" disabled={isLoading}>
//             {isLoading ? <Spinner size="sm" /> : "Submit Order"}
//           </Button>
//         </Form>
//         {message && (
//           <Alert variant={message.includes("successfully") ? "success" : "danger"} className="mt-3">
//             {message}
//           </Alert>
//         )}
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default OrderNowModal;
