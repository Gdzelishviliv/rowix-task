import React from "react";
import HeaderLogo from "../../assets/HeaderLogo.svg";
import HeaderButton from "../atoms/HeaderButton";
import headerItems from "../../data/HeaderData";

const Header = () => {
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
