import { useState } from "react";
import AddProductModal from "../components/addProduct/AddProductModal";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../redux/api/api";
import { TProduct } from "../redux/features/productSlice";
import EditProduct from "../components/editProduct/EditProduct";
import toast from "react-hot-toast";

const Manage = () => {
  const { data: products } = useGetProductsQuery(undefined);
  const [deleteProduct] = useDeleteProductMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<TProduct | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleEditOpenModal = (product: TProduct) => {
    setCurrentProduct(product);
    setIsEditModalOpen(true);
  };
  const handleEditCloseModal = () => {
    setIsEditModalOpen(false);
    setCurrentProduct(null);
  };

  const handleDelete = async (id: string) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirm) return;

    await deleteProduct(id);
    toast.success("Product Deleted Successfully");
  };

  return (
    <div className="overflow-x-auto">
      <h3 className="text-2xl font-bold text-center mb-5">Manage Products</h3>
      <div className="flex justify-end">
        <button
          onClick={handleOpenModal}
          className="btn bg-green-500 font-bold text-white"
        >
          +Add
        </button>
      </div>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Image</th>
            <th>Product Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {products?.data?.map((product: TProduct) => (
            <tr key={product.title}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={product.image} />
                    </div>
                  </div>
                  <div></div>
                </div>
              </td>
              <td>
                <div className="font-bold">{product.title}</div>
              </td>
              <td>
                <div className="font-bold">{product.price}</div>
              </td>
              <td>
                <div className="font-bold">{product.category}</div>
              </td>
              <td>
                <div className="font-bold">{product.rating}</div>
              </td>
              <td className="flex gap-2">
                <button
                  onClick={() => handleEditOpenModal(product)}
                  className="btn bg-green-500 text-white font-bold"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product._id!)}
                  className="btn bg-red-600 text-white font-bold"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddProductModal isOpen={isModalOpen} onClose={handleCloseModal} />
      {currentProduct && (
        <EditProduct
          product={currentProduct}
          isOpen={isEditModalOpen}
          onClose={handleEditCloseModal}
        />
      )}
    </div>
  );
};

export default Manage;
