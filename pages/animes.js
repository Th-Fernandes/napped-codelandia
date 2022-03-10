import MainHeader from "components/MainHeader/MainHeader";
import MainThumb from "components/MainThumb/MainThumb";
import SearchBar from "components/utils/SearchBar/SearchBar";
import AnimesGrid from "components/AnimesGrid/AnimesGrid.jsx";
import react from "react";

export default function AnimePage() {
  const [animeMatch, setAnimeMatch] = react.useState(false)
  console.log(animeMatch)
  return (
    <>
      <MainHeader />

      <main>
        <MainThumb />
        <SearchBar animeMatch={setAnimeMatch} />
        <AnimesGrid animeMatch={animeMatch} />
      </main>
    </>
  )
}