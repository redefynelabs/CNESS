import { fetchFromStrapi } from "@/lib/strapi";


export async function fetchCareerHero() {
  const data = await fetchFromStrapi('/career?populate[CareerHero][populate]=*');

  const careerHead = data.data;

  return careerHead;
}

export async function fetchCultureAndCommunity() {
  const data = await fetchFromStrapi('/career?populate[Culture][populate]=*');

  const cultureData = data.data;

  return cultureData;
}

export async function fetchAwards() {
  const data = await fetchFromStrapi('/career?populate[AwardsAndRecognition][populate]=*');

  const awardsData = data.data;

  return awardsData;
}

export async function fetchBenefits() {
  const data = await fetchFromStrapi('/career?populate[BenefitsSection][populate][BenfitsSection][populate]=icon');

  const benefitsData = data.data;

  return benefitsData;
}

export async function fetchOpenPositions() {
  const data = await fetchFromStrapi('/career?populate[OpenPositionSection][populate]=*');

  const positionData = data.data;

  return positionData;
}

