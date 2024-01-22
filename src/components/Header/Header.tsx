'use client'
import * as S from "./styles";

export type HeaderProps = {
  editState: boolean;
  setEditState: (editState: boolean) => void;
};

export const Header = ({ editState, setEditState  }: HeaderProps) => {

  const handleEdit = () => {
    console.log('cliquei', editState)
    setEditState(!editState);
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
