import { HeaderProject } from "./styles";

import { Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();

  return (
    <HeaderProject>
      <img src="https://cdn.pixabay.com/photo/2012/04/13/11/53/glass-32068_960_720.png" alt="glass champagne flute" />
      <ul>
        <li className={location.pathname === "/" ? "activePage" : ""}>
          <Link to="/">Listagem</Link>
        </li>
        <li className={location.pathname === "/Cadastro" ? "activePage" : ""}>
          <Link to="/Cadastro">Cadastro</Link>
        </li>
      </ul>
    </HeaderProject>
  )
}