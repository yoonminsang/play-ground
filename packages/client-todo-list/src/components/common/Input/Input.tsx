import { FC, InputHTMLAttributes, useId } from 'react';

import * as S from './style';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
const Input: FC<Props> = ({ label, ...otherProps }) => {
  const id = useId();
  return (
    <div css={S.wrapperStyle}>
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} {...otherProps} />
    </div>
  );
};

export default Input;
