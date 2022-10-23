import { css } from '@emotion/react';

const truncate = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const lineClamp = (v: number) => css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: initial;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${v};
`;

export const helperStyle = {
  truncate,
  lineClamp,
};
