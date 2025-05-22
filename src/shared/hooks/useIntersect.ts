import { useCallback, useEffect, useRef, useState, type MutableRefObject } from 'react';

export const useIntersect = (
  initialVisible: boolean,
  options?: IntersectionObserverInit
): [MutableRefObject<HTMLDivElement | null>, boolean] => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(initialVisible);

  const callback = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      setIsVisible(entry.isIntersecting);
    });
  }, []);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(callback, { ...options, threshold: 0 });
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [options, callback]);

  return [ref, isVisible];
};
