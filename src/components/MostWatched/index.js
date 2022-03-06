import styled from "styled-components";

export const MostWatchedContainer = styled.section`
  max-width: 112rem;
  margin: 5rem auto 0;
  display: flex;
  place-content: center space-between;

  @media(max-width: 768px) {
    flex-wrap: wrap;
  }
`