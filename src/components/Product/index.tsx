import { Container, Content } from "./styles";

export function Product() {
  return (
    <Container>
      <span>x</span>
      <Content>
        <img src="https://source.unsplash.com/random" alt="Random Image" />
        <h3>Title</h3>
        <p>Description</p>
      </Content>
    </Container>
  )
}