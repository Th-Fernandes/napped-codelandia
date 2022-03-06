import MostWatchedList from "./MostWatchedList/MostWatchedList";
import MostWatchedCards from "./MostWatchedCards/MostWatchedCards";
import { MostWatchedContainer } from ".";

export default function MostWatched() {
  return (
    <MostWatchedContainer>
      <MostWatchedList />
      <MostWatchedCards />  
    </MostWatchedContainer>
  )
}