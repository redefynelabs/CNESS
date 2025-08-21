import { fetchFromStrapi } from "@/lib/strapi";


export async function fetchContactHero() {
  const data = await fetchFromStrapi('/contact?populate[ContactHero][populate][ContactDetails][populate]=icon');

  const ContactHero = data.data;

  return ContactHero;
}

export async function fetchContactForm() {
  const data = await fetchFromStrapi('/contact?populate[ContactForm][populate]=*');

  const ContactForm = data.data;

  return ContactForm;
}

export async function fetchOfficeLocation() {
  const data = await fetchFromStrapi('/contact?populate[OfficeLocationSection][populate]=*');

  const OfficeLocationSection = data.data;

  return OfficeLocationSection;
}

export async function fetchFreeConsultation() {
  const data = await fetchFromStrapi('/contact?populate[FreeConsultation][populate]=*');

  const FreeConsultation = data.data;

  return FreeConsultation;
}
