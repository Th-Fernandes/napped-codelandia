import { StyledCards } from "./styles";
import DefaultClass from "../../utils/DefaultClass/DefaultClass";

export default function MostWatchedCards() {
  return (
    <StyledCards>
      <h2>Lorem ipsum dolor</h2>

      {
        [1, 2, 3].map((el) => {
          return (
            <li className="card" key={el}>
              <DefaultClass />

              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
              </p>
            </li>
          )
        })
      }
    </StyledCards>
  )
}