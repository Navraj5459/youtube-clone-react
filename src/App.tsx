import React, { useState, createContext, useContext } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";

export const SidebarContext = createContext<boolean>(true);
export const NavbarContext = createContext<React.Dispatch<React.SetStateAction<boolean>> | undefined>(undefined);

function App() {
  const [sidebar, setSidebar] = useState(true);
  return (
    <div>
      <NavbarContext.Provider value={setSidebar}>
      <Navbar />
      </NavbarContext.Provider>
      <Routes>
        <Route
          path="/"
          element={
            <SidebarContext.Provider value={sidebar}>
              <Home />
            </SidebarContext.Provider>
          }
        />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
}
export { App };
