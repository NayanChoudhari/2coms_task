import React, { useState } from "react";

const SideBar = (props) => {
  const menu = props.menu;
  const activeMenuTab = props.activeMenuTab;
  return (
    <div className="sidebar  p-4 ">
      <ul className="menuSecond">
        {menu.map((item, index) => (
          <li key={index} className={` text-base cursor-pointer ${activeMenuTab === index ? "font-bold bg-[#a292e4] text-white " : " "} rounded-sm px-3 py-1.5`} onClick={() => props.activeTab(index)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
