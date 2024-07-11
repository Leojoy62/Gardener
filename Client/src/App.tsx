import { useEffect } from "react";

import { useAppSelector } from "./redux/hooks";

import { selectCartItems } from "./redux/features/cartSlice";

const App = () => {
  const cartItems = useAppSelector(selectCartItems);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (cartItems.length > 0) {
        const message =
          "You have items in your cart. Are you sure you want to leave?";
        event.returnValue = message; // Standard method for most browsers
        return message; // For older browsers
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [cartItems]);

  return <div>{/* Your application content */}</div>;
};

export default App;
