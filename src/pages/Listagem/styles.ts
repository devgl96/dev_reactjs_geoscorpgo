import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 3rem;
  }

  input {
    width: 550px;
    height: 50px;

    border-radius: 5px;

    padding-left: 1rem;

    background-image: url("https://images.emojiterra.com/google/android-11/512px/1f50e.png");
    background-position: 520px 10px;
    background-repeat: no-repeat;
    background-size: 30px 30px;
  }
`;

export const ListProducts = styled.div`
  display: grid;
  grid-template-columns: 250px 250px 250px;
  gap: 1rem;

  padding: 1rem;
  margin: 1rem auto;
`;