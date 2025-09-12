import './register.css';

import Image from "next/image"
import logo2 from '../../public/images/login/logo2.png';
import gIcon from '../../public/images/login/googleIcon.png';
import emailIcon from '../../public/images/login/emailIcon.png';
import passIcon from '../../public/images/login/passIcon.png';
import userIcon from '../../public/images/register/registerUserIcon.png';


import Link from 'next/link';

export default function Register() {
  return (
    <div className="register-content">
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

          <Link href="login">
            <button className='toLogin'>
              Login
            </button>
          </Link>

          <Link href="login">
            <button className="google-register" type="button">
              <Image
                alt="Logar com Google"
                src={gIcon}
                className="google-icon"
                objectFit='contain'
              />
            </button>
          </Link>
        </div>
      </aside>

      <main className="register-main">
        <h1 className="register-title">CRIE SUA CONTA</h1>
        <form className="register-form">
          <div className="inputs-area">
            <div className="input-area">
              <span className="input-icon">
                <Image 
                  src={userIcon} 
                  alt="User" 
                  width={35} 
                  height={35} 
                  objectFit='contain' 
                />
              </span>
              <input 
                type="text"
                placeholder="NOME"
              />
            </div>

            <div className="input-area">
              <span className="input-icon">
                <Image 
                  src={emailIcon} 
                  alt="Email" 
                  width={35} 
                  height={27} 
                  objectFit='contain'
                />
              </span>
              <input 
                type="email"
                placeholder="E-MAIL"
              />
            </div>

            <div className="input-area">
              <span className="input-icon">
                <Image 
                  src={passIcon} 
                  alt="Senha" 
                  width={35} 
                  height={35} 
                  objectFit='contain' 
                />
              </span>
              <input 
                type="password"
                placeholder="SENHA"
              />
            </div>
          </div>

          <Link href='login'>
            <button className="register-btn" type="submit">
              CADASTRAR
            </button>
          </Link>
        </form>
      </main>
    </div>
  )
}