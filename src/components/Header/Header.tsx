'use client'
import * as S from "./styles";

export type HeaderProps = {
  editState: boolean;
  setEditState: (editState: boolean) => void;
  setIsOpen: (modalIsOpen: boolean) => void;
};

export const Header = ({ editState, setEditState, setIsOpen  }: HeaderProps) => {

  const handleEdit = () => {
    setEditState(!editState);
  }

  return (
    <S.Wrapper>
      <h1>Armazem de Livros</h1>
      <S.ButtonContainer>
        <button onClick={handleEdit}>{editState ? 'Sair da Edição' :'Editar Livros'}</button>
        <button onClick={() => setIsOpen(true)}>Adicionar Livros</button>
      </S.ButtonContainer>
    </S.Wrapper>
  );
};
