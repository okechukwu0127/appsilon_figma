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
import {
  
  FaRegUserCircle,
} from "react-icons/fa";

import { FiLogOut, FiGrid } from "react-icons/fi";
import { MdOutlinePolicy, MdOutlineBugReport } from "react-icons/md";
import { SiMicrosoftoffice } from "react-icons/si";
import { ImFileText2 } from "react-icons/im";

//import sidebarBg from "./../assets/bg1.jpg";
import Assets from "../assets/Assets";

const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
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
        <div className="flex-container">
          <img
            alt="Logo"
            src={Assets.IMAGE.icon}
            width={20}
            style={{ textAlign: "center" }}
          />

          <span className="logoName">{intl.formatMessage({ id: "logo" })}</span>
        </div>
        <img
          src={Assets.IMAGE.user}
          width="78"
          height="78"
          alt="User"
          style={{
            alignSelf: "center",
            marginTop: 25,
            //border: "2px solid rgba(11, 102, 102, 1)",
          }}
        />
        <div className="helloMessage">
          {intl.formatMessage({ id: "hello" })}
        </div>
        <div className="welcomeMessage">
          {intl.formatMessage({ id: "welcome" })}
        </div>

        <div
          className="flex-container"
          style={{
            textAlign: "center",
            justifyContent: "center",
            marginTop: 5,
          }}
        >
          <div className="plan">{intl.formatMessage({ id: "plan" })} </div>
          <div className="planType" style={{ paddingLeft: 5 }}>
            {intl.formatMessage({ id: "planType" })}{" "}
          </div>
        </div>

        <div
          className="NewPlan flex-container"
          style={{ justifyContent: "space-between" }}
        >
          <div style={{ justifyContent: "flex-start", paddingLeft: 15 }}>
            {intl.formatMessage({ id: "newPlan" })}
          </div>
          <div style={{ justifyContent: "flex-end", paddingRight: 15 }}>+</div>
        </div>
      </SidebarHeader>

      <SidebarContent style={{ alignSelf: "center" }}>
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

      <SidebarFooter style={{ textAlign: "center", border: "0px solid red" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 24px"
          }}
        >
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

export default Aside;
