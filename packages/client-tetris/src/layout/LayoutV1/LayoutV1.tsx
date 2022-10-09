import type { FC, ReactNode } from 'react';

import { css } from '@emotion/react';

import { FooterV1, HeaderV1 } from 'components';

interface Props {
  children: ReactNode;
}

const LayoutV1: FC<Props> = ({ children }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <HeaderV1 />
      {children}
      <FooterV1 />
    </div>
  );
};

export default LayoutV1;
