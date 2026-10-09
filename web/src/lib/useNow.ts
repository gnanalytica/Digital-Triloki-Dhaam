'use client';
import { useEffect, useState } from 'react';
import { day } from './i18n';

/**
 * The current time. The first render uses the date the server rendered with (midnight of that day), so the HTML
 * matches; after that it follows the visitor's clock and refreshes every half minute.
 */
export function useNow(todayISO: string): Date {
  const [now, setNow] = useState(() => day(todayISO));
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(id);
  }, []);
  return now;
}
