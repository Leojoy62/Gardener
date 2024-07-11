import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { OrderServices } from "./order.service";

const createOrder = catchAsync(async (req, res) => {
  const orderData = req.body;

  const result = await OrderServices.createOrderIntoDB(orderData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Order is created succesfully",
    data: result,
  });
});

export const OrderControllers = {
  createOrder,
};
