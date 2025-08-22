import { fetchFromStrapi } from "@/lib/strapi";


export async function fetchSolutionsHero() {
  const data = await fetchFromStrapi('/solution?populate[SolutionHero][populate]=*');

  const solutionHead = data.data;

  return solutionHead;
}

export async function fetchPlatform() {
  const data = await fetchFromStrapi('/solution?populate[PlatformSection][populate]=*');

  const PlatformSection = data.data;

  return PlatformSection;
}

export async function fetchSolStats() {
  const data = await fetchFromStrapi('/solution?populate[Stats][populate]=*');

  const Stats = data.data;

  return Stats;
}

export async function fetchPlatformModule() {
  const data = await fetchFromStrapi('/solution?populate[PlatformModulesSection][populate]=*');

  const PlatformModulesSection = data.data;

  return PlatformModulesSection;
}

export async function fetchTechnoSection() {
  const data = await fetchFromStrapi('/solution?populate[TechAndInnovationSection][populate][TechnoCards][populate]=image');

  const Techno = data.data;

  return Techno;
}

export async function fetchTechnoBottomCard() {
  const data = await fetchFromStrapi('/solution?populate[TechnoBottomCards][populate]=icon');

  const TechnoBottomCard = data.data;

  return TechnoBottomCard;
}