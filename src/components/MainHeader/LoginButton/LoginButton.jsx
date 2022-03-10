import { StyledLoginButton } from "./styles";

export default function LoginButton(props) {
  return (
    <>
      <StyledLoginButton onClick={props.onClick}>
        Minha Conta
      </StyledLoginButton>
    </>
  );
}
