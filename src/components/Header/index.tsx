import { HeaderProject } from "./styles";

import { Link } from "react-router-dom";

export function Header() {
  return (
    <HeaderProject>
      <ul>
        <li>
          <Link to="/">Listagem</Link>
        </li>
        <li>
          <Link to="/Cadastro">Cadastro</Link>
        </li>
      </ul>
    </HeaderProject>
  )
}