import styled from "styled-components";
import thumb from "img/anime-main-thumb.svg";
import pallet from "../../../config.json";

export const StyledThumb = styled.section`
  background: url(${thumb.src}) center;
  max-width: 112rem;
  margin: 9rem auto 0;
  height: 30rem;

  > article {
    display: flex;
    align-items: center;
    height: 100%;
    flex-wrap: wrap;
    align-content: center;
    padding-left: 4rem;

    & > h1 {
      font-size: 4.8rem;
      font-weight: 400;
      width: 100%;
    }

    & > p {
      font: 2rem 'Inter',sans-serif;
      max-width: 49.2rem;
      line-height: 3.2rem;
      color: ${pallet.colors.neutrals["white-200"]};
    }
  }

  
`