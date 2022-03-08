import DefaultClass from "components/utils/DefaultClass/DefaultClass";
import { StyledSubsequentCard } from "./styles";

export default function SubsequentCard(props) {
  return (
    <StyledSubsequentCard className="subsquent-contend">
      <DefaultClass />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
        tellus, malesuada et velit in, blandit molestie dolor.
      </p>
    </StyledSubsequentCard>
  );
}
