'use client';

import { useState } from 'react';
import Calendar from './Calendar';
import { Calendar as CalendarIcon, User, Phone, Check } from 'lucide-react';

interface BookingFormProps {
  roomName: string;
  price?: number;
}

export default function BookingForm({ roomName, price }: BookingFormProps) {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState('');
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="animate-scale" style={{
        background: 'white',
        padding: '3rem',
        borderRadius: '20px',
        textAlign: 'center',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          background: 'var(--secondary)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem',
          color: 'white'
        }}>
          <Check size={40} />
        </div>
        <h2>Заявка принята!</h2>
        <p style={{ color: '#666', marginTop: '1rem' }}>Мы свяжемся с вами в ближайшее время для подтверждения бронирования.</p>
        <button 
          onClick={() => { setIsSubmitted(false); setStep(1); }}
          className="btn btn-gold" 
          style={{ marginTop: '2rem' }}
        >
          Вернуться
        </button>
      </div>
    );
  }

  return (
    <div className="animate-fade" style={{
      background: 'white',
      padding: '2rem',
      borderRadius: '20px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      border: '1px solid #eee'
    }}>
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Бронирование</h2>
        <p style={{ color: 'var(--secondary)', fontWeight: 600 }}>{roomName}</p>
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{ 
          flex: 1, height: '4px', borderRadius: '2px', 
          background: step >= 1 ? 'var(--secondary)' : '#eee' 
        }} />
        <div style={{ 
          flex: 1, height: '4px', borderRadius: '2px', 
          background: step >= 2 ? 'var(--secondary)' : '#eee' 
        }} />
      </div>

      {step === 1 ? (
        <div className="animate-slide-up">
          <p style={{ marginBottom: '1rem', fontWeight: 600 }}>Выберите дату заезда:</p>
          <Calendar onSelect={(d) => { setDate(d); setStep(2); }} />
          {price && <p style={{ marginTop: '1.5rem', textAlign: 'center' }}>Итого от: <strong>{price} ₽</strong></p>}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="animate-slide-up">
          <p style={{ marginBottom: '1.5rem', color: '#666' }}>
            <CalendarIcon size={16} style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} />
            Выбранная дата: <strong>{date}</strong>
          </p>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Ваше имя</label>
            <div style={{ position: 'relative' }}>
              <User size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
              <input 
                type="text" 
                required
                placeholder="Иван Иванов"
                style={{
                  width: '100%', padding: '1rem 1rem 1rem 3rem', borderRadius: '10px',
                  border: '1px solid #ddd', outline: 'none', transition: 'var(--transition)'
                }}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, name: e.target.value})}
              />
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Телефон</label>
            <div style={{ position: 'relative' }}>
              <Phone size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
              <input 
                type="tel" 
                required
                placeholder="+7 (___) ___-__-__"
                style={{
                  width: '100%', padding: '1rem 1rem 1rem 3rem', borderRadius: '10px',
                  border: '1px solid #ddd', outline: 'none', transition: 'var(--transition)'
                }}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <button 
              type="button" 
              onClick={() => setStep(1)}
              style={{ flex: 1, padding: '1rem', borderRadius: '10px', border: '1px solid #ddd', background: 'none', cursor: 'pointer' }}
            >
              Назад
            </button>
            <button 
              type="submit" 
              className="btn btn-gold"
              style={{ flex: 2, border: 'none' }}
            >
              Забронировать
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
