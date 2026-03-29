const images = [
  "https://www.chalamahotel.ru/upload/iblock/c38/z9p9f5b2b2b2b2b2b2b2b2b2b2b2b2b2.jpg",
  "https://www.chalamahotel.ru/upload/iblock/831/94827eb0-880c-43f1-9ade-b39f1595166f.jpg",
  "https://www.chalamahotel.ru/upload/iblock/2c1/1c7f4e91-c67d-41a4-9783-c75c88b22e1c.jpg",
  "https://www.chalamahotel.ru/upload/iblock/34b/34bde57e-3ef1-4d1a-8c7a-563b7c93e3e1.jpg",
  "https://www.chalamahotel.ru/upload/iblock/5e2/5e2361ac-e10c-4ec7-8d08-2e0f8c878f7e.jpg",
  "https://www.chalamahotel.ru/upload/iblock/d7e/d7e7e6f8-4b7d-4b7d-b7d7-e7e7e6f8a4b7.jpg"
];

export default function Gallery() {
  return (
    <section id="gallery">
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>Галерея</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1rem'
        }}>
          {images.map((img, i) => (
            <div key={i} style={{
              height: '250px',
              overflow: 'hidden',
              borderRadius: '10px'
            }}>
              <img src={img} alt={`Gallery ${i}`} style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'var(--transition)'
              }} 
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
