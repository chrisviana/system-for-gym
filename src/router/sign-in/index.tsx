import './styles.scss'
import PersonalLogin from '../../assets/personal-login.png'
import arrowRight from '../../assets/arrow-right.svg'
import { Input } from '../../components/ui/input'

export function SignIn() {
  const NAME_ACADEMIA = 'Academia - Código Forte'
  const SUBTITLE = 'Seu lugar para treinar Evolua. Supere. Conquiste.'

  return (
    <div className="loginContainer">
      <main className="loginContent">
        <div className="login-ilustration">
          <div>
            <div className="header-login-ilustration">
              <h1>{NAME_ACADEMIA}</h1>
            </div>
            <p>{SUBTITLE}</p>
            <img src={PersonalLogin} alt="Personal Login" />
          </div>
        </div>
        <div className="infoLogin">
          <p>Login</p>
          <form>
            <div>
              <label>Email</label>
              <Input type="text" placeholder="Digite seu e-mail" />
            </div>
            <div>
              <label>Senha</label>
              <Input type="password" placeholder="Digite sua senha" />
            </div>
          </form>
          <div className="content-function-login">
            <div>
              <Input type="checkbox" />
              <label>Lembrar-me</label>
            </div>
            <a>Esqueceu sua senha?</a>
          </div>
          <button className="button-login">
            Entrar
            <img src={arrowRight} alt="Flecha para direita" />
          </button>
        </div>
      </main>
    </div>
  )
}
