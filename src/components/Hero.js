import styled from 'styled-components';
import {colors} from '../helpers/constants';
import {gradients} from '../helpers/constants';
import {variables} from '../helpers/constants';

const Hero = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 50px;
  padding-bottom: ${variables.unit};
  background: ${gradients.saphire};
  color: ${colors.white};
  text-align: center;
`;

export default Hero;