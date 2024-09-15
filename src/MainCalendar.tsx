import styled from '@emotion/styled';
import InnerLayout from '@src/InnerLayout';
import { useEffect, useState } from 'react';
import Img2 from './assets/imgs/img2.jpg';
import { css } from '@emotion/react';

const MainCalendar = () => {
  const [dDay, setDDay] = useState<number | null>(0);

  const calculateDDay = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const target = new Date('2024-10-26');
    target.setHours(0, 0, 0, 0);
    const differenceInTime = target.getTime() - today.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    setDDay(differenceInDays);
  };

  useEffect(() => {
    calculateDDay();
  }, []);

  return (
    <>
      <InnerLayout layout="full" className="line">
        <StyledCalendarWrap>
          <StyledCounting>
            {dDay !== null && (
              <p>
                준성 ♥ 민혜의 결혼식이
                {dDay < 0 ? (
                  <>
                    <span>{Math.abs(dDay)}</span>일 지났습니다.
                  </>
                ) : dDay === 0 ? (
                  <>
                    <span>오늘</span>입니다.
                  </>
                ) : (
                  <>
                    <span>{dDay}</span>일 남았습니다.
                  </>
                )}
              </p>
            )}
          </StyledCounting>
          <StyledCalendarInner>
            <StyledCalendarTitle>
              <p>2024</p>
              <p className="current-date">OCTOBER</p>
            </StyledCalendarTitle>
            <StyledCalendar>
              <div className="calendar">
                <ul className="weeks">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(
                    (day) => (
                      <li key={day}>{day}</li>
                    ),
                  )}
                </ul>
                <ul className="days">
                  {[
                    '29',
                    '30',
                    ...Array.from({ length: 31 }, (_, i) => i + 1),
                    '1',
                    '2',
                  ].map((day, i) => (
                    <li
                      key={i}
                      className={
                        i < 2 || i > 32 ? 'inactive' : i === 27 ? 'active' : ''
                      }
                    >
                      {day}
                      {i === 27 && (
                        <span className="material-symbols-rounded heart fill">
                          favorite
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </StyledCalendar>
          </StyledCalendarInner>
        </StyledCalendarWrap>
      </InnerLayout>
    </>
  );
};

export default MainCalendar;

// 공통 스타일 정의
const commonStyles = css`
  font-family: 'GowunBatang-Regular', Arial, Helvetica, sans-serif,
    'Apple SD Gothic Neo', -apple-system, 'Segoe UI', 'Oxygen';
`;

const StyledCalendarWrap = styled.div`
  position: relative;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  max-height: 667px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  background: url(${Img2}) center/cover no-repeat;
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.color.brown500};
    opacity: 0.6;
  }
`;

const StyledCalendarTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 1;
  ${({ theme }) => css`
    color: ${theme.color.gray0};
    ${theme.typography.h3}
    .current-date {
      ${theme.typography.bigTitle}
      letter-spacing: 5px;
    }
  `}
`;

const StyledCalendarInner = styled.div`
  ${commonStyles}
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding-bottom: 24px;
  z-index: 1;
`;

const StyledCalendar = styled.div`
  width: 90%;
  padding: 32px 16px;
  background-color: ${({ theme }) => theme.color.brown500};
  opacity: 0.95;
  position: relative;
  z-index: 1;
  .calendar ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    text-align: center;
  }
  .calendar .weeks li {
    font-weight: 500;
  }
  .calendar ul li {
    width: calc(100% / 7);
    position: relative;
    color: ${({ theme }) => theme.color.gray0};
  }
  .calendar .days li {
    z-index: 1;
    margin-top: 30px;
  }
  .days li.inactive {
    color: ${({ theme }) => theme.color.gray500};
  }
  .days li.active {
    color: #fff;
  }
  .days li:hover::before {
    background: #f2f2f2;
  }
  .heart {
    position: absolute;
    top: -14px;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    font-size: 48px;
    color: #ff5733;
    z-index: -1;
  }
`;

const StyledCounting = styled.div`
  position: relative;
  width: 100%;
  padding-top: 14px;
  padding-bottom: 10px;
  z-index: 1;
  p {
    ${({ theme }) => css`
      color: ${theme.color.brownText};
      ${theme.typography.content1Bold}
      @media (max-width: 320px) {
        ${theme.typography.content2Bold}
      }
    `}
    span {
      color: #ff5733;
      padding-left: 4px;
      font-weight: bold;
    }
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.color.gray0};
    opacity: 0.5;
    z-index: -1;
  }
`;
