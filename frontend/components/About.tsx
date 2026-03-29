export default function About() {
  return (
    <section id="about">
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center'
      }}>
        <div style={{
          position: 'relative',
          height: '500px',
          backgroundImage: 'url("https://www.chalamahotel.ru/upload/iblock/831/94827eb0-880c-43f1-9ade-b39f1595166f.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '20px',
          boxShadow: '20px 20px 0 var(--secondary)'
        }}></div>
        <div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Отель «Чалама»</h2>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
            Добро пожаловать в наш уникальный уголок природы, где уют традиционных юрт гармонично сочетается с комфортом современного отдыха! 
          </p>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
            Насладитесь спокойствием живописных пейзажей, вдохните свежий воздух и погрузитесь в атмосферу гармонии и единения с природой. Здесь вы найдете всё необходимое для комфортного проживания и незабываемого отдыха вдали от городской суеты.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <h4 style={{ color: 'var(--secondary)' }}>20 км</h4>
              <p>от города Кызыл</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--secondary)' }}>50+</h4>
              <p>Уютных мест</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
