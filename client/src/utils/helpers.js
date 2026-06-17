import PROFILE from '../data/profile';

export function slugify(value) {
  return value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export function whatsappHref() {
  return `${PROFILE.whatsapp_url}?text=${encodeURIComponent(PROFILE.whatsapp_prefill)}`;
}
