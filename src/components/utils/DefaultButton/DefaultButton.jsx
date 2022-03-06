import { StyledButton } from "./styles"

export default function DefaultButton(props) {
  return (
    <StyledButton dimensions={props.dimensions} onClick={props.onClick}>
      {props.children}
    </StyledButton>
  )
}