'use client'
import { useState } from "react";
import * as S from "./styles";

export type HeaderProps = {
  editState: boolean;
};

export const Header = ({ editState  }: HeaderProps) => {

  const handleEdit = () => {
    console.log(editState)
  }

  return (
    <S.Wrapper>
      <h1>Armazem de Livros</h1>
      <S.ButtonContainer>
        <button onClick={handleEdit}>{editState ? 'Sair da Edição' :'Editar Livros'}</button>
        <button>Adicionar Livros</button>
      </S.ButtonContainer>
    </S.Wrapper>
  );
};
