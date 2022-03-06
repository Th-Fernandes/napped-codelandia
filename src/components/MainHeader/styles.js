import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 112rem;
  margin: 0 auto 0;
  font-family: "Inter", sans-serif;

  > span {
    display: flex;
    align-items: center;
  }
  
  .user-navegation {
    display: flex;
    align-itens: center;
  }

  .navbar,
  .navbar .nav-links {
    display: flex;
    align-items: center;
  }

  .navbar .nav-links .nav-link {
    font-size: 1.6rem;
  }

  .navbar .nav-links .nav-link:not(:first-child) {
    margin-left: 6rem;
  }

  .visible {
    display: none;
    visibility: hidden;
    opacity: 0;
  }

  @media(max-width: 1024px) {
     .navbar .nav-links {
      display: none;
      opacity: 0;
      visibility: hidden;
    }

    .visible {
      display: block;
      visibility: visible;
      opacity: 1;
      margin-right: 2rem;
    }
  }
`;
