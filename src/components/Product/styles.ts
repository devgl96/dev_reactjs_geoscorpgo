import styled from "styled-components";

export const Container = styled.div`
  position: relative; 

  width: 250px;
  height: 320px;

  background: #303030;
  border-radius: 5px;

  span {
    font-size: 1.5rem;
    font-family: sans-serif;
    font-weight: normal;
    color: #FFF;
    
    position: absolute;

    right: 0.5rem;
    top: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: sans-serif;

  padding: 2rem 0;

  img {
    width: 150px; 
    height: 150px; 
  }

  h3 {
    color: #FFF;
    margin: 1.5rem 0 0;
  }

  p {
    color: #FFF;
  }
`;