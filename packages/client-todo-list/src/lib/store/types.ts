/* eslint-disable @typescript-eslint/no-explicit-any */

// 함수들의 프로퍼티(키)만 받아옴
type FunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends (...args: any) => any ? K : never;
}[keyof T];

// 함수들을 제외한 모든 키
export type NonFunctionProperties<T> = Omit<T, FunctionPropertyNames<T>>;
