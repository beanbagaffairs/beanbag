import React from "react";

export const SupportMails = () => {
  const mails = [
    {
      title:
        "For operations, accounts, vendor management, and event coordination.",
      email: "prasun@beanbagaffairs.com",
    },
    {
      title:
        "For creative direction, cinematography, post-production, and media collaborations.",
      email: "chiranjit@beanbagaffairs.com",
    },
    {
      title:
        "For marketing strategy, brand campaigns, business collaborations, and operations.",
      email: "avinava@beanbagaffairs.com",
    },
    {
      title:
        "For social media, digital campaigns, influencer tie-ups, and press collaborations.",
      email: "marketing@beanbagaffairs.com",
    },
    {
      title: "For film production, ad shoots, and creative project inquiries.",
      email: "creative@beanbagaffairs.com",
    },
    {
      title: "For event logistics, hospitality, and on-ground management.",
      email: "operations@beanbagaffairs.com",
    },
    {
      title:
        "For all general queries, brochure downloads, quotations, and client support.",
      email: "info@beanbagaffairs.com",
    },
  ];

  return (
    <section className="flex flex-col gap-4 font-[var(--font-formular)] text-[#1C2042] px-2 md:px-32 pb-10">
      <h2 className="text-[2rem] font-bold">Where to reach us out</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {mails.map((item, idx) => (
          <div
            key={idx}
            className="p-6 border border-gray-200 rounded-lg bg-gray-50 flex flex-col gap-3"
          >
            <h4 className="text-lg text-[#1C2042]">
              {item.title}
            </h4>
            <a
              target="_blank"
              href={`mailto:${item.email}`}
              className="text-[#1C2042] underline font-sans font-bold text-base"
            >
              {item.email}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
