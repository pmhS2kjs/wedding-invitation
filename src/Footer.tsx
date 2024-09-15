import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Footer = () => {
  return (
    <StyledFooter>
      <p>© 2024 MinhyePark. All rights reserved.</p>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  ${({ theme }) => css`
    background-color: ${theme.color.gray50};
    color: ${theme.color.gray800};
    ${theme.typography.content3}
  `}
`;
