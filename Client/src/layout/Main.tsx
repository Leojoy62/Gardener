import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import { Toaster } from "react-hot-toast";
import { useAppSelector } from "../redux/hooks";
import { useEffect } from "react";
import { selectCartItems } from "../redux/features/cartSlice";

const Main = () => {
  const cartItems = useAppSelector(selectCartItems);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (cartItems.length > 0) {
        const message =
          "You have items in your cart. Are you sure you want to leave?";
        event.returnValue = message; // Set the custom message here
        return message; // For older browsers
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [cartItems]);

  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Main;
