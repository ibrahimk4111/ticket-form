import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import DiscoverFly from "./Components/ninja-ticket-main/01 Discover Fly/DiscoverFly";
import MegaBus from "./Components/ninja-ticket-main/02 Mega Bus/MegaBus"


function App() {
  return (
     <BrowserRouter>
     <NavBar></NavBar>
     <br />
      <Routes>
        <Route path="/mega-bus" element={<MegaBus />}/>
        <Route path="/discover-fly" element={<DiscoverFly />}/>
        {/* <Route path="/cruise-queen" element={<CruiseQueen />}/> */}
      </Routes>
     </BrowserRouter>
     
  );
}

export default App;
