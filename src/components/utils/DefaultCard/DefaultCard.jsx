import { StyledCard } from "./styles";
import DefaultClass from "../DefaultClass/DefaultClass"

export default function DefaultCard(props) {
  console.log(props)

  return (
    <StyledCard thumb={props.thumb}>
      <DefaultClass />

      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
      </p>
    </StyledCard>
  )
}