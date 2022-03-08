import styled from "styled-components";
import cardAnimation from "../../styles/cardAnimation.js"

export const StyledNews = styled.section`
  max-width: 112rem;
  margin: 9.9rem auto 0;

  > ul {
    margin-top: 3.9rem;
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    flex-wrap: wrap;
    height: 54.2rem;
  }

  > ul > li {
    ${cardAnimation.mainStyle}
  }

  > ul > li:hover {
    ${cardAnimation.hoverStyle}
  }

  @media(max-width: 1024px) {
    > ul {
      margin-top: 5rem;
      height: 30rem;
      display: grid;
      grid-template-columns: auto auto auto auto auto auto  ;
      overflow-x: auto;
    }

    > ul li:not(:last-child) {
      margin-right: 40px;
    }
  }
`