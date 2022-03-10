import styled from "styled-components";

export const AnimeGrid = styled.section`
  max-width: 112rem;
  margin: auto;
  
  > ul {
    display: grid;
    grid-template-columns: repeat(3, 34.9%);
    margin-top: 10rem;

    & > li {
      margin-bottom 4rem;
    }
  }
`