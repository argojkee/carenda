import { FooterStyles } from "./FooterStyles.styled";
import Container from "../Container/Container";
const Footer = () => {
  return (
    <FooterStyles>
      <Container>
        <div className="footer-container">
          <p>&#169; All rights reserved</p>
          <div className="contacts">
            <p>
              Call us: <a href="tel:+380730000000">+380730000000</a>
            </p>
          </div>
        </div>
      </Container>
    </FooterStyles>
  );
};

export default Footer;
