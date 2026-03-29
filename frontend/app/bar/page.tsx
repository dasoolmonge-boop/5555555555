import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BarPage() {
  return (
    <main>
      <Header />
      <section style={{ 
        height: '100vh',
        background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url("https://www.chalamahotel.ru/upload/iblock/34b/34bde57e-3ef1-4d1a-8c7a-563b7c93e3e1.jpg")',
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ color: 'white', fontSize: '4rem', marginBottom: '1rem' }}>Бар «СКАЛА»</h1>
          <p style={{ fontSize: '1.5rem', color: 'var(--secondary)', fontWeight: 300, letterSpacing: '2px' }}>EXCUSIVE DRINKS & ATMOSPHERE</p>
          <div style={{ marginTop: '3rem' }}>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', opacity: 0.8 }}>
              Откройте для себя вечерний Кызыл в атмосфере изысканности. Авторские коктейли, премиальная карта напитков и вид на горы.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
