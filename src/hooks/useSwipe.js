import { useRef, useCallback } from 'react';

const MIN_SWIPE_DISTANCE = 50;  // px — minimum horizontal travel to count
const MAX_VERTICAL_RATIO = 0.6; // ignore swipes that are more vertical than horizontal

export function useSwipe({ onSwipeLeft, onSwipeRight, disabled = false }) {
  const touchStart = useRef(null);

  const onTouchStart = useCallback((e) => {
    if (disabled) return;
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  }, [disabled]);

  const onTouchEnd = useCallback((e) => {
    if (disabled || !touchStart.current) return;

    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;

    // Ignore if not enough horizontal movement
    if (Math.abs(dx) < MIN_SWIPE_DISTANCE) return;

    // Ignore if swipe is too vertical
    if (Math.abs(dy) / Math.abs(dx) > MAX_VERTICAL_RATIO) return;

    if (dx < 0) {
      onSwipeLeft?.();   // swiped left  → next tab
    } else {
      onSwipeRight?.();  // swiped right → previous tab
    }

    touchStart.current = null;
  }, [disabled, onSwipeLeft, onSwipeRight]);

  return { onTouchStart, onTouchEnd };
}
