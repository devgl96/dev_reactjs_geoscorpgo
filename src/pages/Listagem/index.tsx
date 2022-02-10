import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Product } from "../../components/Product";

interface Product {
  id: number;
  name: string;
  description: string;
  image_url: string;
};

export function Listagem() {
  // Transformar em variável de ambiente
  // const URL_PUNK_API = "https://api.punkapi.com/v2/";
  const [products, setProducts] = useState<Product[]>([]);
  const [searchProduct, setSearchProduct] = useState("");

  useEffect(() => {
    async function getInfo() {
      await axios
        .get("https://api.punkapi.com/v2/beers")
        .then((response) => setProducts(response.data));
      // console.log("getProductsInfo: ", getProductsInfo);
    }

    getInfo();
  }, [products]);

  // console.log("Products: ", products);

  // console.log("SearchInput: ", searchProduct);

  return (
    <>
      <div>
        <h1>Catálogo</h1>
        <input
          type="text"
          placeholder="Faça a sua pesquisa aqui"
          onChange={(e) => setSearchProduct(e.target.value)}
        />
        <Product />
        {products.map((product) => {
          if (
            product.name.toUpperCase().includes(searchProduct.toUpperCase()) ||
            product.description
              .toUpperCase()
              .includes(searchProduct.toUpperCase())
          ) {
            return (
              <div key={product.id}>
                <img
                  width="150"
                  height="150"
                  src={product.image_url}
                  alt={product.name}
                />
                <h1>{product.name}</h1>
                <p>{product.description}</p>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}