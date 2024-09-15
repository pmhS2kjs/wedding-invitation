import { css } from '@emotion/react';
import styled from '@emotion/styled';
import InnerLayout from '@src/InnerLayout';

const MainContents = () => {
  return (
    <InnerLayout className="line">
      <StyledText>
        서로 다른 길을 걷던 두 사람이 <br />
        이제 함께 한곳을 바라보며 걸어가려 합니다. <br />
        그 첫걸음을 내딛는 자리에 <br />
        함께 하시어 축복과 격려해 주시길 소망합니다.
      </StyledText>
      <StyledIntroText>
        <IntroBlock>
          <p>
            김정재
            <br />
            이지선
          </p>
          <span>의 장남</span> 준성
        </IntroBlock>
        <IntroBlock>
          <p>
            박인기
            <br /> 이영선
          </p>
          <span>의 차녀</span> 민혜
        </IntroBlock>
      </StyledIntroText>
    </InnerLayout>
  );
};

export default MainContents;

// 공통 스타일 정의
const commonFontStyles = css`
  font-family: 'GowunBatang-Regular', Arial, Helvetica, sans-serif,
    'Apple SD Gothic Neo', -apple-system, 'Segoe UI', 'Oxygen';
`;

const StyledText = styled.p`
  ${commonFontStyles}
  line-height: 3.5;
  margin-bottom: 32px;
  @media (max-width: 320px) {
    ${({ theme }) => css`
      ${theme.typography.content2}
    `}
  }
`;

const StyledIntroText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 16px;
  border-top: 1px solid ${({ theme }) => theme.color.gray200};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray200};
  justify-content: center;
  align-items: center;
  width: 250px;
  margin: 0 auto;
  gap: 16px;
`;

const IntroBlock = styled.div`
  ${commonFontStyles}
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  ${({ theme }) => css`
    color: ${theme.color.brownText};
    ${theme.typography.content1Bold}
  `}
  letter-spacing: 2.5px;
  span {
    ${({ theme }) => css`
      color: ${theme.color.gray800};
      ${theme.typography.content3}
    `}
  }
`;
