import React, { useState } from "react";
import { useAddProductMutation } from "../../redux/api/api";
import toast from "react-hot-toast";

const AddProductModal = ({ isOpen, onClose }) => {
  const [addProduct] = useAddProductMutation();
  const [productData, setProductData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    stock: "",
    rating: "",
    image: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await addProduct(productData);
    toast.success("Product added.");
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
                  Add New Product
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
                      value={productData.title}
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
                      value={productData.price}
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
                      value={productData.description}
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
                      value={productData.category}
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
                      value={productData.stock}
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
                      value={productData.rating}
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
                      value={productData.image}
                      onChange={handleChange}
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <div className="flex justify-center mt-4">
                    <button
                      type="button"
                      onClick={onClose}
                      className="btn mr-2 bg-red-500 text-white font-bold"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn bg-green-500 text-white font-bold"
                    >
                      Add
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

export default AddProductModal;
