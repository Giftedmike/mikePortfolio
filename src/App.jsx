import React from "react";
import Experience from "./Components/Experience.jsx";
import Banner from "./Components/Banner.jsx";
import Tools from "./Components/Tools.jsx";
import Footer from "./Components/Footer.jsx";

import Sidebar from "./Components/Sidebar.jsx";

const App = () => {
  return (
    <>
      <Sidebar />
      
      <Banner />
      <Experience />
      <Tools />
      <Footer />
    </>
  );
};

export default App;
