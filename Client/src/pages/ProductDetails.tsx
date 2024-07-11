import { useLocation } from "react-router-dom";
import { TProduct, updateProductStock } from "../redux/features/productSlice";
import { useAppDispatch } from "../redux/hooks";
import { addToCart } from "../redux/features/cartSlice";

const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state as { product: TProduct };
  const dispatch = useAppDispatch();
  const handleAddToCart = (product: TProduct) => {
    if (product.stock > 0) {
      dispatch(addToCart(product));
      dispatch(
        updateProductStock({ id: product._id!, stock: product.stock - 1 })
      );
    }
  };

  return (
    <div className=" h-screen flex justify-center items-center ">
      <div className="w-[80%] h-[80%] flex flex-col justify-center items-center border p-4 rounded shadow-lg mx-auto ">
        <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-[60%] object-cover mb-4"
        />
        <p className="mb-2 text-gray-500">{product.description}</p>
        <p className="text-gray-900 font-bold mb-2">${product.price}</p>
        <p className="text-yellow-500 mb-2">{`Rating: ${product.rating}`}</p>
        <p className="text-gray-500 mb-4">{`Stock: ${product.stock}`}</p>
        <button
          className="btn btn-active btn-neutral"
          onClick={() => handleAddToCart(product)}
          disabled={product.stock <= 0}
        >
          {product.stock > 0 ? "Add To Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
