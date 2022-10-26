// https://github.com/toss/slash 참조
import { AllHTMLAttributes } from 'react';

export type CSSPixelValue = string | number;

export type InferenceHTMLElement<K extends keyof JSX.IntrinsicElements> = NonNullable<
  Extract<JSX.IntrinsicElements[K]['ref'], React.RefObject<any>>['current']
>;
export interface AsProps<T extends keyof JSX.IntrinsicElements> extends AllHTMLAttributes<T> {
  as?: T;
}
