import Button from 'react-bootstrap/Button'
import styled from 'styled-components'
// Code Along: Replace with styled components button
// const SolidButton = Button

const SolidButton = styled(Button)`
  background-color: ${props => props.primaryColor};
  border-color: ${props => props.secondaryColor};
  color: ${props => props.secondaryColor};

  &:hover {
    background-color: ${props => props.secondaryColor}
    color: ${props => props.primaryColor}
  }
`

export default SolidButton

//
// const SolidButton = styled.button`
//   background-color: ${props => props.primaryColor};
//   color: ${props => props.secondaryColor};
//   border-radius: 12px;
//
//   &:hover {
//     background-color: ${props => props.secondaryColor}
//     color: ${props => props.primaryColor}
//   }
// `
