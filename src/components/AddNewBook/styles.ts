import styled, { css } from "styled-components";

export const Form = styled.form`
  ${() => css`
    display: flex;
    flex-direction: column;

    label {
      font-size: 1rem;
      margin-bottom: 5px;
    }

    input {
      margin-bottom: 20px;
      padding: 3px 10px;
    }

    button {
      padding: 10px 20px;
      background-color: #64b7cc;
      color: #fff;
      border-radius: 5px;
      border: none;
      cursor: pointer;

      &:hover {
        background-color: #5aa5b9;
      }
    }
  `}
`;

export const Error = styled.span`
  ${() => css`
    font-size: 0.8rem;
    color: red;
    margin-bottom: 5px;
  `}
`;