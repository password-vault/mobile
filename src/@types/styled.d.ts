import 'styled-components';

import { IThemeProps } from '../styles/theme/types';

declare module 'styled-components' {
  export interface DefaultTheme extends IThemeProps {}
}
