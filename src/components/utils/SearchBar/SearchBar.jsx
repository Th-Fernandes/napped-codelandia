import { StyledBar } from "./styles";
import searchIcon from "img/search-icon.svg";
import React from 'react';
import pallet from "../../../../config.json";
import animeData from "data/animes.json";


export default function SearchBar(props) {
  const [focus, setFocus] = React.useState('none');


  const handleMatchData = (element) => {
    const search = element.target.value ?? '';
    const matchedSearch = [];

    animeData.titulos.filter((el) => {
      if(el.sinopse.indexOf(search) != -1) {
        matchedSearch.push(el);
      }
     })

     props.animeMatch(matchedSearch);
    
  }

  return (
    <StyledBar
      onSubmit={(event) => event.preventDefault()} 
      focusStyle={focus}>
      <input 
        placeholder="Quer ajuda na procura? Pesquise aqui" 
        onFocus={() => setFocus(`2px solid ${pallet.colors.primary['purple-light']}`)}
        onBlur={() => setFocus('none')}
        onChange={el => handleMatchData(el)}
      />
      <img src={searchIcon.src} />
    </StyledBar>
  )
}