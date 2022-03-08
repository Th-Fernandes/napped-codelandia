import napedLogo from "img/header-logo.svg";
import { StyledFooter } from "./styles";

export default function Footer() {
  return (
    <StyledFooter>
      <img src={napedLogo.src} />

      <p>
      Todas as imagens de filmes, séries e etc são marcas registradas dos seus respectivos proprietários.
      </p>
    </StyledFooter>
  )
}