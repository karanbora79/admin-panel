import React from "react";
import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import {
  DeliveryDining,
  Logout,
  NotificationAdd,
  PictureInPicture,
  ProductionQuantityLimits,
  QueryStats,
  SettingsSharp,
  SystemSecurityUpdate,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Admin Panel</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <Link to = "/" style = {{textDecoration:"none"}}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>

          <p className="title">Lists</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <GroupIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <ProductionQuantityLimits className="icon" />
              <span>Products</span>
            </li>
          </Link>

          <li>
            <DashboardIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <DeliveryDining className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">Useful Links</p>
          <li>
            <QueryStats className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationAdd className="icon" />
            <span>Notification</span>
          </li>
          <p className="title">Services</p>
          <li>
            <SystemSecurityUpdate className="icon" />
            <span>Sysytem Health</span>
          </li>
          <li>
            <DashboardIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsSharp className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">User</p>
          <li>
            <PictureInPicture className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <Logout className="icon" />
            <span>LogOut</span>
          </li>
        </ul>
      </div>
      {/* <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div> */}
    </div>
  );
};

export default Sidebar;
