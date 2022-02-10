import axios from "axios";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

// Tipagem do Produto
interface Product {
  id: number;
  name: string;
  description: string;
  image_url: string;
};

// Tipagem children para identificar os Nós Filhos
interface ProductsProviderProps {
  children: ReactNode;
}

// Tipagem do Contexto do Produto
interface ProductsContextData {
  products: Product[];
  deleteProduct: (idProductDeleted: number) => void;
  addProduct: (productAdded: Product) => void;
}

const ProductsContext = createContext<ProductsContextData>({} as ProductsContextData);

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  
  // Pegar produtos da API
  useEffect(() => {
    async function getInfo() {
      await axios
        .get("https://api.punkapi.com/v2/beers")
        .then((response) => setProducts(response.data));
      // console.log("getProductsInfo: ", getProductsInfo);
    }

    getInfo();
  }, []);

  // Apagar produto da lista de produtos
  function deleteProduct(idProductDeleted: number) {
    const newListProducts = products.filter(product => idProductDeleted !== product.id);

    setProducts(newListProducts);
  }

  // Adicionar produto a lista de produtos
  function addProduct(productAdded: Product) {
    const newListProducts = [
      ...products, 
      productAdded
    ];

    setProducts(newListProducts);
  }

  return(
    <ProductsContext.Provider value={{
      products, 
      deleteProduct, 
      addProduct
    }}>
      {children}
    </ProductsContext.Provider>
  )
}

// Hook para poder utilizar o Contexto 
export function useProducts() {
  const context = useContext(ProductsContext);

  return context;
}