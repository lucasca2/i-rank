import { css } from 'styled-components';
import { readableColor } from 'polished';

export const buttonColors = ({ color, theme }) => {
  const currentColor = theme.colors[color];

  return css`
    color: ${readableColor(currentColor)};
    background-color: ${currentColor};
  `;
};

export const isBlock = ({ isBlock: is }) => is && css`
  display: block;
  width: 100%;
`;

export const sizes = ({ size }) => {
  switch (size) {
    case 'small': return css`
      font-size: 12px;
    `;

    case 'large': return css`
      font-size: 16px;
    `;

    case 'medium':
    default: return css`
      font-size: 14px;
    `;
  }
};
