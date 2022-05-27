import React from "react";
import { Routes, Route } from "react-router-dom";

import App from "../App";
import CricketSubNavbar from "../Components/Cricket/CricketSubNavbar";
import Cricket from "../Pages/Cricket/Cricket";
import Football from "../Pages/Football/Football";
import HomePage from "../Pages/HomePage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="Home" element={<HomePage />} />
        <Route path="Cricket" element={<Cricket />}>
          <Route path="Info" element={<CricketSubNavbar />} />
        </Route>
        <Route path="Football" element={<Football />} />
      </Route>
    </Routes>
  );
}

export default Router;
