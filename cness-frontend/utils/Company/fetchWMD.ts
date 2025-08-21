import { fetchFromStrapi } from "@/lib/strapi";


export async function fetchWMDHead() {
    const data = await fetchFromStrapi('/company?populate[WhatMakesDifferent][populate]=*');
  
    const WMDHead = data.data;
  
    return WMDHead;
  }

export async function fetchWMDButtons() {
    const data = await fetchFromStrapi('/company?populate[ButtonGroups][populate]=*');
  
    const WMDButtons = data.data;
  
    return WMDButtons;
  }


  
export async function fetchWMDCards() {
    const data = await fetchFromStrapi('/company?populate[CardGroups][populate]=*');
  
    const WMDCards = data.data;
  
    return WMDCards;
  }


  