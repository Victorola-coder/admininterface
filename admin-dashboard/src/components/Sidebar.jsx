// import "./styles/Sidebar.css";
import { NavLink } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { TbCalendarTime } from "react-icons/tb";
import { LuStethoscope } from "react-icons/lu";
import { MdOutlinePersonOutline } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ isOpen, toggleSidebar }) => (
  <div
    className={`bg-white shadow-[#00000026] h-[100dvh] p-[33px] flex flex-col ${
      isOpen ? "open" : ""
    }`}
  >
    <NavLink
      to="/"
      className="flex flex-col items-center"
      onClick={toggleSidebar}
    >
      <GoHomeFill className="text-[24px] mb-[5px] active:text-[#007890]" />
      <span>Dashboard</span>
    </NavLink>
    <NavLink
      to="/appointments"
      className="flex flex-col items-center"
      onClick={toggleSidebar}
    >
      <TbCalendarTime className="text-[24px] mb-[5px] active:text-[#007890]" />
      <span>Appointments</span>
    </NavLink>
    <NavLink
      to="/Doctors"
      className="flex flex-col items-center"
      onClick={toggleSidebar}
    >
      <LuStethoscope className="text-[24px] mb-[5px] active:text-[#007890]" />
      <span>Doctors</span>
    </NavLink>
    <NavLink
      to="/Patients"
      className="flex flex-col items-center"
      onClick={toggleSidebar}
    >
      <MdOutlinePersonOutline className="text-[24px] mb-[5px] active:text-[#007890]" />
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
