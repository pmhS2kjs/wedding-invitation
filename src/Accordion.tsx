import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Toast from '@src/Toast';
import { useState } from 'react';

const Accordion = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null); // 토스트 메시지 상태

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setToastMessage('복사되었습니다.');
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    } finally {
      setTimeout(() => {
        setToastMessage(null);
      }, 2000);
    }
  };

  const handleCopyClick = (accountNumber: string) => {
    copyToClipboard(accountNumber);
  };

  return (
    <StyledAccordion>
      <AccordionItem
        isOpen={openSection === 'groom'}
        onToggle={() => toggleSection('groom')}
        title="신랑측 계좌안내"
        accountDetails={[
          {
            name: '김준성',
            bank: '카카오뱅크',
            number: `${import.meta.env.VITE_GROOM_ACCOUNT}`,
          },
          {
            name: '김정재',
            bank: '경남은행',
            number: `${import.meta.env.VITE_GROOM_FATHER_ACCOUNT}`,
          },
        ]}
        onCopyClick={handleCopyClick}
        transitionDuration="1.2s"
      />

      <AccordionItem
        isOpen={openSection === 'bride'}
        onToggle={() => toggleSection('bride')}
        title="신부측 계좌안내"
        accountDetails={[
          {
            name: '박민혜',
            bank: '카카오뱅크',
            number: `${import.meta.env.VITE_BRIDE_ACCOUNT}`,
          },
          {
            name: '박인기',
            bank: '농협',
            number: `${import.meta.env.VITE_BRIDE_FATHER_ACCOUNT}`,
          },
          {
            name: '이영선',
            bank: '새마을금고',
            number: `${import.meta.env.VITE_BRIDE_MATHER_ACCOUNT}`,
          },
        ]}
        onCopyClick={handleCopyClick}
        transitionDuration="0.8s"
      />
      {toastMessage && <Toast message={toastMessage} />}
    </StyledAccordion>
  );
};

const AccordionItem = ({
  isOpen,
  onToggle,
  title,
  accountDetails,
  onCopyClick,
  transitionDuration,
}: {
  isOpen: boolean;
  onToggle: () => void;
  title: string;
  accountDetails: { name: string; bank: string; number: string }[];
  onCopyClick: (text: string) => void;
  transitionDuration: string;
}) => (
  <StyledAccordionItem>
    <AccordionTitle isOpen={isOpen} onClick={onToggle}>
      <p>{title}</p>
      <span className="material-symbols-rounded">keyboard_arrow_down</span>
    </AccordionTitle>
    {
      <AccordionContent isOpen={isOpen} transitionDuration={transitionDuration}>
        {accountDetails.map((detail, index) => (
          <div key={index}>
            <AccountDetail
              name={detail.name}
              bank={detail.bank}
              number={detail.number}
              onCopyClick={() => onCopyClick(detail.number)}
            />
          </div>
        ))}
      </AccordionContent>
    }
  </StyledAccordionItem>
);

const AccountDetail = ({
  name,
  bank,
  number,
  onCopyClick,
}: {
  name: string;
  bank: string;
  number: string;
  onCopyClick: (text: string) => void;
}) => (
  <AccountDetailContainer>
    <div>
      <p>{name}</p>
      <p>{bank}</p>
      <p>{number}</p>
    </div>
    <button onClick={() => onCopyClick(number)}>복사하기</button>
  </AccountDetailContainer>
);

const commonFontStyles = css`
  font-family: 'GowunBatang-Regular', Arial, Helvetica, sans-serif,
    'Apple SD Gothic Neo', -apple-system, 'Segoe UI', 'Oxygen';
`;

// Styled Components
const StyledAccordion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledAccordionItem = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => css`
    background-color: ${theme.color.brown500};
    color: ${theme.color.gray0};
    ${theme.typography.content3}
  `}
`;

const AccordionTitle = styled.div<{ isOpen: boolean }>`
  ${commonFontStyles}
  position: relative;
  padding: 15px;
  margin: 0;
  span {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: ${({ isOpen }) =>
      isOpen
        ? 'rotate(180deg) translateY(50%)'
        : 'rotate(0deg) translateY(-50%)'};
  }
  ${({ theme }) => css`
    ${theme.typography.content2}
  `}
`;

const AccordionContent = styled.div<{
  isOpen: boolean;
  transitionDuration: string;
}>`
  ${commonFontStyles}
  max-height: ${({ isOpen }) => (isOpen ? '1000px' : '0')};
  overflow: hidden;
  transition: ${({ isOpen, transitionDuration }) =>
    isOpen
      ? `max-height ${transitionDuration} ease-in`
      : `max-height 0.5s ease-out`};
  ${({ theme }) => css`
    background-color: ${theme.color.gray50};
    color: ${theme.color.gray800};
    ${theme.typography.content2}
  `}

  > div {
    border-bottom: 1px solid ${({ theme }) => theme.color.gray100};
    padding: 16px;
  }
`;

const AccountDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    text-align: left;
    p {
      &:first-of-type {
        ${({ theme }) => theme.typography.content2Bold}
      }
    }
  }
  button {
    ${commonFontStyles}
    padding: 8px 16px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.color.brown500};
    color: ${({ theme }) => theme.color.gray0};
    text-align: center;
    ${({ theme }) => theme.typography.content3}
  }
`;

export default Accordion;
