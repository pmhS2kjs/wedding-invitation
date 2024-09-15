import React, { useState } from 'react';
import styled from '@emotion/styled';

interface ToastProps {
  message: string;
  duration?: number; // ms 단위로 표시될 시간 (기본값: 2000ms)
}

const Toast = ({ message, duration = 2000 }: ToastProps) => {
  const [isVisible, setIsVisible] = useState(true);

  // 일정 시간이 지나면 토스트를 자동으로 숨김
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!isVisible) return null;

  return <ToastContainer>{message}</ToastContainer>;
};

export default Toast;

const ToastContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 14px;
  z-index: 1000;
  opacity: 0.9;
  transition: opacity 0.3s ease;
`;
