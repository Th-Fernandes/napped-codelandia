import MostWatchedList from "./MostWatchedList/MostWatchedList";
import MostWatchedCards from "./MostWatchedCards/MostWatchedCards";
import DefaultContainer from "../utils/DefaultContainer/DefaultContainer";

export default function MostWatched() {
  return (
    <DefaultContainer>
      <MostWatchedList />
      <MostWatchedCards />  
    </DefaultContainer>
  )
}