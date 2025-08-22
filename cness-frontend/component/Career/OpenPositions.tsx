import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface OpenPositionProps {
  data: {
    badgeText: string;
    title: string;
    highlight: string;
    desc: string;
    AvailableRoles: {
      position: string;
      applyLink: string | null;
    }[];
  };
}

const OpenPositions: React.FC<OpenPositionProps> = ({ data }) => {
  return (
    <div className="p-2">
      <div className="py-6 md:py-10 px-4 md:px-10 bg-primary rounded-2xl min-h-screen relative overflow-hidden">
        <Image
          src={"/assets/careercardstar.svg"}
          alt="OverlayStar.svg"
          width={500}
          height={500}
          className="absolute left-0 top-0 md:w-1/2 opacity-20 z-0 pointer-events-none select-none"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 z-10 relative">
          {/* Left copy */}
          <div>
            <div className=" mt-6 md:mt-0 md:mb-12 flex items-start flex-col gap-6 text-light">
              <p className="text-xs uppercase px-4 py-1 rounded-full border border-gray-300/50">
                {data.badgeText}
              </p>
              <h2 className=" text-3xl md:text-5xl font-[450] leading-tight">
                {data.title.split(data.highlight)[0]}
                <span className="text-tertiary"> {data.highlight}</span>
              </h2>
              <p className=" text-sm md:text-base">{data.desc}</p>
            </div>
          </div>

          {/* Right: Open positions */}
          <div className="pt-20 overflow-y-auto">
            <div className="divide-y divide-white/20">
              {data.AvailableRoles?.map((role, idx) => {
                const href = role.applyLink || "#";
                return (
                  <Link
                    key={`${role.position}-${idx}`}
                    href={href}
                    className="group flex items-center justify-between gap-4 py-5 px-2 transition"
                  >
                    {/* Role Text */}
                    <div className="min-w-0">
                      <p className="text-light text-lg font-[450] truncate">
                        {role.position}
                      </p>

                      {/* Separator line under each item; on hover, tint to active
                      <div className="mt-3 h-px w-full bg-white/20 transition-colors duration-300 group-hover:bg-active" /> */}
                    </div>

                    {/* Right Arrow Button */}
                    <span className="relative inline-flex items-center justify-center rounded-full p-2 text-light bg-white/10 transition-all duration-300 group-hover:bg-active group-hover:text-foreground">
                      <ArrowUpRight className="transition-transform duration-300 group-hover:rotate-45 group-hover:animate-spin" size={20} />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenPositions
