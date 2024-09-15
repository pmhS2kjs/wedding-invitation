import { Global, css } from '@emotion/react';
import theme from '@src/styles/theme';

function GlobalStyle() {
  return (
    <Global
      styles={css`
        :root {
          --vh: 100%;
        }
        @font-face {
          font-family: 'S-CoreDream-3Light';
          src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff')
            format('woff');
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: 'GowunBatang-Regular';
          src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunBatang-Regular.woff')
            format('woff');
          font-weight: normal;
          font-style: normal;
        }
        * {
          font-family: 'S-CoreDream-3Light', Arial, Helvetica, sans-serif,
            'Apple SD Gothic Neo', -apple-system, 'Segoe UI', 'Oxygen';
          -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        }
        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video,
        input {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font-family: inherit;
          vertical-align: baseline;
          box-sizing: border-box;
        }
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
          display: block;
        }
        html,
        body,
        #root,
        .App {
          min-height: 100%;
        }
        body {
          line-height: 1;
          font-family: 'S-CoreDream-3Light', Arial, Helvetica, sans-serif,
            'Apple SD Gothic Neo', -apple-system, 'Segoe UI', 'Oxygen';
          min-width: 320px;
          background-color: ${theme.color.gray0};
          @media screen and (min-width: 500px) {
            max-width: 500px;
            margin: 0 auto;
            nav {
              max-width: 500px;
            }
          }
          // swiper style
          .swiper {
            width: 100%;
            height: 100%;
          }
          .swiper-wrapper {
            width: 100%;
            height: 100%;
          }
          .swiper-slide {
            width: auto;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .slide-image {
            height: 400px;
            width: auto;
          }
          .swiper-pagination-bullet-active {
            background: #6d493b;
          }
        }
        ol,
        ul {
          list-style: none;
        }
        blockquote,
        q {
          quotes: none;
        }
        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
          content: '';
          content: none;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }
        a {
          color: inherit;
          text-decoration: inherit;
          &:hover,
          &:active {
            color: inherit;
            text-decoration: inherit;
          }
        }
        input {
          appearance: none;
          border: none;
          outline: none;
          background: none;
          padding: 0;
          margin: 0;
          font-family: inherit;
          font-size: inherit;
          color: inherit;
          line-height: inherit;
        }
        input[type='number']::-webkit-outer-spin-button,
        input[type='number']::-webkit-inner-spin-button {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }
        button {
          background: inherit;
          border: none;
          box-shadow: none;
          border-radius: 0;
          padding: 0;
          overflow: visible;
          cursor: pointer;
          color: inherit;
        }
        select {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          background-color: transparent;
          color: ${theme.color.gray800};
          ${theme.typography.content2}
          &:focus {
            outline: none;
          }
        }
        .material-symbols-rounded {
          &.fill {
            font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          }
        }
      `}
    />
  );
}

export default GlobalStyle;
