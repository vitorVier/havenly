import '../details.css';
import Image from 'next/image';

import locIcon from '../../../public/images/icons/locIcon.png';
import calendarIcon from '../../../public/images/icons/calendarIcon.png';
import userIcon from '../../../public/images/icons/userIcon.png';
import shareIcon from '../../../public/images/icons/shareIcon.png';
import loveIcon from '../../../public/images/icons/loveIcon.png';
import terraceIcon from '../../../public/images/icons/terraceIcon.png';
import gardenIcon from '../../../public/images/icons/gardenIcon.png';
import garageIcon from '../../../public/images/icons/garageIcon.png';
import elevatorIcon from '../../../public/images/icons/elevatorIcon.png';
import wifiIcon from '../../../public/images/icons/wifiIcon.png';

export default function Details() {
  return (
    <div className="details-content">
        <div className="details-filters">
            <div className="details-filter">
                <Image
                    src={locIcon}
                    alt="Localização"
                    width={24}
                    height={24}
                />

                <span>São Paulo - SP</span>
            </div>

            <div className="details-filter">
                <Image
                    src={calendarIcon}
                    alt="Datas"
                    width={24}
                    height={24}
                />
            
                <span className='details-filter-span'>
                    <span className="details-filter-label">Datas</span>
                    <span>23 de ago. - 27 de ago.</span>
                </span>
            </div>

            <div className="details-filter">
                <Image
                    src={userIcon}
                    alt="Hóspedes"
                    width={24}
                    height={24}
                />

                <span className='details-filter-span'>
                    <span className="details-filter-label">Hóspedes</span>
                    <span>2 hóspedes, 1 quarto</span>
                </span>
            </div>
        </div>

        <main className="details-main">
            <div className="details-header">
                <h1>
                    Apartamentos novos, com ótima estrutura e área comum próximo à USP - Caza Noz
                </h1>

                <div className="details-header-actions">
                    <Image 
                        src={loveIcon} 
                        alt="Favoritar" 
                        width={24} 
                        height={24}
                        style={{objectFit: 'contain', cursor: 'pointer'}}
                    />

                    <Image 
                        src={shareIcon} 
                        alt="Compartilhar" 
                        width={24} 
                        height={24} 
                        style={{objectFit: 'contain', cursor: 'pointer'}}
                    />
                </div>
            </div>

            <div className="details-body">
                <div className="details-gallery">
                    <section className="details-gallery-section">
                        <div className='details-gallery-main-side'>
                            <div className="details-gallery-main">
                                <Image src="/images/room.jpg" alt="Main" width={600} height={400} style={{objectFit: 'cover', width: '100%', height: '100%'}} />
                            </div>

                            <div className="details-gallery-side">
                                <Image src="/images/room2.jpg" alt="Side1" width={180} height={120} style={{objectFit: 'cover', width: '100%', height: '100%'}} />
                                <Image src="/images/room3.jpg" alt="Side2" width={180} height={120} style={{objectFit: 'cover', width: '100%', height: '100%'}} />
                                <Image src="/images/room4.jpg" alt="Side3" width={180} height={120} style={{objectFit: 'cover', width: '100%', height: '100%'}} />
                            </div>
                        </div>

                        <div className="details-description">
                            <span>
                                <p style={{fontWeight: 'bold'}}>Você pode ter direito a um desconto Genius em Apartamentos novos, com ótima estrutura e área comum próximo à USP - Caza Noz.</p><br />
                                <p style={{color: '#888'}}>Os descontos Genius nesta acomodação estão sujeitos às datas da reserva, datas da estadia e às outras ofertas disponíveis.</p><br />
                                
                                <span className="details-description-label">Dados confiáveis:</span><br />
                                <p style={{color: '#888', marginTop: '5px'}}>Os hóspedes dizem que a descrição e as fotos desta acomodação são muito precisas.</p>
                            </span>

                            <button className="details-description-btn">Ver mais</button>
                        </div>
                    </section>
                </div>
            
                <div className="details-features">
                    <div className="details-feature">
                        <Image src={wifiIcon} alt="Wifi" width={24} height={24} style={{objectFit: 'contain'}} /> 
                        Wifi
                    </div>

                    <div className="details-feature">
                        <Image src={elevatorIcon} alt="Elevador" width={24} height={24} style={{objectFit: 'contain'}} /> 
                        Elevador
                    </div>

                    <div className="details-feature">
                        <Image src={garageIcon} alt="Garagem" width={24} height={24} style={{objectFit: 'contain'}} /> 
                        Garagem
                    </div>

                    <div className="details-feature">
                        <Image src={gardenIcon} alt="Jardim" width={24} height={24} style={{objectFit: 'contain'}} /> 
                        Jardim
                    </div>
                    
                    <div className="details-feature">
                        <Image src={terraceIcon} alt="Terraço" width={24} height={24} style={{objectFit: 'contain'}} /> 
                        Terraço
                    </div>
                </div>

                <div className="details-rating">
                    <div className="details-rating-header">
                        <div style={{display: 'flex', flexDirection: 'column', gap: '3px'}}>
                            <span className="details-rating-title">Excelente</span>
                            <div className="details-rating-sub">264 Avaliações</div>
                        </div>
                    
                        <span className="details-rating-score">9,2</span>
                    </div>

                    <hr />
                
                    <div className="details-rating-comments">
                        <div className="details-rating-question">O que os hóspedes falam sobre esta acomodação?</div>
                        
                        <div className="details-rating-comment">
                            <span className="details-rating-comment-text">“Ótima localização, perto de supermercados facilidade para ônibus e próximo do metrô.”</span>
                            <span className="details-rating-comment-author">Anna Eich</span>
                        </div>

                        <div className="details-rating-comment">
                            <span className="details-rating-comment-text">“As instalações são bonitas, joviais, apresentam uma imagem positiva de consciência ambiental e social. A segurança no acesso e dentro do prédio bastante efetivas.”</span>
                            <span className="details-rating-comment-author">Darles Thume</span>
                        </div>

                        <div className="details-rating-comment">
                            <span className="details-rating-comment-text">“Ambiente super calmo, tranquilo... ótima localização perto dos shoppings, comodidade excelente, gostei dms”</span>
                            <span className="details-rating-comment-author">Julia Rafaela</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>    
    </div>
  );
}