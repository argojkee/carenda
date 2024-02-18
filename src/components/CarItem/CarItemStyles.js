import styled from "styled-components";

export const CarItemStyles = styled.li`
  width: calc((100% - 87px) / 4);
  display: flex;
  flex-direction: column;
  align-items: stretch;

  .img-container {
    max-width: 100%;
    margin-bottom: 14px;
    position: relative;
  }

  .img-container img {
    width: 100%;
    height: 268px;
    background: linear-gradient(
      var(--secondary-text-color),
      rgba(18, 20, 23, 0)
    );
    border-radius: 14px;
  }

  .favorite-btn {
    background-color: transparent;
    border: none;
    position: absolute;
    top: 14px;
    right: 14px;
  }

  .info-container {
    margin-bottom: 28px;
  }

  .title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  .title-container h2,
  .title-container p {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: var(--primary-text-color);
  }

  .title-container span {
    color: var(--decoration-text-color);
  }

  .more-info-container {
    font-size: 12px;
    line-height: 1.5;
    color: var(--secondary-text-color);
  }

  .more-info-container span {
    margin-right: 6px;
  }

  .more-info-container span:not(:nth-child(4n + 1)) {
    margin-left: 6px;
  }

  .learn-more-btn {
    margin-top: auto;
    background-color: var(--btn-bg-color);
    border-radius: 8px;
    color: var(--btn-text-color);
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    padding-top: 12px;
    padding-bottom: 12px;
    border: none;
    transition: background-color var(--main-cubic);
  }

  .learn-more-btn:hover,
  .learn-more-btn:focus {
    background-color: var(--btn-hover-bg-color);
  }
`;
