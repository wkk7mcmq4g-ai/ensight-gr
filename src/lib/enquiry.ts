export type Enquiry = { name: string; company: string; email: string; message: string };

export async function submitEnquiry(endpoint: string, enquiry: Enquiry): Promise<void> {
  const url = new URL(endpoint, window.location.origin);
  if (url.protocol !== 'https:' && url.origin !== window.location.origin) {
    throw new Error('The enquiry service is unavailable.');
  }
  const response = await fetch(url.toString(), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(enquiry),
    signal: AbortSignal.timeout(15000),
    credentials: 'omit',
  });
  const result = await response.json().catch(() => null);
  if (!response.ok || (result?.ok !== true && result?.success !== true)) {
    throw new Error('Your enquiry could not be confirmed. Please retry or email hello@ensight.gr.');
  }
}
