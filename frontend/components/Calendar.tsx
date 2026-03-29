'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Calendar({ onSelect }: { onSelect: (date: string) => void }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const monthNames = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  ];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const handlePrev = () => setCurrentDate(new Date(year, month - 1));
  const handleNext = () => setCurrentDate(new Date(year, month + 1));

  const handleDateClick = (day: number) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    setSelectedDate(dateStr);
    onSelect(dateStr);
  };

  const days = [];
  const startDay = firstDayOfMonth(year, month);
  const totalDays = daysInMonth(year, month);

  // Fill empty spaces
  for (let i = 0; i < (startDay === 0 ? 6 : startDay - 1); i++) {
    days.push(<div key={`empty-${i}`} />);
  }

  for (let d = 1; d <= totalDays; d++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    const isSelected = selectedDate === dateStr;
    const isPast = new Date(year, month, d) < new Date(new Date().setHours(0,0,0,0));

    days.push(
      <div 
        key={d} 
        className={`calendar-day ${isSelected ? 'selected' : ''} ${isPast ? 'disabled' : ''}`}
        onClick={() => !isPast && handleDateClick(d)}
      >
        {d}
      </div>
    );
  }

  return (
    <div style={{ background: 'white', padding: '1.5rem', borderRadius: '15px', border: '1px solid #eee' }}>
      <div className="calendar-header">
        <button onClick={handlePrev} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><ChevronLeft size={20}/></button>
        <span style={{ fontWeight: 600 }}>{monthNames[month]} {year}</span>
        <button onClick={handleNext} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><ChevronRight size={20}/></button>
      </div>
      <div className="calendar-grid" style={{ fontWeight: 600, color: '#aaa', fontSize: '0.8rem', textAlign: 'center' }}>
        <div>Пн</div><div>Вт</div><div>Ср</div><div>Чт</div><div>Пт</div><div>Сб</div><div>Вс</div>
      </div>
      <div className="calendar-grid">
        {days}
      </div>
    </div>
  );
}
