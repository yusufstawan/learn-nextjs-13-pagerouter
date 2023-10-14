import ProductView from "@/views/Product";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [products, setProducts] = useState([]);
  const { push } = useRouter();

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, []);

  useEffect(() => {
    fetch("api/product")
      .then((res) => res.json())
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      <ProductView products={products as any} />
    </div>
  );
};

export default ProductPage;
