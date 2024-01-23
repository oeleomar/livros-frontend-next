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
    position: fixed;
    z-index: 10;
    background-color: #fff;
    top: 0;
    left: 0;
    right: 0;
    
    h1 {
      margin: 0;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      padding: 10px;

      h1 {
        font-size: 2rem;
        margin-bottom: 1rem;
      }
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