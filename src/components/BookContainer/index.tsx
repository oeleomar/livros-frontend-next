'use client'
import * as S from './styles'

export type BookContainerProps = {children: React.ReactNode};

export const BookContainer = ({children}: BookContainerProps) => {
  return (
    <S.Container>
      <S.BookContainer>
        {children}
      </S.BookContainer>
    </S.Container>
  );
};
