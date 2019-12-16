import React from 'react'
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import themeDecorator from "./themeDecorator"

// Add decorator of theme styled-components
addDecorator(themeDecorator);
addDecorator(withInfo);

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
