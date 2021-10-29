import * as S from "./style";
import { ReactNode } from "react";
import { MainContainer } from "src/components/Container/style";

interface IProps {
  children: ReactNode;
}

const BaseLayout = ({ children }: IProps) => {
  return (
    <S.Wrapper>
      <MainContainer>
        <S.Header id="id-global-header">NAL Test</S.Header>
        <S.Main>{children}</S.Main>
        {/* <S.Footer id="id-global-footer">Footer</S.Footer> */}
      </MainContainer>
    </S.Wrapper>
  );
};

export default BaseLayout;
