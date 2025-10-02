'use client'
import './reservations.css';
import Image from 'next/image';

import treshIcon from '../../public/images/icons/trashIcon.png';
import Link from 'next/link';
import { toast } from 'react-toastify';
import type { Hotel } from '@/public/types/hotel';
import { useEffect, useState } from 'react';

export default function Reservations() {
  const [hotels, setHotels] = useState<Hotel[]>([])

  useEffect(() => {
    const myList = localStorage.getItem('@havenly');

    if (myList) {
      setHotels(JSON.parse(myList));
    } else {
      setHotels([]);
    }
  }, [])

  function deleteReservation(id: string | number) {
    let filterHotels = hotels.filter((item) => {
      return(item.id !== id)
    })

    setHotels(filterHotels);
    localStorage.setItem('@havenly', JSON.stringify(filterHotels));
    toast.success('Reserva excluída com sucesso!')
  }

  return (
    <div className="reservations-content">
      <h1 className="reservations-title">Minhas Reservas</h1>

      {hotels.length === 0 && (
        <div className='no-reserve'>
          <span>Você não possui nenhuma reserva.</span>
        </div>
      )}

      <div className="reservations-grid">
        {hotels.map((res) => (
          <div className="reservation-card" key={res.id}>
            <div className="reservation-image">
              <Image 
                src={res.image} 
                alt='Main image'
                width={500}
                height={300}
                style={{
                  objectFit: 'cover', 
                  width: '100%', 
                  height: '100%'
                }}
              />
            </div>

            <div className="reservation-info">
              <div className="reservation-details">
                <div className="reservation-title">{res.name}</div>
                <div className="reservation-location">{res.location}</div>
                <div className="reservation-dates">Teste</div>
              </div>
              
              <div className="reservation-actions">
                <button 
                  className="reservation-delete" 
                  onClick={() => deleteReservation(res.id)}
                >
                  <Image 
                    src={treshIcon} 
                    alt="Excluir" 
                    width={22}
                    height={22}
                  />
                </button>

                <Link href={`/details/${res.id}`}>
                  <button className="reservation-details-btn">
                    Detalhes
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}