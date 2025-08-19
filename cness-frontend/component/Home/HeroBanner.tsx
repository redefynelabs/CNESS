'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface BannerImage {
  url: string;
  alternativeText?: string;
  width: number;
  height: number;
}

interface HeroData {
  Title: string;
  Desc: string;
  ButtonSlug: string;
  ButtonName: string;
  BannerImages?: BannerImage[];
}

export default function Hero({ data }: { data: HeroData }) {
  if (!data) return null;

  const image = data.BannerImages?.[0];
  

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-6 py-12 max-w-7xl mx-auto">
      {/* Text Side */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1"
      >
        <h1 className="text-4xl font-bold mb-4">{data.Title}</h1>
        <p className="text-lg text-gray-600 mb-6">{data.Desc}</p>
        <a
          href={`/${data.ButtonSlug}`}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          {data.ButtonName}
        </a>
      </motion.div>

      {/* Image Side */}
      {image && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center mt-8 md:mt-0"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}`}
            alt={image.alternativeText || 'Hero Banner'}
            width={image.width}
            height={image.height}
            className="rounded-xl shadow-lg"
          />
        </motion.div>
      )}
    </section>
  );
}
