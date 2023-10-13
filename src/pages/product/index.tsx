import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type productType = {
  id: number;
  name: string;
  price: number;
  size: string;
};

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
      <h1>Product Page</h1>
      {products.map((product: productType) => (
        <div key={product.id}>
          <div>{product.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
