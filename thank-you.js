const params = new URLSearchParams(window.location.search);
const firstName = (params.get('name') || '').trim();
const thanksMessage = document.getElementById('thanksMessage');

if (firstName && thanksMessage) {
  thanksMessage.textContent = `Thanks, ${firstName}. We received your service request and will be in touch shortly.`;
}
