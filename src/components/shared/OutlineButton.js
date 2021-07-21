import SolidButton from './SolidButton'
import styled from 'styled-components'
// LAB: Replace with styled components button
const OutlineButton = styled(SolidButton)`
  background: transparent;
  border-color: ${props => props.primaryColor};
  color: ${props => props.primaryColor};

  &:hover {
    background: ${props => props.primaryColor};
    color: ${props => props.secondaryColor};
  }
`

export default OutlineButton
