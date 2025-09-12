import Link from 'next/link';
import Image from 'next/image';
import './header.css';

import logoImg from '../../../public/images/header/logoImg.png';
import logoIcon from '../../../public/images/header/logoIcon.png';
import br1 from '../../../public/images/header/br1.png';

export function Header() {
    return (
        <header>
            <div className="header-content">
                <div className='logo-select'>
                    <Link href="/">
                        <div className='divLogo'>
                            <Image
                                alt='Logo icon'
                                src={logoIcon}
                                className='imgIcon'
                            />
                            <Image
                                alt='Logo image'
                                src={logoImg}
                                className='imgLogo'
                            />
                        </div>
                    </Link>

                    <select name="selector" id="selector">
                        <option value="0">Encontre sua estadia ideal</option>
                    </select>
                </div>

                <nav>
                    <select name="lang" id="lang">
                        <option value="0">BRL</option>
                        <option value="1">ENG</option>
                        <option value="2">SPN</option>
                    </select>             
                    
                    <Link href="#">Minhas Reservas</Link>
                    <Link href="#">Minha Conta</Link>
                    <Link href="#">Suporte</Link>
                    
                    <div className="buttons">
                        <Link href="#">
                            <button>
                                Entrar
                            </button>
                        </Link>
                        
                        <Link href="#">
                            <button>
                                Cadastrar    
                            </button>                
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}