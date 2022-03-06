import styled from 'styled-components';
import pallet from '../../../../config.json'

export const StyledButton = styled.button`
  background-color: ${pallet.colors.primary["purple-light"]};
  width: ${props =>props.dimensions.width};
  height: ${props => props.dimensions.height || '2.5rem'}
`