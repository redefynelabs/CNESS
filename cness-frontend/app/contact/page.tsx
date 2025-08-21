import ContactForm from '@/component/Contact/ContactForm';
import ContactHero from '@/component/Contact/ContactHero';
import FreeConsultation from '@/component/Contact/FreeConsultation';
import OfficeLocation from '@/component/Contact/OfficeLocation';
import { UnderDevelopment } from '@/component/UnderDev'
import { fetchContactForm, fetchContactHero, fetchFreeConsultation, fetchOfficeLocation } from '@/utils/Contact/fetchContact'
import React from 'react'

export default async function ContactPage(){
  const contactHeadData = await fetchContactHero();
  const contactFormData = await fetchContactForm();
  const OfficeLocationSectionData = await fetchOfficeLocation();
  const FreeConsultationData = await fetchFreeConsultation();

  return (
    <div>
      <ContactHero data={contactHeadData.ContactHero} />
      <ContactForm data={contactFormData.ContactForm} />
      <OfficeLocation data={OfficeLocationSectionData.OfficeLocationSection} />
      <FreeConsultation data={FreeConsultationData.FreeConsultation} />
    </div>
  )
}