import { useState } from "react";
import RSButton from "../components/RS/RSButton";
import RSInput from "../components/RS/RSInput";

export default function NewProduct() {
  const [img, setImg] = useState("");
  const handleUpload = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImg(reader.result);
    };
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="text-center pb-10 border-b text-4xl mb-10 font-semibold text-blue-500">
        새로운 제품 등록
      </div>
      {img && <img src={img} alt="new product image" />}
      <RSInput type="file" placeholder="제품명" onChange={handleUpload} />
      <RSInput type="text" placeholder="제품명" />
      <RSInput type="number" placeholder="가격" />
      <RSInput type="text" placeholder="카테고리" />
      <RSInput type="text" placeholder="제품설명" />
      <RSInput type="text" placeholder="사이즈 옵션(콤마(,)로 구분)" />
      <RSButton className="py-5 text-4xl">제품 등록하기</RSButton>
    </div>
  );
}
