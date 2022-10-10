import type { FC } from 'react';

import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

interface Props {}
const RootPage: FC<Props> = () => {
  return (
    <div
      css={(theme) =>
        css`
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 30px;
          gap: 30px;
          h1 {
            ${theme.typo.displayL}
          }
          nav {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            a {
              ${theme.typo.titleL}
            }
            a:nth-of-type(1) {
              color: ${theme.color.red500};
            }
            a:nth-of-type(2) {
              color: ${theme.color.blue500};
            }
            a:nth-of-type(3) {
              color: ${theme.color.green500};
            }
          }
        `
      }
    >
      <h1>TODO LIST</h1>
      <nav>
        <Link to="/react">리액트 투두리스트</Link>
        <Link to="/redux">리덕스 투두리스트</Link>
        <Link to="/useSyncExternalStore">useSyncExternalStore 투두리스트</Link>
      </nav>
    </div>
  );
};

export default RootPage;
