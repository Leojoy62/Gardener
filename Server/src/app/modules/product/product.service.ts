import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDB = async (payload: TProduct) => {
  try {
    console.log("payload", payload);
    const product = await Product.create(payload);

    return product;
  } catch (error: any) {
    throw new Error(error);
  }
};

const getAllProductsFromDB = async (query?: Partial<TProduct>) => {
  try {
    let products;

    if (query && Object.keys(query).length > 0) {
      products = await Product.find(query); // Filter products if query is provided
    } else {
      products = await Product.find(); // Fetch all products if no query is provided
    }

    return products;
  } catch (error: any) {
    throw new Error(error);
  }
};

const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);

  return result;
};

const updateProductIntoDB = async (id: string, payload: Partial<TProduct>) => {
  const { ...updatedProductData } = payload;

  const result = await Product.findByIdAndUpdate(id, updatedProductData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await Product.deleteOne({ _id: id });
  return result;
};

const getProductsByCategoryFromDB = async (category: string) => {
  try {
    const products = await Product.find({ category });

    return products;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
  getProductsByCategoryFromDB,
};
