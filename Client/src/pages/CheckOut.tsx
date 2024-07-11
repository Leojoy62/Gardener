import React, { useState } from "react";
import { useAddOrderMutation } from "../redux/api/api";
import { useLocation } from "react-router-dom";

const CheckOut = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const totalCost = parseFloat(searchParams.get("totalCost") || "0");

  const [addOrder] = useAddOrderMutation();
  const [orderData, setOrderData] = useState({
    name: "",
    phone: "",
    address: "",
    payableTotal: totalCost,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrderData({
      ...orderData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await addOrder(orderData);
  };

  return (
    <div className="flex justify-center items-center my-5">
      <form onSubmit={handleSubmit} className="w-3/5 max-w-md">
        <div className="mb-4 flex flex-col gap-2">
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={orderData.name}
            onChange={handleChange}
            placeholder="Type here"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="mb-4 flex flex-col gap-2">
          <label htmlFor="phone" className="block text-gray-700">
            Phone
          </label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={orderData.phone}
            onChange={handleChange}
            placeholder="Type here"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="mb-4 flex flex-col gap-2">
          <label htmlFor="address" className="block text-gray-700">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={orderData.address}
            onChange={handleChange}
            placeholder="Type here"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="mb-4 flex flex-col gap-2">
          <label htmlFor="payableTotal" className="block text-gray-700">
            Payable Total
          </label>
          <input
            type="number"
            id="payableTotal"
            name="payableTotal"
            value={totalCost}
            onChange={handleChange}
            placeholder="Type here"
            className="input input-bordered w-full"
            readOnly
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="btn bg-gray-800 text-white font-bold"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
