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

const center = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
`;

export const helperStyle = {
  truncate,
  lineClamp,
  center,
};
