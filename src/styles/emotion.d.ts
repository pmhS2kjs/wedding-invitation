import '@emotion/react';

type ColorId =
  | 'gray0'
  | 'gray50'
  | 'gray100'
  | 'gray200'
  | 'gray300'
  | 'gray400'
  | 'gray500'
  | 'gray800'
  | 'brown500'
  | 'brownText';

type TypographyId =
  | 'bigTitle'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'content1'
  | 'content2'
  | 'content3'
  | 'content4'
  | 'bigTitleBold'
  | 'h1Bold'
  | 'h2Bold'
  | 'h3Bold'
  | 'h4Bold'
  | 'content1Bold'
  | 'content2Bold'
  | 'content3Bold'
  | 'content4Bold';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      [key in ColorId]: string;
    };
    typography: {
      [key in TypographyId]: {
        fontSize: string;
        lineHeight?: string;
        letterSpacing: string;
        fontWeight: number;
      };
    };
  }
}
