import React from "react";
import HeaderLogo from "../../assets/HeaderLogo.svg";
import HeaderButton from "../atoms/HeaderButton";

const Header = () => {
  const headerItems = [
    { name: "home" },
    { name: "services" },
    { name: "projects" },
    { name: "about" },
    { name: "contact" },
    { name: "blogs" },
    { name: "contact us", variant: "contact" },
  ];

  return (
    <header className="flex p-6 pl-[50px] h-[111px] rounded-2xl justify-between items-center bg-[#1A1A1A]">
      <img
        src={HeaderLogo}
        alt="Header Logo"
        width={129.7071075439453}
        height={24}
      />
      <div className="flex justify-between gap-4">
        {headerItems.map((item) => (
          <HeaderButton
            key={item.name}
            name={item.name}
            variants={item.variant}
          />
        ))}
      </div>
    </header>
  );
};

export default Header;
