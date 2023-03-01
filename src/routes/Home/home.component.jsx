import { Fragment, useState } from "react";

import Menu from "../../components/menu/menu.component";

const Home = ({ menus }) => {
  const [isOpenableMenu, setIsOpenableMenu] = useState(false);

  return (
    <Fragment>
      {menus.map((menu, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              isOpenableMenu(index);
            }}
          >
            <img src={menu.image} alt={menu.name} />
          </div>
        );
      })}
    </Fragment>
  );
};

export default Home;
