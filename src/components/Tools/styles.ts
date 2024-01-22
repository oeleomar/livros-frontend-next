import { styled } from 'styled-components';

export const ToolsContainer = styled.div`
  display: flex;
  position: absolute;
  top: 5%;
  left: 70%;
  flex-wrap: nowrap;
  justify-content: end;
  gap: 1rem;

  i {
    color: #64b7cc;
    font-size: 1.5rem;
    cursor: pointer;
  }

  i.bx-trash {
    color: red;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: end;
  gap: 1rem;

  button {
    width: 150px;
    height: 50px;
    border: none;
    border-radius: 5px;
    background-color: #64b7cc;
    color: #fff;
    font-size: 1.2rem;
    cursor: pointer;
  }

  button.delete {
    background-color: red;
  }

  button:hover {
    background-color: #5aa5b9;
  }
`;