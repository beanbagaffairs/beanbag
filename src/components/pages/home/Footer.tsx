"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";

export function Footer() {
  const listItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const spanItemsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const handleMouseEnter = (item: HTMLElement) => {
      const textInitial = item.querySelector(".initial");
      const textHover = item.querySelector(".hover");
      gsap.to(textInitial, {
        yPercent: -100,
        perspective: 1000,
        rotationX: 90,
        duration: 1,
        ease: "power4.out",
      });
      gsap.to(textHover, {
        yPercent: 0,
        perspective: 1000,
        rotationX: 0,
        duration: 1,
        ease: "power4.out",
      });
    };

    const handleMouseLeave = (item: HTMLElement) => {
      const textInitial = item.querySelector(".initial");
      const textHover = item.querySelector(".hover");
      gsap.to(textInitial, {
        yPercent: 0,
        perspective: 1000,
        rotationX: 0,
        duration: 1,
        ease: "power4.out",
      });
      gsap.to(textHover, {
        yPercent: 100,
        perspective: 1000,
        rotationX: -90,
        duration: 1,
        ease: "power4.out",
      });
    };

    const addEventListeners = (item: HTMLElement | null) => {
      if (!item) return;
      const textHover = item.querySelector(".hover");
      gsap.set(textHover, { yPercent: 100, perspective: 1000, rotationX: -90 });

      const enterHandler = () => handleMouseEnter(item);
      const leaveHandler = () => handleMouseLeave(item);

      item.addEventListener("mouseenter", enterHandler);
      item.addEventListener("mouseleave", leaveHandler);

      // Store handlers to remove them later
      (item as any).__enterHandler = enterHandler;
      (item as any).__leaveHandler = leaveHandler;
    };

    const removeEventListeners = (item: HTMLElement | null) => {
      if (!item) return;
      item.removeEventListener("mouseenter", (item as any).__enterHandler);
      item.removeEventListener("mouseleave", (item as any).__leaveHandler);
    };

    listItemsRef.current.forEach(addEventListeners);
    spanItemsRef.current.forEach(addEventListeners);

    return () => {
      listItemsRef.current.forEach(removeEventListeners);
      spanItemsRef.current.forEach(removeEventListeners);
    };
  }, []);

  return (
    <footer className="flex relative flex-col min-h-screen w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-40 py-8 sm:py-12 md:py-16 lg:py-20 justify-evenly bg-[#1C2042] text-white">
      <div className="flex flex-col">
        <ul className="flex flex-col gap-3 sm:gap-4 md:gap-5 uppercase w-full sm:w-48 md:w-52 lg:w-60">
          {
            [
              { text: "About", href: "/about-us" },
              { text: "Services", href: "/service" },
              { text: "Works", href: "/portfolio" },
              { text: "Contact", href: "/contact-us" },
              { text: "Privacy Policy", href: "/privacy-policies" },
              { text: "Work With Us", href: "/work-with-us" },
            ].map((item, index) => (
              <li
                key={index}
                ref={(el) => {
                  listItemsRef.current[index] = el;
                }}
                className="relative overflow-hidden h-4 sm:h-5 md:h-6 cursor-pointer"
              >
                <Link href={item.href}>
                  <span className="block initial absolute top-0 left-0 w-full h-full font-formular text-sm sm:text-base md:text-lg">
                    {item.text}
                  </span>
                  <span className="block hover absolute top-0 left-0 w-full h-full font-formular text-sm sm:text-base md:text-lg">
                    {item.text}
                  </span>
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
      <Link href="/contact-us">
        <div className="relative overflow-hidden group/line py-8 sm:py-10 md:py-12 mx-auto w-fit cursor-pointer">
          <h1 className="w-full text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] xl:text-[6vw] uppercase leading-none font-formular text-center">
            Lets Talk
          </h1>
          <span className="block w-full bg-white h-2 sm:h-3 -translate-x-full group-hover/line:translate-x-0 duration-500 opacity-0 group-hover/line:opacity-100" />
        </div>
      </Link>
      <div className="w-full flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 justify-between">
        <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-10 uppercase">
          <div className="relative overflow-hidden group/line cursor-pointer">
            <h1 className="leading-none pb-2 font-formular text-sm sm:text-base">mail</h1>
            <span className="block bg-white h-[1px] sm:h-[2px] -translate-x-full group-hover/line:translate-x-0 group-hover/line:opacity-100 opacity-0 duration-500" />
          </div>
          <div className="relative overflow-hidden group/line cursor-pointer">
            <h1 className="leading-none pb-2 font-formular text-sm sm:text-base">github</h1>
            <span className="block bg-white h-[1px] sm:h-[2px] -translate-x-full group-hover/line:translate-x-0 group-hover/line:opacity-100 opacity-0 duration-500" />
          </div>
          <div className="relative overflow-hidden group/line cursor-pointer">
            <h1 className="leading-none pb-2 font-formular text-sm sm:text-base">behance</h1>
            <span className="block bg-white h-[1px] sm:h-[2px] -translate-x-full group-hover/line:translate-x-0 group-hover/line:opacity-100 opacity-0 duration-500" />
          </div>
          <div className="relative overflow-hidden group/line cursor-pointer">
            <h1 className="leading-none pb-2 font-formular text-sm sm:text-base">dribble</h1>
            <span className="block bg-white h-[1px] sm:h-[2px] -translate-x-full group-hover/line:translate-x-0 group-hover/line:opacity-100 opacity-0 duration-500" />
          </div>
          <div className="relative overflow-hidden group/line cursor-pointer">
            <h1 className="leading-none pb-2 font-formular text-sm sm:text-base">linkedin</h1>
            <span className="block bg-white h-[1px] sm:h-[2px] -translate-x-full group-hover/line:translate-x-0 group-hover/line:opacity-100 opacity-0 duration-500" />
          </div>
        </div>
        <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 uppercase font-formular">
          <span className="text-sm sm:text-base">2025 <span className="text-white font-serif">©</span> Bean Bag Agency</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
