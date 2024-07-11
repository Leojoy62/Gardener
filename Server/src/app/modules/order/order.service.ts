import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrderIntoDB = async (payload: TOrder) => {
  try {
    console.log("payload", payload);
    const order = await Order.create(payload);

    return order;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const OrderServices = {
  createOrderIntoDB,
};
