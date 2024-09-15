import { css } from '@emotion/react';
import styled from '@emotion/styled';
import line from './assets/line.png';

type LayoutType = 'normal' | 'full' | 'top0';
interface Option {
  children: React.ReactNode;
  className?: string;
  layout?: LayoutType;
}

const InnerLayout = ({ children, className, layout = 'normal' }: Option) => {
  return (
    <Section className={className} layout={layout}>
      {children}
    </Section>
  );
};

export default InnerLayout;

type SectionProps = {
  layout: string;
};

const Section = styled.section<SectionProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  &.line {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: -15px;
      display: block;
      width: 100px;
      height: 30px;
      background-image: url(${line});
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      z-index: 2;
    }
  }
  ${({ layout }) => {
    switch (layout) {
      case 'normal':
        return css`
          padding: 64px 16px;
        `;
      case 'full':
        return css`
          padding: 64px 0px;
        `;
      case 'top0':
        return css`
          padding: 0 16px 64px 16px;
        `;
      default:
        return css`
          padding: 64px 16px;
        `;
    }
  }};
`;
