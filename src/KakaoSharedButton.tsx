import React, { useState } from 'react';
import Kakao from './assets/kakao_icon.png';
import styled from '@emotion/styled';
import Toast from '@src/Toast';

const KakaoShareButton: React.FC = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null); // 토스트 메시지 상태

  const shareToKakao = () => {
    if (window.Kakao) {
      window.Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: '김준성❤박민혜의 결혼식에 초대합니다',
          description: '10월 26일(토), 낮 12시 30분',
          imageUrl:
            'https://github.com/pmhS2kjs/wedding-invitation/blob/main/src/assets/imgs/img23.jpg?raw=true', // 이미지 URL
          link: {
            mobileWebUrl: 'https://pmhs2kjs.github.io/wedding-invitation',
            webUrl: 'https://pmhs2kjs.github.io/wedding-invitation',
          },
        },
        buttons: [
          {
            title: '모바일 청첩장 보러가기',
            link: {
              mobileWebUrl: 'https://pmhs2kjs.github.io/wedding-invitation',
              webUrl: 'https://pmhs2kjs.github.io/wedding-invitation',
            },
          },
        ],
      });
    } else {
      alert('Kakao SDK가 로드되지 않았습니다.');
    }
  };

  const linkToCopy = 'https://pmhs2kjs.github.io/wedding-invitation';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(linkToCopy);
      setToastMessage('복사되었습니다.');
    } catch (err) {
      console.error('클립보드에 복사하는데 실패했습니다:', err);
    }
  };

  return (
    <>
      <StyledInnerWrap>
        <StyledButtonWrap>
          <StyledButton onClick={shareToKakao}>
            <img src={Kakao} alt="" />
          </StyledButton>
          <p>공유하기</p>
        </StyledButtonWrap>
        <StyledButtonWrap>
          <StyledButton onClick={copyToClipboard}>
            <span className="material-symbols-rounded">link</span>
          </StyledButton>
          <p>링크복사</p>
        </StyledButtonWrap>
      </StyledInnerWrap>
      {toastMessage && <Toast message={toastMessage} />}
    </>
  );
};

export default KakaoShareButton;

const StyledInnerWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-bottom: 64px;
  div:last-of-type button {
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.color.brown500};
    color: ${({ theme }) => theme.color.gray0};
  }
`;

const StyledButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
`;

const StyledButton = styled.button`
  width: 50px;
  height: 50px;
  img {
    width: 100%;
    object-fit: contain;
  }
`;
