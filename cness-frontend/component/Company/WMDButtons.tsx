import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ButtonItem {
  id: number;
  text: string;
  url: string | null;
  isPrimary?: boolean | null;
}

interface WMDButtonsProps {
  data: ButtonItem[];
}

const WMDButtons: React.FC<WMDButtonsProps> = ({ data }) => {
  if (!data?.length) return null;

  return (
    <div className="flex flex-wrap gap-4 px-4 md:px-10 py-6 md:py-10 w-full justify-between">
      {data.map((button) => (
        <div
          key={button.id}

          className="group inline-flex items-center w-full sm:w-auto md:justify-center"
        >

          <div
            className='bg-active group text-primary pl-4 pr-2 py-2 rounded-full flex font-medium items-center justify-center gap-3 cursor-pointer '
          >
            <Link href={button.url || "#"} className='text-base font-semibold'>{button.text}</Link>
            <div
              className='bg-primary rounded-full p-1.5 text-secondary group-hover:animate-spin'
            >
              <ArrowUpRight size={16} />
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};

export default WMDButtons;
