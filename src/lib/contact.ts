export const CONTACT_EMAIL = 'hello@ensight.gr';

const subject = 'Request for a call';
const body = [
  'Hi George,',
  '',
  "I'd like to talk about:",
  '',
  'Company:',
  "What we can't currently answer, or still do by hand:",
  '',
].join('\n');

export const CONTACT_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
