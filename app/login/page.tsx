import './login.css';

import Image from "next/image"
import logo2 from '../../public/images/login/logo2.png';
import gIcon from '../../public/images/login/googleIcon.png';
import emailIcon from '../../public/images/login/emailIcon.png';
import passIcon from '../../public/images/login/passIcon.png';

import Link from 'next/link';

export default function Login() {
  return (
    <div className="login-content">
      <aside className="sidebar">
        <div className='sidebar-content'>
          <Image
            alt="Logo Icon"
            src={logo2}
            className='logo-sidebar'
          />

          <div className="welcome">
            <h3>Seja Bem Vindo</h3>
            <p>Acesse sua conta agora</p>
          </div>

          <Link href="register">
            <button className='toRegister'>
              CADASTRAR
            </button>
          </Link>
        </div>
      </aside>

      <main className="login-main">
        <h1 className="login-title">FAÇA SEU LOGIN</h1>

        <form className="login-form">
          <div className="inputs-area">
            <div className="input-area">
              <span className="input-icon">
                <Image src={emailIcon} alt="Email" width={35} height={27} objectFit='contain'/>
              </span>
              <input 
                type="email"
                placeholder="E-MAIL"
                required
              />
            </div>

            <div className="input-area">
              <span className="input-icon">
                <Image src={passIcon} alt="Senha" width={35} height={35} objectFit='contain' />
              </span>
              <input 
                type="password"
                placeholder="SENHA"
                required
              />
            </div>
          </div>

          <Link href='/' style={{ marginTop: 12 }}>
            <button className="login-btn" type="submit">
              ENTRAR
            </button>
          </Link>

          <button className="login-btn" type="button" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Image
              alt="Logar com Google"
              src={gIcon}
              className="google-icon"
            />
          </button>
        </form>
      </main>
    </div>
  )
}