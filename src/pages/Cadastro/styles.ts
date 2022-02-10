import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  

  h1 {
    font-size: 3rem;
    text-align: center;
  }
`;

export const FormCadastro = styled.form`
  position: relative;
  label {
    display: flex;

    margin-top: 0.5rem;
    font-family: sans-serif;
  }

  input {
    width: 550px;
    height: 50px;

    border-radius: 5px;

    padding-left: 1rem;
  }

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 150px;
    height: 50px;

    margin-top: 1rem;

    position: absolute;

    right: 0;

    background: var(--primary-color);
    color: #FFF;

    border-radius: 5px;

    cursor: pointer;

    &:hover {
      background: var(--fifth-color);
    }
  }
  
`;
