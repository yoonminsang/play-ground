import { FC, InputHTMLAttributes, useId } from 'react';

import { css } from '@emotion/react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
const Input: FC<Props> = ({ label, ...otherProps }) => {
  const id = useId();
  return (
    <div
      css={(theme) => css`
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
      `}
    >
      {label && <label htmlFor={id}>folder</label>}
      <input id={id} {...otherProps} />
    </div>
  );
};

export default Input;
