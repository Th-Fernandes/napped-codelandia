import { AnimeGrid } from "./styles";
import DefaultCard from "components/utils/DefaultCard/DefaultCard";
import animeData from "data/animes.json";

export default function AnimesGrid(props) {
  const data = animeData.titulos;


  return (
    <AnimeGrid>
      <ul>
        {!props.animeMatch
          ? data.map((element, index) => {
            console.log(element)
              return (
                <DefaultCard
                  thumb={element.thumb}
                  key={index}
                  gender={element.genero}
                >
                  {element.sinopse}
                </DefaultCard>
              );
            })
          : props.animeMatch.map((element, index) => {
            return (
              <DefaultCard
                thumb={element.thumb}
                key={index}
              >
                {element.sinopse}
              </DefaultCard>
            );
          })}
      </ul>
    </AnimeGrid>
  );
}
