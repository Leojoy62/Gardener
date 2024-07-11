import { RootState } from "../redux/store";
import { useAppSelector } from "../redux/hooks";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useAppSelector((state: RootState) => state.cart);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      <div className="grid grid-cols-1 gap-4">
        {cart.items.map((item) => (
          <div
            key={item._id}
            className=" p-4 rounded-lg flex justify-between items-center shadow-xl"
          >
            <div>
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-700 mb-2">{item.description}</p>
              <p className="text-gray-900 font-bold">${item.price}</p>
              <p className="text-gray-900 font-bold">{`Stock: ${item.stock}`}</p>
              <p className="text-yellow-500">{`Rating: ${item.rating}`}</p>
              <p className="text-gray-500">{`Quantity: ${item.quantity}`}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">{`Total Cost: $${cart.totalCost.toFixed(
          2
        )}`}</h2>
      </div>
      <div className="mt-5">
        <Link to={`/checkout?totalCost=${cart.totalCost}`}>
          <button className="btn btn-neutral">Proceed To Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
