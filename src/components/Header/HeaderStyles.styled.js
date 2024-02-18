import styled from "styled-components";

export const HeaderStyles = styled.header`
  border: 1px solid var(--secondary-decoration-text-color);
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  border-top: none;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 3px 6px rgba(0, 0, 255, 0.5);
  background-color: var(--primary-bg-color);
  .header-container {
    display: flex;
    justify-content: space-between;
    padding-top: 16px;
    padding-bottom: 16px;
  }
  .active {
    color: var(--primary-link-color);
  }
  .logo {
    color: var(--secondary-link-color);
    display: flex;
    align-items: center;
    column-gap: 8px;
  }

  .logo:hover .logo-icon {
    fill: tomato;
  }

  .logo-icon {
    width: 60px;
    height: 60px;
    fill: yellow;
    transition: fill var(--main-cubic);
  }

  nav {
    display: flex;
    column-gap: 10px;
    color: var(--third-link-color);
  }

  a {
    color: var(--third-link-color);
    text-decoration: none;
    transition: color var(--main-cubic);
    font-weight: 500;
    font-size: 24px;
    line-height: 1.5;
  }

  a:hover,
  a:focus {
    color: var(--primary-hover-link-color);
  }
`;
