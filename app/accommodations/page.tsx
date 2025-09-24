// app/accommodations/page.tsx
'use client'
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import '../../public/services/api.js'; 
import { jsonBinAPI } from '../../public/services/api';
import './accommodations.css';

type ApiHotel = any; // tipagem relaxada para aceitar seu JSON sem erro
type Hotel = {
  id: number | string;
  name: string;
  location: string;
  price: number;
  oldPrice?: number | null;
  rating: number;
  reviews: number;
  perks: string[];
  image: string;
};

export default function Accommodations() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadHotels() {
      try {
        setLoading(true);
        setError(null);

        const data = await jsonBinAPI.fetchPropertyData();
        // seu JSON tem um array "hotels"
        const arr: ApiHotel[] = data?.hotels ?? [];

        // mapeia do formato da API para o formato usado no componente
        const normalized: Hotel[] = arr.map((h: ApiHotel) => {
          const address = h.address ?? {};
          const neigh = address.neighboorhood || address.neighborhood || '';
          const city = address.city || '';
          const locationStr = [neigh, city].filter(Boolean).join(', ') || h.address?.street || 'Local não informado';

          const priceAmount = (h.price && h.price.amount) ? Number(h.price.amount) : (h.price?.amount ? Number(h.price.amount) : 0);
          const rating = h.review?.rating ? parseFloat(String(h.review.rating)) : (h.review?.rating ? Number(h.review.rating) : 0);
          const image = Array.isArray(h.images) && h.images.length > 0 ? h.images[0] : `https://picsum.photos/seed/hotel${h.id}/600/400`;

          return {
            id: h.id ?? Math.random().toString(36).slice(2, 9),
            name: h.name ?? 'Nome não informado',
            location: locationStr,
            price: priceAmount,
            oldPrice: null, // seu JSON não traz oldPrice; mantive null (pode ajustar se houver campo)
            rating: Number.isNaN(rating) ? 0 : rating,
            reviews: typeof h.reviews === 'number' ? h.reviews : 0,
            perks: Array.isArray(h.amenities) ? h.amenities : [],
            image,
          } as Hotel;
        });

        if (mounted) setHotels(normalized);
      } catch (err: any) {
        console.error('Erro ao carregar hotéis:', err);
        if (mounted) setError('Falha ao buscar hotéis. Verifique a API.');
      } finally {
        if (mounted) setLoading(false);
      }
    }

    loadHotels();

    return () => { mounted = false; };
  }, []);

  return (
    <div className="accommodations-container">
      {/* Barra de pesquisa */}
      <section className="search-bar">
        <div className="search-input">
          <input type="text" placeholder="Destino" />
        </div>
        <div className="search-input">
          <input type="date" />
          <span>-</span>
          <input type="date" />
        </div>
        <div className="search-input">
          <input type="text" placeholder="2 hóspedes, 1 quarto" />
        </div>
        <button className="search-btn">Buscar</button>
      </section>

      <main className="content">
        {/* Filtros */}
        <aside className="filters">
          <h2>Filtrar por</h2>
          <label><input type="checkbox" /> Café da manhã incluso</label>
          <label><input type="checkbox" /> Piscina</label>
          <label><input type="checkbox" /> Garagem</label>
          <label><input type="checkbox" /> Banheira de hidromassagem</label>

          <div className="filter-price">
            <span>Preço por diária</span>
            <input type="range" min="0" max="2400" />
          </div>

          <button className='btn-filter'>Filtrar</button>
        </aside>

        {/* Lista de hotéis */}
        <section className="hotels">
          {loading && <p>Carregando acomodações...</p>}
          {error && <p className="error">{error}</p>}

          {!loading && !error && hotels.length === 0 && (
            <p>Nenhuma acomodação encontrada.</p>
          )}

          {!loading && !error && hotels.map((hotel) => (
            <div key={hotel.id} className="hotel-card">
              <Link href={`/details/${hotel.id}`}>
                <img src={hotel.image} alt={hotel.name} />
              </Link>
              <div className="hotel-info">
                <h3>{hotel.name}</h3>

                <p className="location">{hotel.location}</p>

                <div className="perks">
                  {hotel.perks.map((perk, i) => (
                    <span key={i}>• {perk} </span>
                  ))}
                </div>

                <div className="hotel-footer">
                  <div>
                    <span className="rating"><span className='rating-decimal'>{hotel.rating}</span> {hotel.rating >= 9 ? 'Excelente' : hotel.rating >= 8 ? 'Muito bom' : 'Bom'}</span>
                    <p className="reviews">{hotel.reviews} avaliações</p>
                  </div>

                  <div className="price">
                    {hotel.oldPrice && (
                      <p className="old-price">R$ {hotel.oldPrice}</p>
                    )}

                    <p className="new-price">R$ {hotel.price}</p>

                    <Link href={`/details/${hotel.id}`}>
                      <button className='btn-book'>Reservar</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
