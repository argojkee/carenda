import styled from "styled-components";

export const HomePageStyles = styled.section`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  min-height: 85vh;
  .banner-container {
    background-image: url("https://cdn.economybookings.com/_next/static/images/img/background25052022-d45e5ae38b67dfcf3d62bafed0538928.png?w=1920&q=100");
    background-size: cover;
    background-repeat: no-repeat;
    height: 600px;
    display: flex;
    padding-top: 50px;
  }

  h1 {
    font-size: 40px;

    margin-bottom: 20px;
    line-height: 2;
  }

  h1 a {
    color: var(--secondary-link-color);
  }

  .text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    color: var(--light-text-color);
  }

  a {
    color: var(--primary-link-color);
    text-decoration: none;
    transition: color var(--main-cubic), box-shadow var(--main-cubic);
  }

  .link:hover,
  .link:focus {
    color: var(--secondary-hover-link-color);
    -webkit-box-shadow: 0px 16px 38px -11px rgba(231, 246, 0, 0.5);
    -moz-box-shadow: 0px 16px 38px -11px rgba(231, 246, 0, 0.5);
    box-shadow: 0px 16px 38px -11px rgba(231, 246, 0, 0.5);
  }
`;
