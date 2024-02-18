import styled from "styled-components";

export const ModalStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: rgba(18, 20, 23, 0.5);
  transition: var(--main-cubic);

  .modal {
    position: relative;
    overflow: auto;
    max-height: 95%;
    position: absolute;
    background-color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    overflow: auto;
  }

  .modal::-webkit-scrollbar {
    width: 8px;
  }

  .modal::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 8px;
  }

  .modal::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  .close-btn {
    cursor: pointer;
    position: absolute;
    right: 16px;
    top: 16px;
    background-color: transparent;
    transition: var(--main-cubic);
    border: none;
  }

  .close-icon {
    width: 24px;
    height: 24px;
    stroke: var(--primary-text-color);
    transition: stroke var(--main-cubic);
  }

  .close-btn:hover .close-icon,
  .close-btn:focus .close-icon {
    stroke: var(--btn-hover-bg-color);
  }
`;
