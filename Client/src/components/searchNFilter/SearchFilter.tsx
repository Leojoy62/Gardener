import { useState, useEffect } from "react";
import { useGetProductsQuery } from "../../redux/api/api";
import {
  TProduct,
  updateProductStock,
} from "../../redux/features/productSlice";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { addToCart } from "../../redux/features/cartSlice";
import toast from "react-hot-toast";

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortTerm, setSortTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<TProduct[]>([]);

  const dispatch = useAppDispatch();

  const { data: products } = useGetProductsQuery(undefined);

  useEffect(() => {
    if (products) {
      let tempProducts = [...products.data];

      // Filter by search term
      if (searchTerm) {
        const searchTermLower = searchTerm.toLowerCase();
        tempProducts = tempProducts.filter(
          (product: TProduct) =>
            product.title.toLowerCase().includes(searchTermLower) ||
            product.category.toLowerCase().includes(searchTermLower)
        );
      }

      // Sort by price
      if (sortTerm === "asc") {
        tempProducts.sort((a: TProduct, b: TProduct) => a.price - b.price);
      } else if (sortTerm === "desc") {
        tempProducts.sort((a: TProduct, b: TProduct) => b.price - a.price);
      }

      // Show only 9 products
      setFilteredProducts(tempProducts.slice(0, 9));
    }
  }, [products, searchTerm, sortTerm]);

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
    <div className="mt-5">
      <h1 className="text-2xl font-bold mb-4 text-center">Products</h1>
      <div className="md:flex md:justify-between items-center my-5 mx-3">
        <form className="flex gap-2">
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Search by title or category"
            className="input input-bordered w-64"
          />
          <button
            type="submit"
            className="btn bg-gray-800 text-white hover:bg-black"
          >
            Search
          </button>
        </form>
        <div>
          <select
            name="sortTerm"
            id="sortTerm"
            onChange={(e) => setSortTerm(e.target.value)}
            className="select outline-none border-none my-5 md:my-0"
          >
            <option value="">Sort By</option>
            <option value="asc">Price Low to High</option>
            <option value="desc">Price High to Low</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-evenly gap-4 ">
          {filteredProducts?.map((product: TProduct) => (
            <div
              key={product._id}
              className=" flex flex-col justify-end items-center rounded-lg shadow-lg w-[410px] h-[300px] mb-0 p-0"
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
                <p className="text-gray-500 text-center">{`Category: ${product.category}`}</p>
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
      <div className="flex justify-center my-5">
        <Link to={"/products"}>
          <button className="btn btn-neutral px-10">View More</button>
        </Link>
      </div>
    </div>
  );
};

export default SearchFilter;
