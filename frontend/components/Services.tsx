import { Coffee, Thermometer, Beer, Users } from 'lucide-react';

const services = [
  {
    icon: <Coffee size={40} />,
    title: 'Кафе "Чалама"',
    desc: 'Паназиатская и национальная тувинская кухня. Завтраки включены.'
  },
  {
    icon: <Thermometer size={40} />,
    title: 'Сауна',
    desc: 'Уютная сауна для отдыха всей семьей. Тепло и релакс.'
  },
  {
    icon: <Beer size={40} />,
    title: 'Бар "Скала"',
    desc: 'Премиальные напитки и атмосфера для вечернего отдыха.'
  },
  {
    icon: <Users size={40} />,
    title: 'Конференц-зал',
    desc: 'Все необходимое оборудование для ваших деловых встреч.'
  }
];

export default function Services() {
  return (
    <section id="services" style={{ backgroundColor: 'var(--bg-soft)' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>Наши Услуги</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {services.map((s, i) => (
            <div key={i} style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '10px',
              textAlign: 'center',
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
              transition: 'var(--transition)'
            }}>
              <div style={{ color: 'var(--secondary)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                {s.icon}
              </div>
              <h3 style={{ marginBottom: '1rem' }}>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
