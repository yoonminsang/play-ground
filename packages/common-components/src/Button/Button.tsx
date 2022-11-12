import { forwardRef, useMemo } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

import { css, SerializedStyles, useTheme } from '@emotion/react';

import Spinner from '../Spinner/Spinner';

type Variant = 'filled' | 'light' | 'outline' | 'subtle';
type Color = 'red' | 'blue' | 'green' | 'grey';
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// TODO: link 추가
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color: Color;
  disabled?: boolean;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  isLoading?: boolean;
  rightIcon?: ReactNode;
  size: Size;
  variant: Variant;
  testId?: string;
  customStyle?: SerializedStyles;
}

const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  {
    children,
    color,
    disabled,
    fullWidth,
    leftIcon,
    isLoading,
    rightIcon,
    size,
    variant,
    testId,
    customStyle,
    ...otherProps
  },
  forwardedRef,
) {
  const theme = useTheme();

  const [fontSize, height, padding] = useMemo(() => {
    switch (size) {
      case 'xl':
        return ['20px', '58px', '0 32px'];
      case 'lg':
        return ['18px', '48px', '0 26px'];
      case 'md':
        return ['16px', '40px', '0 22px'];
      case 'sm':
        return ['14px', '34px', '0 18px'];
      case 'xs':
      default:
        return ['12px', '28px', '0 14px'];
    }
  }, [size]);

  const commonStyle = useMemo(() => {
    return css`
      transition: all 0.3s;

      ${theme.size({ width: fullWidth ? '100%' : 'auto', height })}

      padding: ${padding};
      border: 1px solid transparent;
      border-radius: 32px;

      cursor: ${isLoading ? 'default' : 'pointer'};

      font-size: ${fontSize};
      &:active {
        transform: translateY(1px);
      }
      &:disabled {
        cursor: default;
      }
    `;
  }, [theme, fullWidth, height, padding, isLoading, fontSize]);

  const filledStyle = useMemo(() => {
    const [backgroundColor, hoverBackgroundColor] = (() => {
      switch (color) {
        case 'red':
          return [theme.color.red500, theme.color.red600];
        case 'blue':
          return [theme.color.blue500, theme.color.blue600];
        case 'green':
          return [theme.color.green500, theme.color.green600];
        case 'grey':
        default:
          return [theme.color.grey500, theme.color.grey600];
      }
    })();
    return css`
      background-color: ${backgroundColor};
      color: ${theme.color.white};
      &:hover {
        background-color: ${hoverBackgroundColor};
      }
    `;
  }, [theme, color]);

  const lightStyle = useMemo(() => {
    const [backgroundColor, colors, hoverBackgroundColor] = (() => {
      switch (color) {
        case 'red':
          return [theme.color.red50, theme.color.red700, theme.color.red100];
        case 'blue':
          return [theme.color.blue50, theme.color.blue700, theme.color.blue100];
        case 'green':
          return [theme.color.green50, theme.color.green700, theme.color.green100];
        case 'grey':
        default:
          return [theme.color.grey50, theme.color.grey700, theme.color.grey100];
      }
    })();
    return css`
      background-color: ${backgroundColor};
      color: ${colors};
      &:hover {
        background-color: ${hoverBackgroundColor};
      }
    `;
  }, [theme, color]);

  const outlineStyle = useMemo(() => {
    const [outlineColor, hoverBackgroundColor] = (() => {
      switch (color) {
        case 'red':
          return [theme.color.red700, theme.color.red50];
        case 'blue':
          return [theme.color.blue700, theme.color.blue50];
        case 'green':
          return [theme.color.green700, theme.color.green50];
        case 'grey':
        default:
          return [theme.color.grey700, theme.color.grey50];
      }
    })();
    return css`
      border-color: ${outlineColor};
      color: ${outlineColor};
      &:hover {
        background-color: ${hoverBackgroundColor};
      }
    `;
  }, [theme, color]);

  const subtleStyle = useMemo(() => {
    const [colors, hoverBackgroundColor] = (() => {
      switch (color) {
        case 'red':
          return [theme.color.red700, theme.color.red50];
        case 'blue':
          return [theme.color.blue700, theme.color.blue50];
        case 'green':
          return [theme.color.green700, theme.color.green50];
        case 'grey':
        default:
          return [theme.color.grey700, theme.color.grey50];
      }
    })();
    return css`
      color: ${colors};
      &:hover {
        background-color: ${hoverBackgroundColor};
      }
    `;
  }, [theme, color]);

  const disabledStyle = useMemo(() => {
    return css`
      border-color: transparent;
      background-color: ${theme.color.grey100};
      color: ${theme.color.grey500};
      &:hover {
        background-color: ${theme.color.grey100};
      }
    `;
  }, [theme]);

  const divStyle = useMemo(() => {
    return css`
      display: flex;
      gap: 8px;
    `;
  }, []);

  const loadingSize = useMemo(() => {
    switch (size) {
      case 'xl':
        return 'md';
      case 'lg':
      case 'md':
        return 'sm';
      case 'sm':
      case 'xs':
      default:
        return 'xs';
    }
  }, [size]);

  return (
    <button
      type="button"
      ref={forwardedRef}
      data-testid={testId}
      disabled={disabled}
      css={[
        commonStyle,
        customStyle,
        variant === 'filled' && filledStyle,
        variant === 'light' && lightStyle,
        variant === 'outline' && outlineStyle,
        variant === 'subtle' && subtleStyle,
        disabled && disabledStyle,
      ]}
      {...otherProps}
    >
      <div css={divStyle}>
        {isLoading ? (
          <Spinner size={loadingSize} />
        ) : (
          <>
            {leftIcon}
            <span>{children}</span>
            {rightIcon}
          </>
        )}
      </div>
    </button>
  );
});

export default Button;
