import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import { addCart, deleteCart, getCart, updateCart } from "../api/product";

export default function useCarts() {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  // 장바구니 목록
  const cartsQuery = useQuery({
    queryKey: ["carts", user.uid || ""],
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

  // 장바구니 추가
  const addCarts = useMutation({
    mutationFn: async (data) => {
      await addCart(user.uid, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["carts", user.uid]);
      return "장바구니에 등록되었습니다.";
    },
    onError: (err) => console.error(err),
  });

  // 장바구니 추가
  const updateCarts = useMutation({
    mutationFn: async (data) => {
      await updateCart(user.uid, data);
    },
    onSuccess: () => queryClient.invalidateQueries(["carts", user.uid]),
    onError: (err) => console.error(err),
  });

  // 장바구니 삭제
  const deleteCarts = useMutation({
    mutationFn: async (data) => {
      await deleteCart(user.uid, data);
    },
    onSuccess: () => queryClient.invalidateQueries(["carts", user.uid]),
    onError: (err) => console.error(err),
  });

  return { cartsQuery, addCarts, updateCarts, deleteCarts };
}
