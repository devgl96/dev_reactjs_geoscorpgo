import styled from "styled-components";

export const HeaderProject = styled.header`
  background: var(--primary-color);

  height: 5rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  img {
    background: #FFF;
    border-radius: 100%;

    width: 40px;
    height: 40px;

    margin-left: 10rem;
  }
  
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
          color: var(--fifth-color);
        }
      }

      &.activePage {
        a {
          padding-bottom: 2px;
          border-bottom: 2px solid var(--fifth-color);
          color: var(--fifth-color);
        }
      }
    }
  }
`;
