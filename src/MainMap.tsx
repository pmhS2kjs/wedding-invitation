import { useEffect, useRef, useState } from 'react';
import InnerLayout from '@src/InnerLayout';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Toast from '@src/Toast';

const MainMap = () => {
  const [isWheelZoomEnabled, setIsWheelZoomEnabled] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const markerRef = useRef<any>(null);

  const latitude = 35.2190478;
  const longitude = 128.6014549;

  useEffect(() => {
    // Load the Kakao Maps SDK script
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_KAKAO_MAP_API_KEY
    }&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // Initialize the Kakao Maps SDK
      const kakao = (window as any).kakao;
      kakao.maps.load(() => {
        const mapContainer = mapContainerRef.current;
        if (mapContainer) {
          const mapOption = {
            center: new kakao.maps.LatLng(latitude, longitude),
            level: 3,
          };

          // Create the map and store it in the ref
          mapRef.current = new kakao.maps.Map(mapContainer, mapOption);

          // Disable mouse wheel zoom initially
          mapRef.current.setZoomable(false);
          mapRef.current.setDraggable(false);

          // Create and add the marker
          const markerPosition = new kakao.maps.LatLng(35.2193278, 128.60143); // Marker coordinates
          const marker = new kakao.maps.Marker({
            position: markerPosition,
          });

          marker.setMap(mapRef.current);
          markerRef.current = marker;
        }
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, [latitude, longitude]);

  // Function to enable mouse wheel zoom
  const toggleWheelZoom = () => {
    if (mapRef.current) {
      mapRef.current.setDraggable(!isWheelZoomEnabled); // 현재 상태 반전
      mapRef.current.setZoomable(!isWheelZoomEnabled);
      setIsWheelZoomEnabled((prevState) => !prevState); // 상태 업데이트
    }
  };

  // Function to zoom in
  const zoomIn = () => {
    if (mapRef.current) {
      mapRef.current.setLevel(mapRef.current.getLevel() - 1);
      panToMarker();
    }
  };

  // Function to zoom out
  const zoomOut = () => {
    if (mapRef.current) {
      mapRef.current.setLevel(mapRef.current.getLevel() + 1);
      panToMarker();
    }
  };

  // Function to center the map on the marker
  const panToMarker = () => {
    if (mapRef.current && markerRef.current) {
      const markerPosition = markerRef.current.getPosition(); // 마커의 현재 위치
      mapRef.current.panTo(markerPosition); // 지도의 중심을 자연스럽게 마커 위치로 이동
    }
  };

  // 지도타입을 변경하는 함수
  const setMapType = (type: 'roadmap' | 'skyview') => {
    const roadmapControl = document.getElementById('btnRoadmap');
    const skyviewControl = document.getElementById('btnSkyview');

    if (mapRef.current) {
      const kakao = (window as any).kakao;

      if (type === 'roadmap') {
        mapRef.current.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);
        if (roadmapControl && skyviewControl) {
          roadmapControl.className = 'selected_btn';
          skyviewControl.className = 'btn';
        }
      } else {
        mapRef.current.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
        if (roadmapControl && skyviewControl) {
          skyviewControl.className = 'selected_btn';
          roadmapControl.className = 'btn';
        }
      }
    }
  };

  const addressToCopy = '마산회원구 봉양로 133';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(addressToCopy);
      setToastMessage('복사되었습니다.');
    } catch (err) {
      console.error('클립보드에 복사하는데 실패했습니다:', err);
    }
  };

  return (
    <>
      <StyledTitle>오시는 길</StyledTitle>
      <StyledAddress>
        <p>힐스카이 웨딩&컨벤션 9층 힐시크릿홀</p>
        <p>마산회원구 봉양로 133</p>
      </StyledAddress>
      <StyledAddressBtnWrap>
        <button onClick={copyToClipboard}>복사하기</button>
      </StyledAddressBtnWrap>
      <div style={{ position: 'relative', marginBottom: '16px' }}>
        <div
          ref={mapContainerRef}
          style={{
            width: '100%',
            height: '300px',
            backgroundColor: '#E8EBED',
          }}
        />
        <CustomTypeControl>
          <span
            id="btnRoadmap"
            className="selected_btn"
            onClick={() => setMapType('roadmap')}
          >
            지도
          </span>
          <span
            id="btnSkyview"
            className="btn"
            onClick={() => setMapType('skyview')}
          >
            스카이뷰
          </span>
        </CustomTypeControl>
        <CustomZoomControl>
          <span onClick={zoomIn}>
            <img
              src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_plus.png"
              alt="확대"
            />
          </span>
          <span onClick={zoomOut}>
            <img
              src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_minus.png"
              alt="축소"
            />
          </span>
        </CustomZoomControl>
        <EnableZoomButton onClick={toggleWheelZoom}>
          <span className="material-symbols-rounded">
            {!isWheelZoomEnabled ? 'lock' : 'lock_open'}
          </span>
        </EnableZoomButton>
      </div>
      <StyledZoomInfo>오른쪽 하단 자물쇠로 움직임을 제어하세요.</StyledZoomInfo>
      <InnerLayout layout="top0" className="line">
        <StyledInfo>
          <div>
            <h3>택시</h3>
            <div>
              <p>마산역 택시승강장 탑승 시 10분 소요</p>
            </div>
          </div>
          <div>
            <h3>버스</h3>
            <div>
              <p>봉안공단 입구 하차</p>
              <p>162, 107, 114, 116, 160, 163, 164, 257, 740, 3002</p>
            </div>
            <div>
              <p>(주)동방 하차</p>
              <p>540</p>
            </div>
          </div>
          <div>
            <h3>주차안내</h3>
            <div>
              <p>2층 ~ 6층 주차장 무료 이용</p>
              <p>동방창원지사 주차장 / 2시간 무료</p>
            </div>
          </div>
        </StyledInfo>
      </InnerLayout>
      {toastMessage && <Toast message={toastMessage} />}
    </>
  );
};

export default MainMap;

const StyledZoomInfo = styled.p`
  text-align: right;
  margin-bottom: 16px;
  ${({ theme }) => css`
    color: ${theme.color.gray800};
    ${theme.typography.content3}
  `}
`;

const EnableZoomButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 2;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  ${({ theme }) => css`
    color: ${theme.color.gray0};
    background: ${theme.color.brown500};
  `}
`;

const CustomTypeControl = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  overflow: hidden;
  width: 130px;
  height: 30px;
  margin: 0;
  padding: 0;
  z-index: 1;
  font-size: 12px;
  span {
    display: block;
    width: 65px;
    height: 30px;
    float: left;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
    &.btn {
      ${({ theme }) => css`
        color: ${theme.color.gray0};
        background: linear-gradient(
          ${theme.color.gray200},
          ${theme.color.gray400}
        );
      `}
    }
    &.btn:active {
      ${({ theme }) => css`
        background: ${theme.color.brown500};
        color: ${theme.color.gray0};
        background: linear-gradient(${theme.color.brown500}, #8e6a55);
      `}
    }
    &.selected_btn {
      ${({ theme }) => css`
        background: ${theme.color.brown500};
        color: ${theme.color.gray0};
        background: linear-gradient(${theme.color.brown500}, #8e6a55);
      `}
    }
  }
`;

const CustomZoomControl = styled.div`
  position: absolute;
  top: 50px;
  right: 10px;
  width: 36px;
  height: 80px;
  overflow: hidden;
  z-index: 1;
  ${({ theme }) => css`
    background-color: ${theme.color.gray100};
  `}
  span {
    display: block;
    width: 36px;
    height: 40px;
    text-align: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ theme }) => css`
      color: ${theme.color.brown500};
    `}
    img {
      width: 15px;
      height: 15px;
      border: none;
    }
    &:first-of-type {
      ${({ theme }) => css`
        border-bottom: 1px solid ${theme.color.gray500};
      `}
    }
  }
`;

const StyledAddress = styled.div`
  margin-bottom: 16px;
  p {
    text-align: center;
    ${({ theme }) => css`
      color: ${theme.color.gray800};
      ${theme.typography.content1}
    `}
    &:nth-of-type(2) {
      margin-top: 4px;
      margin-bottom: 4px;
    }
  }
`;

const StyledAddressBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    padding: 8px 16px;
    margin-bottom: 16px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.color.brown500};
    color: ${({ theme }) => theme.color.gray0};
    text-align: center;
    ${({ theme }) => css`
      ${theme.typography.content3}
    `}
  }
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  gap: 32px;
  text-align: left;
  h3 {
    margin-bottom: 8px;
    ${({ theme }) => css`
      color: ${theme.color.brownText};
      ${theme.typography.content1Bold}
    `}
  }
  div > div {
    &:nth-of-type(2) {
      margin-top: 16px;
    }
    p {
      ${({ theme }) => css`
        ${theme.typography.content2}
      `}
    }
  }
`;

const StyledTitle = styled.h2`
  padding-top: 64px;
  text-align: center;
  margin-bottom: 36px;
  ${({ theme }) => css`
    color: ${theme.color.brownText};
    ${theme.typography.h2Bold}
  `}
`;
