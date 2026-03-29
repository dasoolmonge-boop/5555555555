export default function Hero() {
  return (
    <section style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://www.chalamahotel.ru/upload/iblock/c38/z9p9f5b2b2b2b2b2b2b2b2b2b2b2b2b2.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      textAlign: 'center'
    }}>
      <div className="container" data-reveal className="active">
        <h1 style={{ fontSize: '4rem', fontWeight: 700, marginBottom: '1rem', color: 'white' }}>
          Откройте для себя <span style={{ color: 'var(--secondary)' }}>Туву</span>
        </h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
          Сочетание традиционного уюта и современного комфорта в самом сердце Сибири.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button style={{
            backgroundColor: 'var(--secondary)',
            color: 'white',
            border: 'none',
            padding: '1rem 2.5rem',
            fontSize: '1.1rem',
            fontWeight: 600,
            cursor: 'pointer',
            borderRadius: '5px',
            transition: 'var(--transition)'
          }}>
            Забронировать номер
          </button>
          <button style={{
            backgroundColor: 'transparent',
            color: 'white',
            border: '2px solid white',
            padding: '1rem 2.5rem',
            fontSize: '1.1rem',
            fontWeight: 600,
            cursor: 'pointer',
            borderRadius: '5px',
            transition: 'var(--transition)'
          }}>
            Узнать больше
          </button>
        </div>
      </div>
    </section>
  );
}
