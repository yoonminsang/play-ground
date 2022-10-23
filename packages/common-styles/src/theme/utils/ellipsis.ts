import { css } from '@emotion/react';

export const truncate = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const lineClamp = (v: number) => css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: initial;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${v};
`;
