import { css, Theme } from '@emotion/react';

export const wrapperStyle = (theme: Theme) => css`
  display: flex;
  margin: 20px;
  > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  div:nth-of-type(1) {
    flex: 1;
  }
  div:nth-of-type(2) {
    flex: 5;
  }
  h1 {
    ${theme.typo.titleL}
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 5px;
    li {
      display: flex;
      gap: 10px;
      list-style: inside;
      &.selected {
        color: ${theme.color.blue500};
      }
      .btn-remove {
        color: ${theme.color.red500};
      }
    }
  }
`;
