// https://github.com/toss/slash 참조
import { forwardRef, ReactElement, Ref } from 'react';

import { flex, FlexOptions } from './utils/flex';

import type { AsProps, InferenceHTMLElement } from './types';

interface FlexProps<T extends keyof JSX.IntrinsicElements = 'div'> extends AsProps<T>, FlexOptions {}

type FlexReturnType = <T extends keyof JSX.IntrinsicElements = 'div'>(
  props: FlexProps<T> & { ref?: Ref<InferenceHTMLElement<T>> },
) => ReactElement | null;

export const BaseFlex = forwardRef<HTMLElement, FlexProps>(function BaseFlex(props, ref) {
  /* eslint-disable react/prop-types */
  const { align = 'stretch', as = 'div', direction = 'row', justify = 'flex-start', ...rest } = props;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const Component = as as any;

  return <Component ref={ref} css={flex({ align, direction, justify })} {...rest} />;
}) as FlexReturnType;

type FlexType = typeof BaseFlex & {
  Center: any;
  CenterVertical: any;
  CenterHorizontal: any;
};

export const Flex = BaseFlex as FlexType;

Flex.Center = forwardRef<HTMLElement, FlexProps<keyof JSX.IntrinsicElements>>(function Center(props, ref) {
  return <BaseFlex align="center" justify="center" {...props} ref={ref} />;
});

Flex.CenterVertical = forwardRef<HTMLElement, FlexProps<keyof JSX.IntrinsicElements>>(function CenterVertical(
  props,
  ref,
) {
  return <BaseFlex align="center" {...props} ref={ref} />;
});

Flex.CenterHorizontal = forwardRef<HTMLElement, FlexProps<keyof JSX.IntrinsicElements>>(function CenterHorizontal(
  props,
  ref,
) {
  return <BaseFlex justify="center" {...props} ref={ref} />;
});
