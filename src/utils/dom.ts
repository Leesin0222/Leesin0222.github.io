/**
 * DOM이 로드된 후 함수를 실행합니다.
 * 이미 로드된 경우 즉시 실행합니다.
 */
export function onDOMReady(callback: () => void) {
  if (typeof document === 'undefined') return;
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback, { once: true });
  } else {
    callback();
  }
}

