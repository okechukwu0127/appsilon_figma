/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useIntl } from "react-intl";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { FaRegUserCircle } from "react-icons/fa";

import { FiLogOut, FiGrid } from "react-icons/fi";
import { MdOutlinePolicy, MdOutlineBugReport } from "react-icons/md";
import { SiMicrosoftoffice } from "react-icons/si";
import { ImFileText2 } from "react-icons/im";

//import sidebarBg from "./../assets/bg1.jpg";
import Assets from "../assets/Assets";

const Sidebar = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
  const intl = useIntl();
  return (
    <ProSidebar
      className="shadowBox ProSidebar"
      //image={image ? sidebarBg : false}
      image={false}
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader className="SidebarHeader">
        <div className="flex-container justContentCenter">
          <img
            alt="Logo"
            src={Assets.IMAGE.icon}
            width={20}
            className="center"
          />

          <span className="logoName">{intl.formatMessage({ id: "logo" })}</span>
        </div>
        <img
          src={Assets.IMAGE.user}
          width="78"
          height="78"
          alt="User"
          className="alSelfCenter marTop29"
          style={{ marginTop: 29 }}
        />
        <div className="helloMessage">
          {intl.formatMessage({ id: "hello" })}
        </div>
        <div className="welcomeMessage">
          {intl.formatMessage({ id: "welcome" })}
        </div>

        <div className="flex-container plan1">
          <div className="plan">{intl.formatMessage({ id: "plan" })} </div>
          <div className="planType paddLeft5">
            {intl.formatMessage({ id: "planType" })}
          </div>
        </div>

        <div className="NewPlan flex-container justContentBetween">
          <div className="justContentStart paddLeft15">
            {intl.formatMessage({ id: "newPlan" })}
          </div>
          <div className="justContentEnd paddRight15">+</div>
        </div>
      </SidebarHeader>

      <SidebarContent className="alSelfCenter">
        <Menu iconShape="circle">
          <MenuItem icon={<FiGrid size={20} />}>
            {intl.formatMessage({ id: "overview" })}
          </MenuItem>
          <MenuItem icon={<MdOutlinePolicy size={20} />}>
            {intl.formatMessage({ id: "policy" })}
          </MenuItem>

          <MenuItem icon={<MdOutlineBugReport size={25} />}>
            {intl.formatMessage({ id: "report" })}
          </MenuItem>
          <MenuItem icon={<SiMicrosoftoffice size={20} />}>
            {intl.formatMessage({ id: "company" })}
          </MenuItem>

          <MenuItem icon={<FaRegUserCircle size={20} />}>
            {intl.formatMessage({ id: "userAccount" })}
          </MenuItem>

          <MenuItem icon={<ImFileText2 size={20} />}>
            {intl.formatMessage({ id: "history" })}
          </MenuItem>
        </Menu>
      </SidebarContent>

      <SidebarFooter className="center border0" style={{ border: "0px" }}>
        <div className="sidebar-btn-wrapper">
          <a
            href="#"
            target="_blank"
            className="sidebar-btn"
            alt="Log Out"
            rel="noopener noreferrer"
          >
            <FiLogOut />

            <span className="logOut">
              {intl.formatMessage({ id: "logOut" })}
            </span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Sidebar;
