import { NavLink } from "react-router-dom";
import Container from "../components/Container/Container";
import { HomePageStyles } from "./pagestyles/HomePageStyles.styled";

const HomePage = () => {
  return (
    <HomePageStyles>
      <Container>
        <div className="banner-container">
          <div className="text-container">
            <h1>
              Welcome to <NavLink to="/">CARенда</NavLink>
            </h1>
            <h2>
              You can go to our{" "}
              <NavLink className="link" to="/catalog">
                catalogue
              </NavLink>{" "}
              to choose the right car for you, or{" "}
              <a className="link" href="tel:+380730000000">
                contact our consultant
              </a>
              .
            </h2>
          </div>
        </div>
      </Container>
    </HomePageStyles>
  );
};

export default HomePage;
