'use client'

import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

interface CardRotateProps {
  children: React.ReactNode;
  onSendToBack: () => void;
}

function CardRotate({ children, onSendToBack }: CardRotateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_: any, info: PanInfo) {
    const threshold = 180;
    if (
      Math.abs(info.offset.x) > threshold ||
      Math.abs(info.offset.y) > threshold
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="absolute h-[40vh] w-[35vh] lg:h-[60vh] lg:w-[50vh] cursor-grab"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

export default function SwipeableStackCards() {
  const initialCards = [
    {
      id: 1,
      z: 4,
      img: "https://res.cloudinary.com/djkd6cyxb/image/upload/v1760433909/_DSC1486_ehfgv5.jpg",
    },
    {
      id: 2,
      z: 3,
      img: "https://res.cloudinary.com/djkd6cyxb/image/upload/v1760433892/_DSC1177_qoqic3.jpg",
    },
    {
      id: 3,
      z: 2,
      img: "https://res.cloudinary.com/djkd6cyxb/image/upload/v1760433878/_DSC1232_dmzr1q.jpg",
    },
    {
      id: 4,
      z: 1,
      img: "https://res.cloudinary.com/djkd6cyxb/image/upload/v1760433880/_DSC1219_akq6wc.jpg",
    },
    {
      id: 5,
      z: 0,
      img: "https://res.cloudinary.com/djkd6cyxb/image/upload/v1760433871/_DSC1257_ppvskg.jpg",
    },
  ];
  const [cards, setCards] = useState(initialCards);

  const sendToBack = (id: number) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  return (
    <div className="relative h-[40vh] w-[35vh] lg:h-[60vh] lg:w-[50vh]" style={{ perspective: 600 }}>
      {cards.map((card, index) => {
        return (
          <CardRotate key={card.id} onSendToBack={() => sendToBack(card.id)}>
            <motion.div
              className="h-full w-full rounded-lg"
              animate={{
                rotateZ: (cards.length - index - 1) * 4,
                scale: 1 + index * 0.06 - cards.length * 0.06,
                transformOrigin: "90% 90%",
              }}
              initial={false}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <Image
                src={card.img}
                alt="card"
                width={500}
                height={500}
                className="pointer-events-none h-full w-full rounded-lg object-cover"
              />
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
