import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getProduct,
  getProducts,
  imageUpload,
  writeProduct,
} from "../api/product";
import { useNavigate } from "react-router-dom";

export default function useProducts(productId) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // 제품 리스트
  const productsQuery = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 5,
  });

  // 제품 상세 데이터
  const productQuery = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProduct(productId),
    staleTime: 1000 * 60 * 5,
  });

  // 신규 제품 추가
  const addProduct = useMutation({
    mutationFn: async ({ img, product }) => {
      const image = await imageUpload(img);
      const id = await writeProduct({ image, ...product });
      return id;
    },
    onSuccess: (data) => {
      // 데이터 등록에 성공하면, 제품 리스트 캐시 초기화.
      queryClient.invalidateQueries(["products"]);
      navigate(`/product/${data}`);
    },
    onError: (err) => console.error(err),
  });

  return { productsQuery, productQuery, addProduct };
}
