import styled from '@emotion/styled';
import EnterImage from './MainImage';
import MainContents from '@src/MainContents';
import MainGallery from '@src/MainGallery';
import MainCalendar from '@src/MainCalendar';
import MainMap from '@src/MainMap';
import MainHost from '@src/MainHost';
import Footer from '@src/Footer';
import { useEffect } from 'react';
import KakaoShareButton from '@src/KakaoSharedButton';
function App() {
  const setScreenSize = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(`${import.meta.env.VITE_KAKAO_MAP_API_KEY}`); // 여기서 YOUR_APP_KEY는 카카오에서 발급받은 JavaScript 키입니다.
    }
    setScreenSize();
  }, []);
  return (
    <StyledMainWrap>
      <EnterImage />
      <MainContents />
      <MainCalendar />
      <MainGallery />
      <MainMap />
      <MainHost />
      <KakaoShareButton />
      <Footer />
    </StyledMainWrap>
  );
}

export default App;

const StyledMainWrap = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;
