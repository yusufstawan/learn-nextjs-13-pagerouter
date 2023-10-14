import ProductView from "@/views/Product";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/swr/fetcher";

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [products, setProducts] = useState([]);
  const { push } = useRouter();

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, []);

  const { data, error, isLoading } = useSWR("api/product", fetcher);

  // useEffect(() => {
  //   fetch("api/product")
  //     .then((res) => res.json())
  //     .then((res) => setProducts(res.data));
  // }, []);

  return (
    <div>
      <ProductView products={isLoading ? [] : (data.data as any)} />
    </div>
  );
};

export default ProductPage;
