import headerLogo from "../../img/header-logo.svg";
import LoginButton from "./LoginButton/LoginButton";
import { Header } from "./styles";
import mobileMenu from "../../img/mobile/menu-icon.svg"

export default function MainHeader() {
  return(
    <Header>
      <span> 
        <img src={headerLogo.src} alt="voltar ao menu principal"/>
      </span>
      
      <div className="user-navegation">
        <nav className="navbar">
          <ul className="nav-links">
            {
              ['Home', 'Series', 'Filmes', 'Animes', 'Games'].map((element, index) => {
                return <li className="nav-link" key={index}>{element}</li>
              })
            }
          </ul>
        </nav>
        
        {/* FUTURAMENTE IRÁ SE TRANSFORMAR EM UM COMPONENT */}
        <img className="visible" src={mobileMenu.src} />

        <LoginButton />
      </div>
    </Header>
  )
}