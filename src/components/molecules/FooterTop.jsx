import React from "react";

const FooterTop = () => {
  const FooterData = [
    {
      tag: "Home",
      links: [
        { name: "Why Us", link: "#" },
        { name: "About Us", link: "#" },
        { name: "Testimonials", link: "#" },
        { name: "FAQ’s", link: "#" },
      ],
    },
    {
      tag: "Services",
      links: [
        { name: "Web Development", link: "#" },
        { name: "App Development", link: "#" },
        { name: "Web Design", link: "#" },
        { name: "Digital Marketing", link: "#" },
      ],
    },
    {
      tag: "Projects",
      links: [
        { name: "Klothink", link: "#" },
        { name: "Zenith", link: "#" },
        { name: "Novus", link: "#" },
        { name: "Apex", link: "#" },
      ],
    },
    {
      tag: "Blogs",
      links: [
        { name: "Business", soon: 0 },
        { name: "Design", soon: 1 },
        { name: "Development", soon: 1 },
      ],
    },
  ];
  return (
    <div className="flex gap-10 bg-[#1A1A1A] p-[60px] rounded-[20px]">
      {FooterData.map((section, index) => (
        <div key={section.tag + index} className="flex-1 w-[186px]">
          <h3 className="text-[#F3DFD8] text-[22px] font-bold font-mono mb-5">
            {section.tag}
          </h3>
          <ul className="flex flex-col gap-4">
            {section.links.map((link, linkIndex) => (
              <li
                key={link.name + linkIndex}
                className="text-[#81807E] text-[18px] font-flex cursor-pointer"
              >
                {link.name}{" "}
                {link.soon ? (
                  <span className="text-[#CCCCCC] font-mono text-[16px] tracking-[-3%] bg-[#262626] border border-[#333333] py-1 px-3 rounded-[6px]">
                    Soon
                  </span>
                ) : (
                  ""
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterTop;
