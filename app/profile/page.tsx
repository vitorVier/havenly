import './profile.css';
import Image from 'next/image';
import Link from 'next/link';

import userProfileIcon from '../../public/images/icons/userProfileIcon.png';
import engIcon from '../../public/images/icons/engIcon.png';

export default function ProfilePage() {
  return (
    <main className="profile-container">
      <nav className="profile-tabs">
        <Link href="/profile">
          <span className="tab active">Segurança</span>
        </Link>

        <Link href="/security">
          <span className="tab">Segurança</span>
        </Link>
      </nav>

      <div className="profile-content">
        <section className="profile-photo-section">
          <span className="profile-photo-label">Foto de Perfil</span>

          <div className="profile-photo">
            <Image
              src={userProfileIcon}
              alt="User Profile Icon"
              width={100}
              height={100}
            />

            <Image
              src={engIcon}
              alt="Edit Icon"
              width={40}
              height={40}
              className="eng-icon"
            />
          </div>

        </section>

        <section className="profile-info-section">
          <h2 className="profile-info-title">Informações Gerais</h2>

          <div className="profile-fields">
            <div className="profile-field-row">
              <div className="profile-field">
                <label>
                  <span className="field-label">Nome - </span>
                  <span className="field-edit">Alterar</span>
                </label>

                <input
                  className="field-input"
                  type="text"
                  // placeholder="Digite seu nome"
                />
              </div>

              <div className="profile-field">
                <label>
                  <span className="field-label">Sobrenome - </span>
                  <span className="field-edit">Alterar</span>
                </label>

                <input
                  className="field-input"
                  type="text"
                  // placeholder="Digite seu sobrenome"
                />
              </div>
            </div>

            <div className="profile-field-row">
              <div className="profile-field">
                <label>
                  <span className="field-label">E-mail - </span>
                  <span className="field-edit">Alterar</span>
                </label>

                <input
                  className="field-input"
                  type="email"
                  // placeholder="Digite seu e-mail"
                />
              </div>

              <div className="profile-field">
                <label>
                  <span className="field-label">Senha - </span>
                  <span className="field-edit">Alterar</span>
                </label>

                <input
                  className="field-input"
                  type="password"
                  // placeholder="Digite sua senha"
                />
              </div>
            </div>
          </div>

          <div className="profile-actions">
            <button className="btn switch-account">Trocar de Conta</button>
            <button className="btn logout">SAIR</button>
          </div>
        </section>
      </div>
    </main>
  );
}