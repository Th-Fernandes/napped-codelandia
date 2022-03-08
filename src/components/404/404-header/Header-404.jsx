import headerLogo from "img/header-logo.svg";
import error404 from "img/404.svg";
import { Header } from "./styles";
import  Image  from "next/image";

export default function Header404() {
  return (
    <Header>
      <span> 
        <Image  width="100%"  height="30px" src={headerLogo.src} alt="voltar ao menu principal"/>
      </span>

      <ul>
        {
          [1, 2, 3, 4].map((element) => {
            return (
              <li key={element}>
                <Image width="32px" height="100%" src={error404.src} alt='' />
              </li>
            )
          })
        }
      </ul>
    </Header>
  )
}