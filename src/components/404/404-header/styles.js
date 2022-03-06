import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 112rem;
  margin: auto;

  > ul {
    display: flex;
  }

  > ul > li {
    cursor: not-allowed;
  }

  > ul > li:not(:first-child) {
    margin-left: 8rem;
  }

  @media(max-width: 767px) {
    span {
      margin: 0 auto
    }

    > ul {
      display: none;
      visibility: hidden;
      opacity: 0;
    }
  }
`