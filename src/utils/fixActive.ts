import noop from './noop.ts';

/**
 * Фикс для :active для safari.
 */
export default (): void => {
  document.addEventListener('touchstart', noop, false);
};
