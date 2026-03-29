import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Utensils, Star, Calendar } from 'lucide-react';

export default function RestaurantPage() {
  return (
    <main>
      <Header />
      <section style={{ 
        paddingTop: '8rem',
        background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://www.chalamahotel.ru/upload/iblock/2c1/1c7f4e91-c67d-41a4-9783-c75c88b22e1c.jpg")',
        backgroundSize: 'cover',
        color: 'white',
        paddingBottom: '5rem',
        textAlign: 'center'
      }}>
        <div className="container">
            <h1 style={{ color: 'white', fontSize: '3rem' }}>Ресторан «Чалама»</h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '1rem auto' }}>
              Вкусы Азии и национальный колорит Тувы в каждой подаче.
            </p>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 style={{ marginBottom: '3rem', textAlign: 'center' }}>Банкеты и Мероприятия</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ padding: '2.5rem', border: '1px solid #eee', borderRadius: '20px', backgroundColor: '#fdfbf7' }}>
              <h3>Стоимость услуг ресторана</h3>
              <ul style={{ listStyle: 'none', marginTop: '1.5rem', display: 'grid', gap: '1rem' }}>
                <li>Фуршет (10 чел.) — <strong>12 500 ₽</strong></li>
                <li>Коктейльный бар (10 чел.) — <strong>12 000 ₽</strong></li>
                <li>Банкет (с чел.) — <strong>3 500 ₽</strong></li>
                <li style={{ color: 'var(--secondary)', fontWeight: 600 }}>(Акция 2500 ₽ до 30 марта 2026)</li>
                <li>Аренда ресторана + терраса — <strong>10 000 ₽/час</strong></li>
                <li style={{ fontSize: '0.8rem', color: '#999' }}>(Минимум 3 часа)</li>
              </ul>
            </div>

            <div style={{ padding: '2.5rem', border: '1px solid #eee', borderRadius: '20px', backgroundColor: 'var(--primary)', color: 'white' }}>
              <h3 style={{ color: 'white' }}>Мероприятия "Хаан-Дыт"</h3>
              <ul style={{ listStyle: 'none', marginTop: '1.5rem', display: 'grid', gap: '1rem' }}>
                <li style={{ borderBottom: '1px solid #333', paddingBottom: '1rem' }}>
                  <strong>Выездные регистрации</strong><br />
                  <span style={{ fontSize: '1.5rem', color: 'var(--secondary)' }}>40 000 ₽</span><br />
                  <span style={{ fontSize: '0.8rem', color: '#aaa' }}>(До 4 часов, полное оформление и регистратор)</span>
                </li>
                <li>Оформляется регистратор (муж/жен)</li>
                <li>Текст на тувинском/русском языке</li>
                <li style={{ fontSize: '0.9rem', color: 'var(--secondary)' }}>Брони принимаются после 1 апреля 2026.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
