import { useState } from "react";
import RSButton from "../components/RS/RSButton";
import RSInput from "../components/RS/RSInput";
import Product from "../api/product";
import { useNavigate } from "react-router-dom";

const url = "https://api.cloudinary.com/v1_1/drag0fgme/image/upload";
const initNew = {
  title: "",
  price: "",
  category: "",
  desc: "",
  sizes: "",
};
export default function NewProduct() {
  const navigate = useNavigate();
  const [img, setImg] = useState("");
  const [newProduct, setNewProduct] = useState(initNew);

  const handleUpload = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImg(reader.result);
    };
  };
  const handleChange = (e) => {
    setNewProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const product = new Product();

  const handleCreate = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", img);
    formData.append("upload_preset", "y2cbeyrc");

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        return response.text();
      })
      .then(async (data) => {
        const image = JSON.parse(data).secure_url;
        const id = await product.writeProduct({ image, ...newProduct });
        setNewProduct(initNew);
        navigate(`/product/${id}`);
      });
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleCreate}>
      <div className="text-center pb-10 border-b text-4xl mb-10 font-semibold text-blue-500">
        새로운 제품 등록
      </div>
      {img && <img src={img} alt="new product image" />}
      <RSInput type="file" placeholder="제품명" onChange={handleUpload} />
      <RSInput
        type="text"
        placeholder="제품명"
        name="title"
        value={newProduct.title}
        onChange={handleChange}
      />
      <RSInput
        type="number"
        placeholder="가격"
        name="price"
        value={newProduct.price}
        onChange={handleChange}
      />
      <RSInput
        type="text"
        placeholder="카테고리"
        name="category"
        value={newProduct.category}
        onChange={handleChange}
      />
      <RSInput
        type="text"
        placeholder="제품설명"
        name="desc"
        value={newProduct.desc}
        onChange={handleChange}
      />
      <RSInput
        type="text"
        placeholder="사이즈 옵션(콤마(,)로 구분)"
        name="sizes"
        value={newProduct.sizes}
        onChange={handleChange}
      />
      <RSButton className="py-5 text-4xl">제품 등록하기</RSButton>
    </form>
  );
}
