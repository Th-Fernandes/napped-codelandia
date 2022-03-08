import styled from "styled-components";
import thumb from "img/most-watched-thumb.svg";
import pallet from "../../../../config.json";

export const StyledUl = styled.ul`
  width: 75.1rem;
  max-height: 89.5rem;
  overflow-y: auto;
  
  .mostWatched-item {
    display: flex;
  }

  .mostWatched-item:not(:first-child) {
    margin-top: 3.5rem;
  }

  .mostWatched-item .item-thumb {
    background-image: url(${thumb.src});
    width: 20rem;
    height: 15rem;
    padding: 1rem 0 0 1rem;
  }

  .mostWatched-item > article {
    max-width: 39.4rem;
    margin-left: 1.8rem;
  }

  .mostWatched-item > article >  h2 {
    font-weight: 400;
    font-size: 1.3rem;
  }
  .mostWatched-item > article >  p {
    font-weight: 400;
    font-size: 1.1rem;
    color: ${pallet.colors.neutrals["white-200"]};
    font-family: 'Inter', sans-serif;
  }

  .mostWatched-item > article .time {
    display: block;
    margin: 0.6rem 0 1.2rem 0;
  }

  @media(max-width: 425px) {
    max-height: 70rem;

    .mostWatched-item {
      flex-wrap: wrap;
      
    }

    .mostWatched-item > .item-thumb {
      margin: 0 auto 2rem;
    }

    .mostWatched-item > article {
      text-align: center;
    }
  }

`