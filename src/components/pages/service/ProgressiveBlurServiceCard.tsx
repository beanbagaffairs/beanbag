import Image from "next/image";
import { ProgressiveBlur } from "../../../../components/motion-primitives/progressive-blur";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ProgressiveBlurBasic({
  title,
  href,
  imageSrc,
}: {
  title: string;
  href: string;
  imageSrc: string;
}) {
  return (
    <Link href={href} className="relative my-4 aspect-square w-[400px] overflow-hidden rounded-[10px] shadow-xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-300">
      <Image src={imageSrc} alt={title} fill className="absolute inset-0 object-cover" />
      <div className="absolute w-full bottom-0 left-0  bg-black/70">
        <div className="flex items-center justify-between px-5 py-4">
          <p className="w-[60%] text-lg font-bold text-white">{title}</p>
          <button className="border border-white text-white p-2 rounded-full hover:bg-white hover:text-black transition-colors duration-800 text-lg font-semibold">
            <ArrowUpRight />
          </button>
        </div>
      </div>
    </Link>
  );
}
