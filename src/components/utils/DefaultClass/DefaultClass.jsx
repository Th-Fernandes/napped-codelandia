import { StyledDefaultClass } from "./styles"

export default function DefaultClass(props) {
  return (
    <StyledDefaultClass className="default-category">
      {props.gender || 'Lorem'}
    </StyledDefaultClass>
  )
}