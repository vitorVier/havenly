import './page.css';
import Image from 'next/image';

import planeIcon from '../public/images/icons/planeIcon.png';
import calendarIcon from '../public/images/icons/calendarIcon.png';
import userIcon from '../public/images/icons/userIcon.png';
import vIcon from '../public/images/icons/vIcon.png';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="home-container">
      <main>
        <section className="inputs-home">
          <div className='input-group'>
            <Image
              alt='plane image'
              src={planeIcon}
              className='planeIcon'
            />
            <input
              type="text"
              placeholder="Para onde você vai?" 
            />
          </div>

          <div className='input-group'>
            <Image
              alt='calendar image'
              src={calendarIcon}
              className='calendarIcon'
            />
            <input
              type="date"
              placeholder="Datas" 
            />
          </div>

          <div className='input-group'>
            <Image
              alt='user image'
              src={userIcon}
              className='userIcon'
            />
            <input
              type="number"
              placeholder="Hospedes?" 
            />
          </div>
        </section>

        <div className='slogan'>
          <h1>
            Descubra sua <br />
            próxima experiência <br />
            inesquecível
          </h1>

          <ul>
            <li>
              <Image src={vIcon} alt='✓' className='liImage'/> <p>Cancelamento grátis na marioria dos quartos</p>
            </li>

            <li>
              <Image src={vIcon} alt='✓' className='liImage'/> <p>Pagamento parcelado</p>
            </li>

            <li>
              <Image src={vIcon} alt='✓' className='liImage'/> <p>Avaliações reais de hóspedes</p>
            </li>
          </ul>

          <Link href="accommodations">
            <button className='search'>
              BUSCAR HOSPEDAGEM
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
