import styled from '@emotion/styled';
import mainImg from './assets/imgs/img1.jpg';
import { css } from '@emotion/react';
import line from './assets/line.png';
import ImageWithSkeleton from '@src/ImageWithSkeleton';

const MainImage = () => {
  return (
    <>
      <StyledMainImg>
        <StyledImgWrap>
          <ImageWithSkeleton
            src={mainImg}
            alt="main"
            width="100%"
            height="100%"
          />
        </StyledImgWrap>
        <StyledTextWrap>
          <p>wedding invitation</p>
          <p>김준성 &hearts; 박민혜</p>
        </StyledTextWrap>
      </StyledMainImg>
      <StyledTitle>
        <p>2024년 10월 26일, 토요일 낮 12시 30분</p>
        <p>힐스카이 웨딩&컨벤션 9층 힐시크릿홀</p>
      </StyledTitle>
    </>
  );
};

export default MainImage;

// 공통 스타일 정의
const commonTextStyle = css`
  font-family: 'GowunBatang-Regular', Arial, Helvetica, sans-serif,
    'Apple SD Gothic Neo', -apple-system, 'Segoe UI', 'Oxygen';
`;

const StyledMainImg = styled.div`
  position: relative;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  max-height: 667px;
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 60%;
    height: 70px;
    background-color: ${({ theme }) => theme.color.brown500};
  }
  &::before {
    top: 0;
    right: 0;
  }
  &::after {
    bottom: 0;
    left: 0;
    z-index: -1;
  }
`;

const StyledImgWrap = styled.div`
  padding: 24px;
  height: inherit;
  max-height: 667px;
  overflow: hidden;
  img {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    object-fit: cover;
  }
`;

const StyledTextWrap = styled.div`
  ${commonTextStyle}
  z-index: 1;
  width: 100%;
  height: 80px;
  position: absolute;
  top: 105px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  p {
    position: relative;
    z-index: 2;
    ${({ theme }) => css`
      ${theme.typography.h2}
      color: ${theme.color.brownText};
      letter-spacing: 3px;
      &:first-of-type {
        text-transform: uppercase;
        ${theme.typography.content4}
        color: ${theme.color.gray800};
        letter-spacing: 1.5px;
      }
    `}
  }
  &::after {
    content: '';
    position: absolute;
    width: calc(100% - 42px);
    height: 80px;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    z-index: 1;
    opacity: 0.9;
    background-color: ${({ theme }) => theme.color.gray0};
  }
`;

const StyledTitle = styled.div`
  ${commonTextStyle}
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  padding: 64px 16px;
  &::after {
    content: '';
    position: absolute;
    bottom: -25px;
    display: block;
    width: 100px;
    height: 30px;
    background-image: url(${line});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 2;
  }

  p {
    ${({ theme }) => css`
      ${theme.typography.content1Bold}
      @media (max-width: 320px) {
        ${theme.typography.content2Bold}
      }
      color: ${theme.color.brownText};
      &:first-of-type {
        ${theme.typography.h4Bold}
        @media (max-width: 320px) {
          ${theme.typography.content1Bold}
        }
        &:after {
          content: '';
          position: relative;
          left: 50%;
          transform: translateX(-50%);
          display: block;
          width: 1px;
          height: 25px;
          margin-top: 8px;
          background-color: ${theme.color.brown500};
        }
      }
    `}
  }
`;
