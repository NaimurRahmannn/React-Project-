import React, { useEffect, useState } from 'react';

export default function CalendarClock({ className = '', dateClassName = '', timeClassName = '', showSeconds = true, showTime = true }) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const dateText = new Intl.DateTimeFormat(undefined, {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  }).format(now);

  const timeText = showTime
    ? new Intl.DateTimeFormat(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        second: showSeconds ? '2-digit' : undefined,
        hour12: false,
      }).format(now)
    : '';

  return (
    <div className={className}>
      <span className={dateClassName}>{dateText}</span>
      {showTime && <span className={timeClassName}>{timeText}</span>}
    </div>
  );
}
