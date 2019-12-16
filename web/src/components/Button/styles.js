import styled from 'styled-components';
import { em } from 'polished';
import * as mixins from './mixins';

export const Container = styled.button`
  outline: none;
  font-family: inherit;
  border: 0 none;
  height: ${em(40, 14)};
  padding-left: ${em(20, 14)};
  padding-right: ${em(20, 14)};
  border-radius: 5px;
  cursor: pointer;

  ${mixins.buttonColors};
  ${mixins.isBlock};
  ${mixins.sizes};
`;
