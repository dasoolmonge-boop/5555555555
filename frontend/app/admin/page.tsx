'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';

export default function AdminPage() {
  const [bookings, setBookings] = useState([
    { id: 1, customer_name: 'Иван Иванов', customer_phone: '+79991234567', room_type: 'Делюкс', check_in: '2026-04-01', status: 'pending' },
    { id: 2, customer_name: 'Анна Петрова', customer_phone: '+79997654321', room_type: 'Стандарт', check_in: '2026-04-05', status: 'confirmed' }
  ]);

  return (
    <main>
      <Header />
      <section style={{ paddingTop: '8rem' }}>
        <div className="container">
          <h1 style={{ marginBottom: '2rem' }}>Панель управления</h1>
          <div style={{ backgroundColor: 'white', borderRadius: '15px', padding: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Заявки на бронирование</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ textAlign: 'left', borderBottom: '2px solid #eee' }}>
                  <th style={{ padding: '1rem' }}>ID</th>
                  <th style={{ padding: '1rem' }}>Клиент</th>
                  <th style={{ padding: '1rem' }}>Телефон</th>
                  <th style={{ padding: '1rem' }}>Тип Номера</th>
                  <th style={{ padding: '1rem' }}>Дата заезда</th>
                  <th style={{ padding: '1rem' }}>Статус</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map(b => (
                  <tr key={b.id} style={{ borderBottom: '1px solid #f9f9f9' }}>
                    <td style={{ padding: '1rem' }}>{b.id}</td>
                    <td style={{ padding: '1rem' }}>{b.customer_name}</td>
                    <td style={{ padding: '1rem' }}>{b.customer_phone}</td>
                    <td style={{ padding: '1rem' }}>{b.room_type}</td>
                    <td style={{ padding: '1rem' }}>{b.check_in}</td>
                    <td style={{ padding: '1rem' }}>
                      <span style={{
                        padding: '0.3rem 0.8rem',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        backgroundColor: b.status === 'confirmed' ? '#e6fffa' : '#fff5f5',
                        color: b.status === 'confirmed' ? '#2c7a7b' : '#c53030'
                      }}>
                        {b.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
