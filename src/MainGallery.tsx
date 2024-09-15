import InnerLayout from '@src/InnerLayout';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from '@emotion/styled';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { css } from '@emotion/react';
import ImageWithSkeleton from '@src/ImageWithSkeleton';

const MainGallery = () => {
  return (
    <>
      <InnerLayout layout="full" className="line">
        <StyledTitle>사진첩</StyledTitle>
        <Swiper
          loop
          pagination={{
            dynamicBullets: true,
          }}
          autoHeight={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          {Array.from({ length: 23 }).map((_, index) => (
            <SwiperSlide key={index}>
              <StyledImg>
                <ImageWithSkeleton
                  src={`https://github.com/pmhS2kjs/invitation/blob/main/src/assets/imgs/img${
                    index + 3
                  }.jpg?raw=true`}
                  alt={`Image ${index + 3}`}
                  height="500px"
                />
              </StyledImg>
            </SwiperSlide>
          ))}
        </Swiper>
      </InnerLayout>
    </>
  );
};

export default MainGallery;

const StyledImg = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.gray0};
  display: flex;
  align-items: center;
  img {
    width: 100%;
    height: auto;
  }
`;

const StyledTitle = styled.h2`
  text-align: center;
  margin-bottom: 36px;
  ${({ theme }) => css`
    color: ${theme.color.brownText};
    ${theme.typography.h2Bold}
  `}
`;
