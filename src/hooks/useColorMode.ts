import React from 'react';

import { ColorModeContext, IColorMode } from '~/contexts/ColorMode';

export const useColorMode = () => React.useContext(ColorModeContext) as IColorMode;
