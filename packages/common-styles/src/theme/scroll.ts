import { css } from '@emotion/react';

export const scroll = css`
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    width: 8px;
    border-radius: 4px;
    background-color: #787c82;
    border: 2px solid white;

    &:hover {
      background-color: #8c8f94;
    }
    &:active {
      background-color: #a7aaad;
    }
  }
`;
