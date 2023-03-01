import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import HomePage from "../../components/homepage/homepage.component.jsx";

const Home = ({ menu }) => {
  // console.log(menu);
  return (
    <Fragment>
      <HomePage menus={menu} />
    </Fragment>
  );
};

export default Home;
