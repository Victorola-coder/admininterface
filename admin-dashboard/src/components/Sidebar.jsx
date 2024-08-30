// import "./styles/Sidebar.css";
import { NavLink } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { TbCalendarTime } from "react-icons/tb";
import { LuStethoscope } from "react-icons/lu";
import { MdOutlinePersonOutline } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ isOpen, toggleSidebar }) => (
  <div className={`sidebar ${isOpen ? "open" : ""}`}>
    <NavLink to="/" className="sidebar-link" onClick={toggleSidebar}>
      <GoHomeFill className="sidebar-icon" />
      <span>Dashboard</span>
    </NavLink>
    <NavLink
      to="/appointments"
      className="sidebar-link"
      onClick={toggleSidebar}
    >
      <TbCalendarTime className="sidebar-icon" />
      <span>Appointments</span>
    </NavLink>
    <NavLink to="/Doctors" className="sidebar-link" onClick={toggleSidebar}>
      <LuStethoscope className="sidebar-icon" />
      <span>Doctors</span>
    </NavLink>
    <NavLink to="/Patients" className="sidebar-link" onClick={toggleSidebar}>
      <MdOutlinePersonOutline className="sidebar-icon" />
      <span>Patients</span>
    </NavLink>
  </div>
);

export default Sidebar;

// src/components/Sidebar.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <ul>
//         <li><Link to="/dashboard">Dashboard</Link></li>
//         <li><Link to="/appointments">Appointments</Link></li>
//         <li><Link to="/doctors">Doctors</Link></li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
