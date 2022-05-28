import React from "react";
import { Outlet } from "react-router-dom";
import FootballSubNavbar from "../../Components/Football/FootballSubNavbar";

function Football() {
  return (
    <>
      <FootballSubNavbar></FootballSubNavbar>
      <Outlet></Outlet>
    </>
  );
}

export default Football;
