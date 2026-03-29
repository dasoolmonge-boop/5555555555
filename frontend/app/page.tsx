import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Hotel, Mountain, Utensils, Beer } from 'lucide-react';

export default function Home() {
  const entities = [
    {
      id: 'chalama-hotel',
      name: 'Отель "Чалама"',
      icon: <Hotel size={40} />,
      desc: 'Премиальный отдых в центре Кызыла. Уютные залы и комфортабельные номера.',
      link: '/rooms',
      bg: 'https://www.chalamahotel.ru/upload/iblock/c38/z9p9f5b2b2b2b2b2b2b2b2b2b2b2b2b2.jpg'
    },
    {
      id: 'haan-dyt',
      name: 'Хаан-Дыт',
      icon: <Mountain size={40} />,
      desc: 'Уникальное погружение в природу в традиционных юртах с современным комфортом.',
      link: '/yurts',
      bg: 'https://www.chalamahotel.ru/upload/iblock/831/94827eb0-880c-43f1-9ade-b39f1595166f.jpg'
    },
    {
      id: 'restaurant',
      name: 'Ресторан "Чалама"',
      icon: <Utensils size={40} />,
      desc: 'Паназиатская и национальная тувинская кухня. Банкеты и фуршеты.',
      link: '/restaurant',
      bg: 'https://www.chalamahotel.ru/upload/iblock/2c1/1c7f4e91-c67d-41a4-9783-c75c88b22e1c.jpg'
    },
    {
      id: 'bar-skala',
      name: 'Бар "Скала"',
      icon: <Beer size={40} />,
      desc: 'Атмосферное место для вечернего отдыха и коктейлей.',
      link: '/bar',
      bg: 'https://www.chalamahotel.ru/upload/iblock/34b/34bde57e-3ef1-4d1a-8c7a-563b7c93e3e1.jpg'
    }
  ];

  return (
    <main style={{ backgroundColor: '#fff' }}>
      <Header />
      <section style={{ 
        height: '80vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.7)), url("https://www.chalamahotel.ru/upload/iblock/c38/z9p9f5b2b2b2b2b2b2b2b2b2b2b2b2b2.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div className="container animate-slide-up">
          <h1 style={{ fontSize: '4.5rem', marginBottom: '1rem', color: 'white', fontWeight: 800 }}>ООО «ЧАЛАМА»</h1>
          <p style={{ fontSize: '1.4rem', color: 'var(--secondary)', maxWidth: '800px', margin: '0 auto', fontWeight: 300, letterSpacing: '4px' }}>
            ИСКУССТВО ТУВИНСКОГО ГОСТЕПРИИМСТВА
          </p>
          <div style={{ marginTop: '3rem' }}>
             <Link href="#entities" className="btn btn-gold" style={{ padding: '1.2rem 3rem', borderRadius: '50px' }}>Исследовать комплекс</Link>
          </div>
        </div>
      </section>

      <section id="entities" style={{ padding: '8rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-reveal>
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Наши Направления</h2>
            <div style={{ width: '80px', height: '3px', background: 'var(--secondary)', margin: '0 auto' }}></div>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
            gap: '3rem'
          }}>
            {entities.map((entity, index) => (
              <Link key={entity.id} href={entity.link} style={{ display: 'block', textDecoration: 'none' }} data-reveal>
                <div style={{
                  height: '500px',
                  borderRadius: '30px',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'flex-end',
                  cursor: 'pointer',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                  transition: 'all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'
                }}
                className="entity-card-hover"
                >
                  <img src={entity.bg} alt={entity.name} style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0,
                    transition: 'transform 1s ease'
                  }} className="card-bg" />
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      width: '100%',
                      padding: '3rem',
                      background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
                      color: 'white',
                      zIndex: 1
                    }}>
                    <div style={{ 
                        backgroundColor: 'var(--secondary)', 
                        color: 'white', 
                        width: '70px', 
                        height: '70px', 
                        borderRadius: '20px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        marginBottom: '1.5rem',
                        boxShadow: '0 10px 20px rgba(201, 160, 80, 0.3)'
                    }}>
                        {entity.icon}
                    </div>
                    <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 700 }}>{entity.name}</h2>
                    <p style={{ color: '#aaa', fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 300 }}>{entity.desc}</p>
                    <span style={{ 
                        color: 'var(--secondary)', 
                        fontWeight: 700, 
                        fontSize: '0.9rem', 
                        letterSpacing: '2px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        ПОДРОБНЕЕ —
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .entity-card-hover:hover .card-bg {
          transform: scale(1.1);
        }
        .entity-card-hover:hover {
          transform: translateY(-15px);
          boxShadow: 0 30px 60px rgba(0,0,0,0.2);
        }
      `}</style>
      <Footer />
    </main>
  );
}
