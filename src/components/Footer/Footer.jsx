import napedLogo from "img/header-logo.svg";
import { StyledFooter } from "./styles";
import  Image  from "next/image";

export default function Footer() {
  return (
    <StyledFooter>
      <Image 
        src={napedLogo.src} 
        width={76}
        height={24}
        alt='naped'
        />

      <p>
      Todas as imagens de filmes, séries e etc são marcas registradas dos seus respectivos proprietários.
      </p>
    </StyledFooter>
  )
}