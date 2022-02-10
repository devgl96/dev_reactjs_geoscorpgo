import styled from "styled-components";

export const Container = styled.div`
  margin: 0; 

  position: relative; 

  width: 250px;
  height: 320px;

  background: var(--third-color);
  border-radius: 5px;

  span {
    font-size: 1.5rem;
    font-family: sans-serif;
    font-weight: normal;
    color: var(--primary-color);
    
    position: absolute;

    right: 0.5rem;
    top: 0;

    cursor: pointer;

    &:hover {
      color: #FF0000;
    }
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
    color:  var(--primary-color);
    margin: 1.5rem 0.5rem 0;

    text-align: center;
  }
  
  p {
    color:  var(--primary-color);
    text-align: center;

    font-size: 0.9rem;

    margin: 0.5rem 1rem;

    /* Código para criar reticências no final do texto */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 16px; 
    max-height: 50px;     
      
    -webkit-line-clamp: 3; 
    -webkit-box-orient: vertical;
  }
`;