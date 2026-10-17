export const translatedPaths = ['/', '/data-clarity', '/business-applications', '/ai-automation', '/case-studies/loux-softone-bi', '/case-studies/fhl-entersoft-reporting', '/enquiry-sent'];
export const isGreekPath = (path: string) => path === '/el' || path.startsWith('/el/');
export const englishPath = (path: string) => isGreekPath(path) ? path.slice(3) || '/' : path;
export const greekPath = (path: string) => path === '/' ? '/el' : '/el' + path;
export function languageDestination(path: string, hash = '') {
  const english = englishPath(path);
  const paired = translatedPaths.includes(english);
  return isGreekPath(path) ? english + hash : paired ? greekPath(english) + hash : '/el';
}
