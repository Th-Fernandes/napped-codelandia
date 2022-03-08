import DefaultButton from "components/utils/DefaultButton/DefaultButton";
import { StyledArticle } from "./style";
import { useRouter } from 'next/router';


export default function MessageError() {
  const rout = useRouter()

  return (
    <StyledArticle>
        <h1>
        Tenho más notícias para você!
        </h1>

        <p>
        A página que você está procurando pode ter sido removida ou está temporariamente indisponível.
        </p>

        <DefaultButton 
          dimensions={{width: '17.4rem', height: '4.4rem'}} 
          onClick={() =>{
            rout.push('../')
          } }>
          Voltar a Home
        </DefaultButton>
      </StyledArticle>
  )
}