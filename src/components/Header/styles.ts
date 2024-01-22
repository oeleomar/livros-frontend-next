import { Inter } from 'next/font/google';
import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 2rem;
    border-bottom: 1px solid #eaeaea;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    h1 {
      margin: 0;
    }
  `}
`;

export const ButtonContainer = styled.div`
  ${() => css`
    display: flex;
    gap: 1rem;
    
    button {
      transition: 0.3s;
      padding: 10px 20px;
      background-color: #64b7cc;
      color: #fff;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      
      &:hover {
      background-color: #a5befa;
    }
    }
  `}
`;