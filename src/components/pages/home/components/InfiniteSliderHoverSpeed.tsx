"use client";

import Image from "next/image";
import { InfiniteSlider } from "../../../../../components/motion-primitives/infinite-slider";

export function InfiniteSliderHoverSpeed() {
  return (
    <InfiniteSlider speedOnHover={50} gap={40}>
      <Image
        src="https://res.cloudinary.com/dvjqrh2gh/image/upload/v1758311505/Bean%20Bag%20Agencies/main/Stock%20Shots%20by%20Chiranjit/FB_IMG_1750234231644_yswk7w.jpg"
        alt="Dean blunt - Black Metal 2"
        width={300}
        height={300}
        className="aspect-square rounded-2xl overflow-hidden object-cover"
      />
      <Image
        src="https://res.cloudinary.com/dvjqrh2gh/image/upload/v1758311487/Bean%20Bag%20Agencies/main/Stock%20Shots%20by%20Chiranjit/InShot_20230810_092231640_aemcgc.jpg"
        alt="Jungle Jack - JUNGLE DES ILLUSIONS VOL 2"
        width={300}
        height={300}
        className="aspect-square rounded-2xl overflow-hidden object-cover"
      />
      <Image
        src="https://res.cloudinary.com/dvjqrh2gh/image/upload/v1758311496/Bean%20Bag%20Agencies/main/Stock%20Shots%20by%20Chiranjit/FB_IMG_1690189567380_ibv7ik.jpg"
        alt="Yung Lean - Stardust"
        width={300}
        height={300}
        className="aspect-square rounded-2xl overflow-hidden object-cover"
      />
      <Image
        src="https://res.cloudinary.com/dvjqrh2gh/image/upload/v1758311489/Bean%20Bag%20Agencies/main/Stock%20Shots%20by%20Chiranjit/FB_IMG_1751856086559_vdbtlw.jpg"
        alt="Lana Del Rey - Ultraviolence"
        width={300}
        height={300}
        className="aspect-square rounded-2xl overflow-hidden object-cover"
      />
      <Image
        src="https://res.cloudinary.com/dvjqrh2gh/image/upload/v1758311488/Bean%20Bag%20Agencies/main/Stock%20Shots%20by%20Chiranjit/InShot_20240701_181528190_pjiu55.jpg"
        alt="A$AP Rocky - Tailor Swif"
        width={300}
        height={300}
        className="aspect-square rounded-2xl overflow-hidden object-cover"
      />
      <Image
        src="https://res.cloudinary.com/dvjqrh2gh/image/upload/v1758311490/Bean%20Bag%20Agencies/main/Stock%20Shots%20by%20Chiranjit/FB_IMG_1751856068940_pjupf1.jpg"
        alt="Midnight Miami (feat Konvy) - Nino Paid, Konvy"
        width={300}
        height={300}
        className="aspect-square rounded-2xl overflow-hidden object-cover"
      />
    </InfiniteSlider>
  );
}
