import { useEffect, useState } from "react";
import RSButton from "../components/RS/RSButton";
import RSInput from "../components/RS/RSInput";
import useProducts from "../hooks/useProducts";

const initNew = {
  title: "",
  price: "",
  category: "",
  desc: "",
  sizes: "",
};

export default function NewProduct() {
  const [img, setImg] = useState("");
  const [product, setProduct] = useState(initNew);

  useEffect(() => {
    return () => {
      setImg("");
      setProduct(initNew);
    };
  }, []);

  const {
    addProduct: { isPending, mutate },
  } = useProducts();

  const handleUpload = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImg(reader.result);
    };
  };

  const handleChange = (e) => {
    setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(product);
  };

  const handleCreate = (e) => {
    e.preventDefault();
    mutate({ img, product });
  };

  return (
    <section>
      <h2 className="text-center pb-10 border-b text-4xl mb-10 font-semibold text-blue-500">
        새로운 제품 등록
      </h2>
      <form className="flex flex-col gap-5 p-5" onSubmit={handleCreate}>
        {img && (
          <img className="w-96 mx-auto" src={img} alt="new product image" />
        )}
        <RSInput
          type="file"
          accept="image/*"
          placeholder="제품 이미지"
          onChange={handleUpload}
          required
        />
        <RSInput
          type="text"
          placeholder="제품명"
          name="title"
          value={product.title}
          onChange={handleChange}
          required
        />
        <RSInput
          type="number"
          placeholder="가격"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
        />
        <RSInput
          type="text"
          placeholder="카테고리"
          name="category"
          value={product.category}
          onChange={handleChange}
          required
        />
        <RSInput
          type="text"
          placeholder="제품설명"
          name="desc"
          value={product.desc}
          onChange={handleChange}
          required
        />
        <RSInput
          type="text"
          placeholder="사이즈 옵션(콤마(,)로 구분)"
          name="sizes"
          value={product.sizes}
          onChange={handleChange}
          required
        />
        <RSButton className="py-5 text-4xl" disabled={isPending}>
          {!isPending ? "제품 등록하기" : "제품 등록 중..."}
        </RSButton>
      </form>
    </section>
  );
}
