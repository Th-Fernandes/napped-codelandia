import { StyledCards } from "./styles";
import DefaultCard from "components/utils/DefaultCard/DefaultCard"
import thumb from "img/card-example.svg"
import UnderlinedH2 from "components/utils/UnderlinedH2/UnderlinedH2";

export default function MostWatchedCards() {
  console.log(thumb.src)

  return (
    <StyledCards>
      <UnderlinedH2>Lorem ipsum dolor</UnderlinedH2>

      {
        [1, 2, 3].map((el, index) => {
          return (
            <DefaultCard thumb={thumb.src} key={index} />
          )
        })
      }
    </StyledCards>
  )
}