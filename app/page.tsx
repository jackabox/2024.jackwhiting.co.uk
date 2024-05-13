import Image from "next/image";

import { getApiQuery } from '@/utils/getApiQuery.js'
import { HOME_QUERY } from '@/queries/home.js'

import HomeIntro from "@/components/Home/HomeIntro";
import FeaturedServices from "@/components/FeaturedServices";

async function getData() {
  const {homeEntries} = await getApiQuery(HOME_QUERY, {})

  return homeEntries[0]
}

export default async function Home() {
  const { title, homeIntro, featuredServices } = await getData();

  return (
    <div className="container">
      <HomeIntro {...homeIntro[0]} />
      <FeaturedServices {...featuredServices[0]}  />
    </div>
  );
}
