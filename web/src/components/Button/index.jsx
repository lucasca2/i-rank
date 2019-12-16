import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

function Button({
  size, isBlock, color, children,
}) {
  return (
    <Container size={size} isBlock={isBlock} color={color}>{children}</Container>
  );
}

Button.defaultProps = {
  size: 'medium',
  color: 'primary',
  isBlock: false,
  children: null,
};

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['primary', 'secondary']),
  isBlock: PropTypes.bool,
  children: PropTypes.string,
};

export default Button;
