import React from "react";
import NavbarMenu from "./../components/Navbar";
import CardData from "./../components/Card";
import CardSlider from "./../components/CardSlider";

const Main = ({
  collapsed,
  rtl,
  image,
  handleToggleSidebar,
  //handleCollapsedChange,
  //handleRtlChange,
  //handleImageChange,
}) => {
  return (
    <main>
      {/* <div
        className="btn-toggle d-none"
        onClick={() => handleToggleSidebar(true)}
      >
        <FiNavigation />
      </div> */}

      <header className="shadowNavBar mainHeader">
        <NavbarMenu handleToggleSidebar={() => handleToggleSidebar} />
      </header>

      <div className="body">
        <div className="CardSlider">
          <CardSlider />
        </div>

        <div className="CardData">
          <CardData />
        </div>
      </div>

      <footer>
        <div className="footerHight"/>
      </footer>
    </main>
  );
};

export default Main;
