import { StyledNews } from "./styles";
import UnderlinedH2 from "../utils/UnderlinedH2/UnderlinedH2";
import DefaultCard from "../utils/DefaultCard/DefaultCard";
import thumb from "../../img/GTAV.svg"


export default function News() {
  return (
    <StyledNews>
      <UnderlinedH2>Notícias mais recentes</UnderlinedH2>

      <ul>
        {
          [1, 2, 3, 4, 5, 6].map((el) => {
            return <DefaultCard thumb={thumb.src} key={el} />
          })
        }
      </ul>
    </StyledNews>
  )
}