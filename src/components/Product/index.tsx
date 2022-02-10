import { useProducts } from "../../hooks/useProducts";
import { Container, Content } from "./styles";

interface ProductProps {
  id: number;
  name: string;
  description: string;
  image_url: string;
};

export function Product({id, name, description, image_url}: ProductProps) {
  const { deleteProduct } = useProducts();

  return (
    <Container>
      <span onClick={() => deleteProduct(id)}>x</span>
      <Content>
        <img src={image_url} alt={name} />
        <h3>{name}</h3>
        <p>{description}</p>
      </Content>
    </Container>
  )
}