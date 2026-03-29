import { Mail, Phone, MapPin, Instagram, Disc as Vk } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '5rem 0' }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '4rem'
      }}>
        <div>
          <h3 style={{ color: 'white', marginBottom: '1.5rem' }}>CHALAMA</h3>
          <p style={{ color: '#aaa' }}>
            Ваш идеальный отдых в Туве. Комфорт, традиции и незабываемые впечатления.
          </p>
        </div>
        <div>
          <h4 style={{ color: 'var(--secondary)', marginBottom: '1.2rem' }}>Контакты</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={18} /> Кызыл, Интернациональная, 12
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Phone size={18} /> +7 (394) 222-10-82
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={18} /> Chalama18@yandex.ru
            </li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: 'var(--secondary)', marginBottom: '1.2rem' }}>Навигация</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li><a href="/rooms">Номера</a></li>
            <li><a href="/yurts">Юрты</a></li>
            <li><a href="/services">Услуги</a></li>
            <li><a href="/reviews">Отзывы</a></li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: 'var(--secondary)', marginBottom: '1.2rem' }}>Соцсети</h4>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#"><Instagram /></a>
            <a href="#"><Vk /></a>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '4rem', paddingPadding: '2rem 0 0', borderTop: '1px solid #333', color: '#666' }}>
        © {new Date().getFullYear()} Отель «Чалама». Все права защищены.
      </div>
    </footer>
  );
}
