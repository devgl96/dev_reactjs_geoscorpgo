import { useState } from "react";

import { Product } from "../../components/Product";

import { useProducts } from "../../hooks/useProducts";

import { Container, ListProducts } from "./styles";

export function Listagem() {
  const {products} = useProducts();
  
  const [searchProduct, setSearchProduct] = useState("");
  
  return (
    <>
      <Container>
        <h1>Listagem</h1>
        <input
          type="text"
          placeholder="Pesquisar"
          onChange={(e) => setSearchProduct(e.target.value)}
        />
        
        <ListProducts>
          {products.map((product) => {
            if (
              product.name.toUpperCase().includes(searchProduct.toUpperCase()) ||
              product.description
                .toUpperCase()
                .includes(searchProduct.toUpperCase())
            ) {
              return (
                <Product 
                  key={product.id}
                  id={product.id}
                  image_url={product.image_url}
                  name={product.name}
                  description={product.description}
                />
              );
            }
          })}
        </ListProducts>
      </Container>
    </>
  );
}