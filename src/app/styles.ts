import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const Container = styled.main`
  ${({ theme }) => css`
    width: 80%;
    max-width: 80rem;
    background-color: red;
  `}
`;
