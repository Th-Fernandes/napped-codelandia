import { StyledTopContend } from "./styles"
import DefaultClass from "../utils/DefaultClass/DefaultClass"
import SubsequentCard from "./SubsequentCard/SubsequentCard"

export default function TopContend() {
  return (
    <StyledTopContend className="container-default-size">
      <div className="main-contend">
        <DefaultClass />
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
        </p>
      </div>

      <ul className="subsequent-contends">
        {
          [1, 2].map((el, index) => {
            return (
            <SubsequentCard index={index} key={index} />
            )
          })
        }
      </ul>
    </StyledTopContend>
  )
}