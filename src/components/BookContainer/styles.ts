import { css, styled } from 'styled-components';


export const Container = styled.main`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    margin: 2rem auto;
    padding-top: 5rem;
  `}
`;

export const BookContainer = styled.div`
  ${() => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  `}
`;