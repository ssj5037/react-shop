import { createContext } from "react";
import { useAuth } from "../hooks/useAuth";
import { addCart, getCart, deleteCart, updateCart } from "../api/product";
import { useQuery } from "@tanstack/react-query";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const { isLoading, refetch, data } = useQuery({
    queryKey: ["carts"],
    queryFn: () => getCart(user.uid),
    select: (data) => {
      const totalPrice = data.reduce(
        (prev, cur) => prev + Number(cur.price) * cur.count,
        0
      );
      return {
        carts: data,
        totalPrice,
      };
    },
    enabled: !!user,
    initialData: {
      carts: [],
      totalPrice: 0,
    },
  });

  return (
    <CartContext.Provider
      value={{
        isLoading,
        data,
        refetch,
        addCart,
        deleteCart,
        updateCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
