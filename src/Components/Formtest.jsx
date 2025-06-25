import { useAuth } from "../Context/AuthContext";
import ProductForm from "./AddProducts";

const AddProducts = () => {
  const { user } = useAuth();

  if (!user) return <p>Loading user data...</p>;

  return <ProductForm userId={user._id} />;
};
export default AddProducts ;