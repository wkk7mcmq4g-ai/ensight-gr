# Enquiry delivery

The contact form posts directly to https://formsubmit.co/georgekondylis@msn.com.
FormSubmit hosts the spam check (reCAPTCHA remains enabled), delivers the enquiry,
and returns the visitor to https://www.ensight.gr/enquiry-sent.
The visitor email field supplies the reply address. No credentials are stored in the frontend.
A hidden honeypot provides an additional spam signal. The form discloses the processor
and links its privacy notice.

## One-time activation
Submit an enquiry from the published website, complete the provider spam check,
then open the activation email in georgekondylis@msn.com and confirm the form.
Check junk mail. After activation, submit another clearly labelled test from the
published website and verify that all four fields arrive and Reply addresses the visitor.
Delivery is not verified until the mailbox receives that test.
Do not disable the spam check to automate this step.

## Optional custom backend
VITE_ENQUIRY_ENDPOINT overrides the native provider flow with the existing JSON
submission adapter. It must return HTTP 2xx and {"ok":true} or {"success":true}
only when accepted, enforce input validation and spam/rate controls, and keep credentials
server-side. Failures retain the visitor's message and show a direct email alternative.
