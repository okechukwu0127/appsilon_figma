import React from 'react';
import { FiNavigation } from "react-icons/fi";
import NavbarMenu from './../components/Navbar'
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
  //const intl = useIntl();
  return (
    <main>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FiNavigation />
      </div>

      <header className="shadowNavBar mainHeader">
        <NavbarMenu />
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
        <br />
      </footer>
    </main>
  );
};

export default Main;
