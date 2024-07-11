import { useState } from "react";
import { useUpdateProductMutation } from "../../redux/api/api";
import toast from "react-hot-toast";
import { TProduct } from "../../redux/features/productSlice";

type TEditProductProps = {
  isOpen: boolean;
  onClose: () => void;
  product: TProduct;
};

const EditProduct = ({ isOpen, onClose, product }: TEditProductProps) => {
  const [updateProduct] = useUpdateProductMutation();
  const [updatedProduct, setUpdatedProductData] = useState({
    title: product.title,
    price: product.price,
    description: product.description,
    category: product.category,
    stock: product.stock,
    rating: product.rating,
    image: product.image,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Updatyed", updateProduct);
    setUpdatedProductData({
      ...updatedProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateProduct({ ...updatedProduct, id: product._id });
    toast.success("Product Updated");

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <h3 className="text-lg leading-6  text-gray-900 mb-4 font-bold text-center">
                  Edit Product
                </h3>
                <form onSubmit={handleSubmit} className="w-full">
                  <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700">
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={updatedProduct.title}
                      onChange={handleChange}
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="price" className="block text-gray-700">
                      Price
                    </label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      value={updatedProduct.price}
                      onChange={handleChange}
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="description"
                      className="block text-gray-700"
                    >
                      Description
                    </label>
                    <input
                      type="text"
                      id="description"
                      name="description"
                      value={updatedProduct.description}
                      onChange={handleChange}
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="category" className="block text-gray-700">
                      Category
                    </label>
                    <input
                      type="text"
                      id="category"
                      name="category"
                      value={updatedProduct.category}
                      onChange={handleChange}
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="stock" className="block text-gray-700">
                      Stock
                    </label>
                    <input
                      type="text"
                      id="stock"
                      name="stock"
                      value={updatedProduct.stock}
                      onChange={handleChange}
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="rating" className="block text-gray-700">
                      Rating
                    </label>
                    <input
                      type="number"
                      id="rating"
                      name="rating"
                      value={updatedProduct.rating}
                      onChange={handleChange}
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="image" className="block text-gray-700">
                      Image URL
                    </label>
                    <input
                      type="text"
                      id="image"
                      name="image"
                      value={updatedProduct.image}
                      onChange={handleChange}
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <div className="flex justify-center mt-4">
                    <button
                      type="button"
                      onClick={onClose}
                      className="btn mr-2 bg-red-500 text-white font-bold mr-2"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn bg-green-500 text-white font-bold"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
{
  /* <div className="fixed z-10 inset-0 overflow-y-auto">
<div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
  <div className="fixed inset-0 transition-opacity" aria-hidden="true">
    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
  </div>

  <span
    className="hidden sm:inline-block sm:align-middle sm:h-screen"
    aria-hidden="true"
  >
    &#8203;
  </span>

  <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      <div className="sm:flex sm:items-start">
        <div className="mt-3 text-center sm:mt-0 sm:text-left">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
            Edit Product
          </h3>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={updatedProduct.title}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="price" className="block text-gray-700">
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={updatedProduct.price}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700"
              >
                Description
              </label>
              <input
                type="text"
                id="description"
                name="description"
                value={updatedProduct.description}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="category" className="block text-gray-700">
                Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={updatedProduct.category}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="stock" className="block text-gray-700">
                Stock
              </label>
              <input
                type="text"
                id="stock"
                name="stock"
                value={updatedProduct.stock}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="rating" className="block text-gray-700">
                Rating
              </label>
              <input
                type="number"
                id="rating"
                name="rating"
                value={updatedProduct.rating}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="image" className="block text-gray-700">
                Image URL
              </label>
              <input
                type="text"
                id="image"
                name="image"
                value={updatedProduct.image}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="flex justify-center mt-4">
              <button
                type="button"
                onClick={onClose}
                className="btn btn-secondary mr-2"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</div> */
}
