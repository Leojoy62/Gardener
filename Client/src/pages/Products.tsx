import { Link, useLocation } from "react-router-dom";
import { useGetProductsQuery } from "../redux/api/api";
import { TProduct, updateProductStock } from "../redux/features/productSlice";
import { useAppDispatch } from "../redux/hooks";
import { addToCart } from "../redux/features/cartSlice";
import toast from "react-hot-toast";

const Products = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");

  const dispatch = useAppDispatch();
  const {
    data: products,
    error,
    isLoading,
  } = useGetProductsQuery({
    category: category || undefined,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  const handleAddToCart = (product: TProduct) => {
    if (product.stock > 0) {
      dispatch(addToCart(product));
      toast.success("Product added to cart");
      dispatch(
        updateProductStock({ id: product._id!, stock: product.stock - 1 })
      );
    }
  };

  return (
    <div className="flex flex-col justify-center items-center my-5">
      <h1 className="text-2xl font-bold mb-4 text-center">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {products?.data?.map((product: TProduct) => (
          <div
            key={product._id}
            className=" flex flex-col justify-end items-center rounded-lg shadow-lg w-[300px] h-[300px] mb-0 p-0"
          >
            <Link to={`/products/${product._id}`} state={{ product }}>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[100px] object-cover mb-4"
              />
              <div>
                <h2 className="text-xl font-bold text-center">
                  {product.title}
                </h2>
                {/* <p className="text-gray-700 mb-2">{product.description}</p> */}
              </div>
            </Link>

            <div>
              <p className="text-gray-900 font-bold text-center">
                ${product.price}
              </p>
              <p className="text-yellow-500 text-center">{`Rating: ${product.rating}`}</p>
              <p className="text-gray-500 text-center">{`Stock: ${product.stock}`}</p>
            </div>

            <button
              className="btn bg-gray-800 w-full mt-2 text-[16px] font-bold text-white hover:text-green-500 hover:bg-black rounded-none rounded-b-lg"
              onClick={() => handleAddToCart(product)}
              disabled={product.stock <= 0}
            >
              {product.stock > 0 ? "Add To Cart" : "Out of Stock"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
