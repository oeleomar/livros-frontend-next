import * as Styled from "./styles";

export type MenuProps = {
  title?: string;
};

export const Menu = ({ title }: MenuProps) => {
  return (
    <Styled.Wrapper>
      <h1>Oi</h1>
      <p>{title}</p>
    </Styled.Wrapper>
  );
};
