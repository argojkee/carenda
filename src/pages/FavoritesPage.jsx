import Container from "../components/Container/Container";
import CarsList from "../components/CarsList/CarsList";
import { getFavoritesCars } from "../redux/favorites/favoritesSelectors";
import { useSelector } from "react-redux";
import { FavoritesPageStyles } from "./pagestyles/FavoritesPageStyles.styled";
import { NavLink } from "react-router-dom";

const FavoritesPage = () => {
  const favoriteCars = useSelector(getFavoritesCars);
  return (
    <FavoritesPageStyles>
      <Container>
        <div className="content-container">
          <h1>Favorites cars</h1>
          {favoriteCars && favoriteCars.length === 0 && (
            <p>
              Sorry, but you haven't any favorite car. Please, go to{" "}
              <NavLink to="/catalog">our catalog,</NavLink> and select your
              dreamcar {"=)"}
            </p>
          )}
          {favoriteCars && favoriteCars.length > 0 && (
            <CarsList cars={favoriteCars} />
          )}
        </div>
      </Container>
    </FavoritesPageStyles>
  );
};

export default FavoritesPage;
