import headerLogo from "img/header-logo.svg";
import error404 from "img/404.svg";
import { Header } from "./styles";

export default function Header404() {
  return (
    <Header>
      <span> 
        <img src={headerLogo.src} alt="voltar ao menu principal"/>
      </span>

      <ul>
        {
          [1, 2, 3, 4].map((element) => {
            return (
              <li key={element}>
                <img src={error404.src} />
              </li>
            )
          })
        }
      </ul>
    </Header>
  )
}