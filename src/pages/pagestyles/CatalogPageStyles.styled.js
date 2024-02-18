import styled from "styled-components";

export const CatalogPageStyles = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
  min-height: 85vh;

  .load-more-btn {
    background-color: transparent;
    border: none;
    color: var(--btn-bg-color);
    text-decoration: underline;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: 100px;
    transition: color var(--main-cubic);
  }

  .load-more-btn:hover,
  .load-more-btn:focus {
    color: var(--btn-hover-bg-color);
  }
  .main-spinner-container {
    width: 100%;
    min-height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
