import Container from "../Container/Container";
import { HeaderStyles } from "./HeaderStyles.styled";
import { NavLink } from "react-router-dom";
import { ReactComponent as LogoSvg } from "../../icons/logo.svg";

const Header = () => {
  return (
    <HeaderStyles>
      <Container>
        <div className="header-container">
          <NavLink to="/" className="logo">
            <LogoSvg className="logo-icon" />
            CARенда
          </NavLink>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/catalog">Catalog</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
          </nav>
        </div>
      </Container>
    </HeaderStyles>
  );
};

export default Header;
