# Direct enquiry delivery

The form keeps its working email-draft flow until a delivery endpoint is configured.

Set VITE_ENQUIRY_ENDPOINT in the site's build environment and rebuild. Use an HTTPS endpoint you control or an approved form provider. This value is public: never put an API key or other secret in it.

The form POSTs JSON with name, company, email and message. The endpoint must validate input, limit spam and request frequency, deliver to hello@ensight.gr or persist the enquiry durably, and return HTTP 2xx with {"ok":true} or {"success":true} only once accepted. Configure CORS for https://www.ensight.gr if it is on another origin. Keep email-provider credentials server-side.

Before activation, confirm the provider's data handling and add any required privacy notice. Test successful delivery to the mailbox, invalid input, throttling and service failure. A timeout leaves the visitor's message intact and offers direct email. Do not enable an endpoint that merely returns success without delivering or storing enquiries.

No backend or third-party account is provisioned by this change.
