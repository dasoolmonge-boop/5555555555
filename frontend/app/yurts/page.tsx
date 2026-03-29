'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';
import { useState } from 'react';

const yurts = [
  { id: 1, name: 'Малые юрты №1, №2, №3', capacity: 'до 4 чел', priceWeekday: 10000, priceWeekend: 15000 },
  { id: 2, name: 'Большая юрта №4', capacity: 'до 6 чел', priceWeekday: 15000, priceWeekend: 20000, extra: 'Доп. место: 1500р/чел' }
];

export default function HaanDytPage() {
  const [selectedYurt, setSelectedYurt] = useState(yurts[0]);

  return (
    <main>
      <Header />
      <section style={{ 
        paddingTop: '8rem',
        background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://www.chalamahotel.ru/upload/iblock/831/94827eb0-880c-43f1-9ade-b39f1595166f.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        paddingBottom: '5rem'
      }}>
        <div className="container animate-slide-up">
          <h1 style={{ color: 'white', fontSize: '4rem' }}>Хаан-Дыт</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--secondary)', fontWeight: 600, letterSpacing: '3px' }}>ЗАГОРОДНЫЙ ЮРТОЧНЫЙ ОТЕЛЬ</p>
        </div>
      </section>

      <section>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem' }}>
          <div>
            <h2 style={{ marginBottom: '2.5rem' }} data-reveal>Цены на проживание</h2>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {yurts.map((yurt) => (
                <div 
                  key={yurt.id} 
                  data-reveal
                  style={{ 
                    padding: '2.5rem', 
                    border: selectedYurt.id === yurt.id ? '2px solid var(--secondary)' : '1px solid #eee', 
                    borderRadius: '20px',
                    cursor: 'pointer',
                    transition: 'var(--transition)',
                    backgroundColor: 'white',
                    boxShadow: selectedYurt.id === yurt.id ? '0 15px 30px rgba(201, 160, 80, 0.1)' : 'none'
                  }}
                  onClick={() => setSelectedYurt(yurt)}
                >
                  <h3 style={{ color: selectedYurt.id === yurt.id ? 'var(--secondary)' : 'inherit' }}>{yurt.name}</h3>
                  <p style={{ color: '#666', marginBottom: '1.5rem' }}>Вместимость: {yurt.capacity}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div style={{ background: '#fdfbf7', padding: '1rem', borderRadius: '10px' }}>
                      <p style={{ fontSize: '0.8rem', color: '#999' }}>Вс - Чт</p>
                      <p style={{ fontSize: '1.4rem', fontWeight: 700 }}>{yurt.priceWeekday} ₽</p>
                    </div>
                    <div style={{ background: '#fdfbf7', padding: '1rem', borderRadius: '10px' }}>
                      <p style={{ fontSize: '0.8rem', color: '#999' }}>Пт, Сб, Праздники</p>
                      <p style={{ fontSize: '1.4rem', fontWeight: 700 }}>{yurt.priceWeekend} ₽</p>
                    </div>
                  </div>
                  {yurt.extra && <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--secondary)', fontWeight: 600 }}>{yurt.extra}</p>}
                </div>
              ))}
            </div>

            <h2 style={{ marginTop: '5rem', marginBottom: '2.5rem' }} data-reveal>Баня и Банный чан</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div style={{ padding: '2rem', border: '1px solid #eee', borderRadius: '20px' }} data-reveal>
                <h4 style={{ marginBottom: '1rem' }}>Баня (2 часа)</h4>
                <p>При бронировании с юртой: <strong style={{color:'var(--secondary)'}}>6000 ₽</strong></p>
                <p>В день заезда: <strong style={{color:'var(--secondary)'}}>7000 ₽</strong></p>
                <p style={{ fontSize: '0.8rem', color: '#999', marginTop: '1rem' }}>Каждый последующий час: 2000 ₽</p>
              </div>
              <div style={{ padding: '2rem', border: '1px solid #eee', borderRadius: '20px', textAlign: 'center' }} data-reveal>
                <h4 style={{ marginBottom: '1rem' }}>Банный чан</h4>
                <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--secondary)' }}>5000 ₽</p>
                <p style={{ fontSize: '0.9rem', color: '#999' }}>Продается вместе с баней</p>
              </div>
            </div>
          </div>
          
          <div style={{ position: 'sticky', top: '120px' }} className="animate-fade">
             <div style={{ marginBottom: '1.5rem', textAlign: 'center' }} data-reveal>
                <div style={{ 
                  display: 'inline-block', 
                  padding: '0.5rem 1.2rem', 
                  backgroundColor: '#fdfbf7', 
                  border: '1px solid var(--secondary)',
                  borderRadius: '50px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--secondary)'
                }}>
                  ВЫБРАНА ЮРТА: {selectedYurt.name.toUpperCase()}
                </div>
              </div>
            <BookingForm roomName={`Хаан-Дыт - ${selectedYurt.name}`} price={selectedYurt.priceWeekday} />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
