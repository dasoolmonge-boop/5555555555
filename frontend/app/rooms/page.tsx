'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';
import { useState } from 'react';

const rooms = [
  { id: 1, name: 'Джуниор Сюит', price: 10450, desc: 'Одна большая двухспальная кровать' },
  { id: 2, name: 'Стандарт (Одноместный)', price: 6950, desc: 'Односпальная кровать' },
  { id: 3, name: 'Стандарт (Двухместный)', price: 7950, desc: 'Одна большая двухспальная кровать' },
  { id: 4, name: 'Повышенной Комфортности', price: 8300, desc: 'Одна большая двухспальная кровать' },
  { id: 5, name: 'Повышенной Комфортности (Twin)', price: 9700, desc: 'Две раздельные кровати' },
  { id: 6, name: 'Стандарт (Twin)', price: 8750, desc: 'Две раздельные кровати' },
  { id: 7, name: 'Стандарт Студия', price: 13200, desc: 'Одна большая двухспальная кровать' },
  { id: 8, name: 'Делюкс', price: 8800, desc: 'Одна большая двухспальная кровать' },
  { id: 9, name: 'Делюкс (Twin)', price: 10200, desc: 'Две раздельные кровати' }
];

export default function RoomsPage() {
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);

  return (
    <main>
      <Header />
      <section style={{ 
        paddingTop: '10rem', 
        paddingBottom: '5rem',
        background: 'linear-gradient(rgba(0,0,0,0.05), transparent)'
      }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'start' }}>
            <div className="animate-slide-up">
              <h1 style={{ marginBottom: '1rem', fontSize: '3rem' }}>Отель «Чалама»</h1>
              <p style={{ color: '#666', marginBottom: '3rem', fontSize: '1.1rem' }}>
                Выберите категорию номера для бронирования. Все номера оснащены современными удобствами.
              </p>
              
              <div style={{ display: 'grid', gap: '1rem' }}>
                {rooms.map((room, i) => (
                  <div 
                    key={room.id} 
                    data-reveal
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '1.5rem 2rem',
                      border: selectedRoom.id === room.id ? '2px solid var(--secondary)' : '1px solid #eee',
                      borderRadius: '15px',
                      backgroundColor: 'white',
                      cursor: 'pointer',
                      transition: 'var(--transition)',
                      boxShadow: selectedRoom.id === room.id ? '0 10px 20px rgba(201, 160, 80, 0.1)' : 'none'
                    }}
                    onClick={() => setSelectedRoom(room)}
                  >
                    <div>
                      <h3 style={{ margin: 0, color: selectedRoom.id === room.id ? 'var(--secondary)' : 'inherit' }}>{room.name}</h3>
                      <p style={{ color: '#999', fontSize: '0.8rem', marginTop: '0.3rem' }}>{room.desc}</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--primary)' }}>{room.price} ₽</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={{ position: 'sticky', top: '120px' }} className="animate-fade">
              <div style={{ marginBottom: '1.5rem', textAlign: 'center' }} data-reveal>
                <div style={{ 
                  display: 'inline-block', 
                  padding: '0.5rem 1rem', 
                  backgroundColor: '#fdfbf7', 
                  border: '1px solid var(--secondary)',
                  borderRadius: '50px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--secondary)'
                }}>
                  ВЫБРАН НОМЕР: {selectedRoom.name.toUpperCase()}
                </div>
              </div>
              <BookingForm roomName={`Отель Чалама - ${selectedRoom.name}`} price={selectedRoom.price} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
