import { useState } from 'react';
import Skeleton from './Skeleton';
import styled from '@emotion/styled';

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

const ImageWithSkeleton = ({
  src,
  alt,
  width = '100%',
  height = '300px',
}: ImageWithSkeletonProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <ImageWrapper width={width} height={height}>
      {!isLoaded && <Skeleton />}
      <img
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        style={{ display: isLoaded ? 'block' : 'none' }}
      />
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div<{ width: string; height: string }>`
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ theme }) => theme.color.gray0};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export default ImageWithSkeleton;
