import type { FC } from 'react';

import { Button } from '@common/components';

import * as S from './index.style';

interface Props {
  resetErrorBoundary: (...args: unknown[]) => void;
  error: Error;
}

const ErrorBoundaryPage: FC<Props> = ({ resetErrorBoundary, error }) => {
  const message = error?.message;
  return (
    <S.Wrapper>
      <h1>There was an error!</h1>
      {message && (
        <div className="flex">
          <div>error message: </div>
          <b>{message}</b>
        </div>
      )}
      <Button size="md" color="red" variant="filled" type="button" onClick={resetErrorBoundary}>
        Try again
      </Button>
    </S.Wrapper>
  );
};

export default ErrorBoundaryPage;
