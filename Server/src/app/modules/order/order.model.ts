import { Schema, model } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema = new Schema<TOrder>(
  {
    id: { type: String, required: false },
    name: { type: String, required: true },

    phone: { type: Number, default: 0 },
    address: { type: String, required: true },

    payableTotal: { type: Number, required: true },
  },
  { timestamps: true }
);

export const Order = model<TOrder>("Order", orderSchema);
