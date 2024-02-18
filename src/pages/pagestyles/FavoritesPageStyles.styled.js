import styled from "styled-components";

export const FavoritesPageStyles = styled.section`
  padding-top: 10px;
  padding-bottom: 10px;
  min-height: 85vh;

  h1 {
    text-align: center;
    font-size: 40px;
    line-height: 1.5;
    color: var(--third-decoration-text-color);
  }

  .content-container {
    padding-top: 40px;
    padding-bottom: 40px;
    border-radius: 14px;
    padding-left: 16px;
    padding-right: 16px;
    background-color: var(--secondary-bg-color);
  }

  .content-container li {
    border: 1px solid black;
    border-radius: 12px;
    padding: 4px;
    background-color: var(--third-bg-color);
  }
  p {
    text-align: center;
    color: var(--error-text-color);
    margin-top: 50px;
  }

  a {
    color: var(--third-link-color);
    text-decoration: none;
    transition: color var(--main-cubic);
  }

  a:hover,
  a:focus {
    color: var(--secondary-hover-link-color);
  }
`;
