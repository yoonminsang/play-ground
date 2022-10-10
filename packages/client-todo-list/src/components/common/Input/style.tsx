import { css, Theme } from '@emotion/react';

export const wrapperStyle = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 3px;
  label {
    ${theme.typo.labelM}
  }
  input {
    border: 1px solid ${theme.color.grey500};
    border-radius: 10px;
    padding: 0 5px;
    ${theme.typo.bodyM}
  }
`;
