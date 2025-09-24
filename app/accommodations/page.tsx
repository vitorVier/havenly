'use client'
import Link from 'next/link';
import './accommodations.css'
import React, { useState } from "react";

export default function Accommodations() {
  const [hotels] = useState([
    {
      id: 1,
      name: "Wish Serrano Resort",
      location: "Centro de Gramado",
      price: 962,
      oldPrice: 1287,
      rating: 9.0,
      reviews: 1009,
      perks: ["Café da manhã incluso", "Banheira de hidromassagem", "Piscina"],
      image: "https://picsum.photos/seed/hotel1/600/400",
    },
    {
      id: 2,
      name: "Hotel Sky",
      location: "Gramado",
      price: 231,
      oldPrice: 339,
      rating: 8.8,
      reviews: 1016,
      perks: ["Café da manhã incluso"],
      image: "https://picsum.photos/seed/hotel2/600/400",
    },
  ]);

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

      {/* Conteúdo */}
      <main className="content">
        {/* Filtros */}
        <aside className="filters">
          <h2>Filtrar por</h2>
          <label><input type="checkbox" /> Café da manhã incluso</label>
          <label><input type="checkbox" /> Piscina</label>
          <label><input type="checkbox" /> Banheira de hidromassagem</label>

          <div className="filter-price">
            <span>Preço por diária</span>
            <input type="range" min="0" max="2400" />
          </div>

          <button className='btn-filter'>Filtrar</button>
        </aside>

        {/* Lista de hotéis */}
        <section className="hotels">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="hotel-card">
              <img src={hotel.image} alt={hotel.name} />
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
                    <span className="rating"><span className='rating-decimal'>{hotel.rating}</span> Excelente</span>
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
