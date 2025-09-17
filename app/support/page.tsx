import Link from 'next/link';
import Image from 'next/image';
import './support.css';

import creditCardIcon from '../../public/images/icons/creditCardIcon.png'
import empireIcon from '../../public/images/icons/empireIcon.png';
import cupomIcon from '../../public/images/icons/cupomIcon.png';
import accountIcon from '../../public/images/icons/accountIcon.png';
import padlockIcon from '../../public/images/icons/padlockIcon.png';
import privIcon from '../../public/images/icons/privIcon.png';
import arrowIcon from '../../public/images/icons/arrowIcon.png';
import wppIcon from '../../public/images/icons/wppIcon.png';
import touristIcon from '../../public/images/icons/touristIcon.png';
import magnifierIcon from '../../public/images/icons/magnifierIcon.png';

export default function SupportPage() {
  return (
    <main className="support-container">
      <h1 className="support-title">Central de suporte</h1>

      <p className="support-greeting">Olá!</p>

      <form className="support-search">
        <Image
            src={magnifierIcon}
            alt="Ícone de lupa"
            className="magnifier-icon"
        />

        <input type="text" placeholder="Como podemos ajudar?" />

        <button type="submit">BUSCAR</button>
      </form>

      <h2 className="support-subtitle">Explorar artigos de ajuda</h2>

      <div className="support-grid">
        <Link className="support-card" href="#">
          <Image
            src={creditCardIcon}
            alt="Ícone de cartão de crédito"
            className="card-icon"
          />
          Reembolsos e cobranças
          <Image
            src={arrowIcon}
            alt="Arrow Icon"
            className="arrow-icon"
          />
        </Link>

        <Link className="support-card" href="#">
          <Image
            src={empireIcon}
            alt="Ícone de estadias"
            className="card-icon"
          />
          Estadias
          <Image
            src={arrowIcon}
            alt="Ícone de cartão de crédito"
            className="arrow-icon"
          />
        </Link>

        <Link className="support-card" href="#">
          <Image
            src={cupomIcon}
            alt="Ícone de cupom"
            className="card-icon"
          />
          Cupons
          <Image
            src={arrowIcon}
            alt="Ícone de cartão de crédito"
            className="arrow-icon"
          />
        </Link>

        <Link className="support-card" href="#">
          <Image
            src={accountIcon}
            alt="Ícone de conta"
            className="card-icon"
          />
          Conta
          <Image
            src={arrowIcon}
            alt="Ícone de cartão de crédito"
            className="arrow-icon"
          />
        </Link>

        <Link className="support-card" href="#">
          <Image
            src={padlockIcon}
            alt="Ícone de cadeado"
            className="card-icon"
          />
          Segurança
          <Image
            src={arrowIcon}
            alt="Ícone de cartão de crédito"
            className="arrow-icon"
          />
        </Link>

        <Link className="support-card" href="#">
          <Image
            src={privIcon}
            alt="Ícone de privacidade"
            className="card-icon"
          />
          Privacidade
          <Image
            src={arrowIcon}
            alt="Ícone de cartão de crédito"
            className="arrow-icon"
          />
        </Link>
      </div>

      <footer className="support-footer">
        <Link href="https://wa.me/55555555555" target="_blank" rel="noopener noreferrer" className='wpp-link'>
          Fale conosco através do nosso Whatsapp (55) 5555-5555
          <Image
            src={wppIcon}
            alt="Ícone do Whatsapp"
            className="wpp-icon"
          />
        </Link>
      </footer>

      <Image
        src={touristIcon}
        alt="Ícone de turista"
        className="tourist-icon"
      />
    </main>
  );
}