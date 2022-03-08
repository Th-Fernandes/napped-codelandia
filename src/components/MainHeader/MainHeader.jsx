import headerLogo from "img/header-logo.svg";
import LoginButton from "./LoginButton/LoginButton";
import { Header } from "./styles";
import mobileMenu from "img/mobile/menu-icon.svg";
import { useRouter } from 'next/router';
import Image from "next/image";

export default function MainHeader() {
  const rout = useRouter()

  const handleRouter = (element) => {
    if (element === "Home") {
      rout.push(`./`)
      return
    }

    rout.push("./" + element.toLowerCase())
  }

  return(
    <Header>
      <span> 
        <Image 
          src={headerLogo.src} 
          alt="voltar ao menu principal"
          width={74} height={24}  
        />
      </span>
      
      <div className="user-navegation">
        <nav className="navbar">
          <ul className="nav-links">
            {
              ['Home', 'Series', 'Filmes', 'Animes', 'Games'].map((element, index) => {
                return (<li className="nav-link" key={index}>
                    <a  onClick={() => handleRouter(element)}>{element}</a>
                  </li>)
              })
            }
          </ul>
        </nav>
        
        {/* FUTURAMENTE IRÁ SE TRANSFORMAR EM UM COMPONENT */}
        <Image 
          className="visible" 
          src={mobileMenu.src}
          alt="menu principal"
          width={24}
          height={28}
        />

        <LoginButton />
      </div>
    </Header>
  )
}