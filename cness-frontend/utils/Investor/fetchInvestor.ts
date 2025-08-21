import { fetchFromStrapi } from "@/lib/strapi";


export async function fetchInvestorHero() {
  const data = await fetchFromStrapi('/investor?populate[InvestorHead][populate]=*');

  const InvestorHead = data.data;

  return InvestorHead;
}

export async function fetchFRHead() {
  const data = await fetchFromStrapi('/investor?populate[FundingRoundHead][populate]=*');

  const FundingRoundHead = data.data;

  return FundingRoundHead;
}

export async function fetchFRCards() {
  const data = await fetchFromStrapi('/investor?populate[FundingRoundCards][populate]=*');

  const FundingRoundCards = data.data;

  return FundingRoundCards;
}

export async function fetchPitchDeckSection() {
  const data = await fetchFromStrapi('/investor?populate[PitchDeckSection][populate]=*');

  const PitchDeckSection = data.data;

  return PitchDeckSection;
}

export async function fetchFAQ() {
  const data = await fetchFromStrapi('/investor?populate[FAQ][populate]=*');

  const FAQ = data.data;

  return FAQ;
}
