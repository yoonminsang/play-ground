import { TTheme } from './theme';

declare module '@emotion/react' {
  export interface Theme extends TTheme {}
}
