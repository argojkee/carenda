import styled from "styled-components";

export const FooterStyles = styled.footer`
  border: 1px solid blue;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 -3px 6px rgba(0, 0, 255, 0.5);
  background-color: var(--primary-bg-color);
  border-bottom: none;

  .footer-container {
    padding-top: 16px;
    padding-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p {
    color: var(--light-text-color);
  }

  a {
    color: var(--secondary-link-color);
    text-decoration: none;
  }

  a,
  p {
    font-weight: 500;
    font-size: 20px;
    line-height: 1.5;
  }
  a {
    transition: color var(--main-cubic);
  }

  a:hover,
  a:focus {
    color: var(--primary-hover-link-color);
  }
`;
