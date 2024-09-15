import styled from '@emotion/styled';
import InnerLayout from '@src/InnerLayout';
import Img25 from './assets/imgs/img25.jpg';
import Img26 from './assets/imgs/img26.jpg';
import Img27 from './assets/imgs/img27.jpg';
import Img28 from './assets/imgs/img28.jpg';
import { css } from '@emotion/react';
import Accordion from '@src/Accordion';

const MainHost = () => {
  return (
    <>
      <InnerLayout layout="full" className="line">
        <StyledImgWrap>
          <img src={Img25} alt="" />
          <img src={Img26} alt="" />
          <img src={Img27} alt="" />
        </StyledImgWrap>
        <StyledText>
          <h2>마음을 전하실 곳</h2>
          <p>필요하신 분들을 위해 계좌를 안내드립니다.</p>
          <p>너그러운 이해와 양해를 바라며</p>
          <p>보내주신 관심과 사랑에 감사드립니다.</p>
        </StyledText>
        <StyledHostWrap>
          <Accordion />
        </StyledHostWrap>
      </InnerLayout>
      <StyledImg>
        <img src={Img28} alt="" />
      </StyledImg>
    </>
  );
};

export default MainHost;

const StyledHostWrap = styled.div`
  width: calc(100% - 32px);
  margin: 0 auto;
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
  ${({ theme }) => theme.typography.content2}
  h2 {
    ${({ theme }) => css`
      color: ${theme.color.brownText};
      ${theme.typography.content1Bold}
    `}
  }
`;

const StyledImgWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  margin-bottom: 64px;
  width: 100%;
  min-height: 169px;
  background-color: ${({ theme }) => theme.color.gray0};
  img {
    width: calc(33.3333% - 4px);
  }
`;

const StyledImg = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: auto;
  min-height: 500px;
  background-color: ${({ theme }) => theme.color.gray0};
  margin-bottom: 64px;
  padding-top: 64px;
  img {
    width: 100%;
  }
`;
