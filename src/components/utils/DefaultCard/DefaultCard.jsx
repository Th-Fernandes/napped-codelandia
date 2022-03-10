import { StyledCard } from "./styles";
import DefaultClass from "../DefaultClass/DefaultClass"

export default function DefaultCard(props) {
  return (
    <StyledCard thumb={props.thumb}>
      <DefaultClass gender={props.gender}/>

      <p>{props.children}</p>
    </StyledCard>
  )
}