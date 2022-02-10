import styled from "styled-components";

export const HeaderProject = styled.header`
  background: #333;

  height: 5rem;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  
  ul {
    padding: 0.5rem 5rem;

    display: flex; 
    
    gap: 3rem;

    list-style-type: none;

    li {

      a {
        text-decoration: none;
        color: #fff;

        &:hover {
          color: #143434;
        }
      }
    }
  }

`;
