import { forwardRef, useId, useMemo, useState } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';

import { css, SerializedStyles, useTheme } from '@emotion/react';

import { SIZE_1 } from '../../const/size';

type Variant = 'filled' | 'outline' | 'bottom-line' | 'white';
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  children: ReactNode;
  variant?: Variant;
  size: Size;
  as?: 'input' | 'button' | 'select' | 'textarea';
  testId?: string;
  customStyle?: SerializedStyles;
  customWrapperStyle?: SerializedStyles;
}

// TODO: focus, disabled, select, textarea
// Input.Wrapper 컴포넌트 생성 or 인터페이스 추가(label, error message 등등)
const Input = forwardRef<HTMLInputElement, Props>(function Input(
  { children, variant = 'outline', size, as = 'input', testId, customWrapperStyle, customStyle, ...otherProps },
  ref,
) {
  const [id] = useState<string>(useId());
  const theme = useTheme();

  const [fontSize, height, padding] = useMemo(() => {
    switch (size) {
      case 'xl':
        return [SIZE_1.xl.fontsize, SIZE_1.xl.height, SIZE_1.xl.padding];
      case 'lg':
        return [SIZE_1.lg.fontsize, SIZE_1.lg.height, SIZE_1.lg.padding];
      case 'md':
        return [SIZE_1.md.fontsize, SIZE_1.md.height, SIZE_1.md.padding];
      case 'sm':
        return [SIZE_1.sm.fontsize, SIZE_1.sm.height, SIZE_1.sm.padding];
      case 'xs':
      default:
        return [SIZE_1.xs.fontsize, SIZE_1.xs.height, SIZE_1.xs.padding];
    }
  }, [size]);

  const commonStyle = useMemo(() => {
    return css`
      .input {
        ${theme.size({ width: '100%', height })};
        border: 1px solid transparent;
        border-radius: 32px;
        padding: ${padding};

        font-size: ${fontSize};
        color: ${theme.color.grey900};

        &::placeholder {
          color: ${theme.color.grey400};
        }

        select {
          appearance: none;
        }
      }
    `;
  }, [fontSize, height, padding, theme]);

  const filledStyle = useMemo(() => {
    return css`
      .input {
        background-color: ${theme.color.grey100};
      }
    `;
  }, [theme]);

  const outlineStyle = useMemo(() => {
    return css`
      .input {
        border-color: ${theme.color.grey500};
      }
    `;
  }, [theme]);

  const bottomLineStyle = useMemo(() => {
    return css`
      .input {
        border-radius: 0px;
        border-bottom-color: ${theme.color.grey500};
      }
    `;
  }, [theme]);

  const Component = as as any;

  return (
    <div
      data-testid={testId}
      css={[
        commonStyle,
        variant === 'filled' && filledStyle,
        variant === 'outline' && outlineStyle,
        variant === 'bottom-line' && bottomLineStyle,
        customWrapperStyle,
      ]}
    >
      <label htmlFor={id} />
      <Component id={id} className="input" ref={ref} css={customStyle} {...otherProps}>
        {children}
      </Component>
    </div>
  );
}) as any;

Input.Wrapper = 12;

export default Input;
