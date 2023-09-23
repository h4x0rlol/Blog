export function rafThrottle<Fn extends (...args: any[]) => any>(cb: Fn) {
  let rafId: number | null = null;

  function throttled(...args: Parameters<Fn>) {
    if (typeof rafId === 'number') {
      return;
    }

    rafId = requestAnimationFrame(() => {
      cb(...args);
      rafId = null;
    });
  }

  throttled.cancel = () => {
    if (typeof rafId !== 'number') {
      return;
    }

    cancelAnimationFrame(rafId);
  };

  return throttled;
}
