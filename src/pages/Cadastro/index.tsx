import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import { Container, FormCadastro } from "./styles";

export function Cadastro() {
  const navigate = useNavigate();
  
  const { products, addProduct } = useProducts();

  const [nameProduct, setNameProduct] = useState("");
  const [descriptionProduct, setDescriptionProduct] = useState("");
  const [imageURLProduct, setImageURLProduct] = useState("");

  function addProductInList(event: any) {
    event?.preventDefault();

    // Criando um objeto no formato do produto
    const newProduct = {
      id: products.length + 1,
      name: nameProduct,
      description: descriptionProduct,
      image_url: imageURLProduct
    };

    // Adicionando o novo produto na lista de produtos
    addProduct(newProduct);

    // Ir para a página principal
    navigate("/");
  }

  return(
    <Container>
      <h1>Cadastro</h1>
      <FormCadastro>
        <label>Título</label>
        <input type="text" onChange={e => setNameProduct(e.target.value)}/>
        <label>Descrição</label>
        <input type="text" onChange={e => setDescriptionProduct(e.target.value)}/>
        <label>Imagem</label>
        <input type="text" onChange={e => setImageURLProduct(e.target.value)}/>
        <button onClick={addProductInList}>Salvar</button>
      </FormCadastro>
    </Container>
  );
}