import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Menu from "../menu/menu.component";

const HomePage = ({ menus }) => {
  console.log(menus);
  return (
    <div>
      <h1>JOSE IS A SMUT</h1>
      {menus.map((menu, index) => {
        console.log(menu);
        <Menu key={index} sectionContainerItem={menu} />;
      })}
    </div>
  );
};

export default HomePage;
