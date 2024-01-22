import * as S from './styles';

export type FooterProps = {
  data: any;
  setData: (data: any) => void;
};

export const Footer = ({data, setData}: FooterProps) => {
  if(!data) return null;

  const handleNextPage = async () => {
    try {
      const response = await fetch(data.links.next);
      const dataResponse = await response.json();
      setData(dataResponse);
    }catch (error) {
      alert("Não foi possível buscar as informações, tente novamente mais tarde")
    }
  }

  const handlePreviousPage = async () => {
    try {
      const response = await fetch(data.links.previous);
      const dataResponse = await response.json();
      setData(dataResponse);
    }catch (error) {
      alert("Não foi possível buscar as informações, tente novamente mais tarde")
    }
  }
  

  return (
    <S.Footer>
      <S.TotalPages>
        {data.meta.totalPages} {data.meta.totalPages > 1 ? 'páginas' : 'página'}
      </S.TotalPages>
      <S.ActualPage>
        {data.meta.currentPage || ""} de {data.meta.totalPages|| ""}
      </S.ActualPage>
      <S.ButtonContainer>
        {data.meta.totalPages < 0 ? null : (
          <>
            <button disabled={data.meta.currentPage === 1 ? true : false} onClick={handlePreviousPage}>Anterior</button>
            <button disabled={data.meta.currentPage === data.meta.totalPages ? true : false} onClick={handleNextPage}>Próximo</button>
          </>
        )}
      </S.ButtonContainer>
    </S.Footer>
  );
}
