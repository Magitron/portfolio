import styled from 'styled-components';
import {colors} from '../helpers/constants';

const Button = styled.button`
  background: ${colors.saphire};
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default Button;