/* eslint-disable react/prop-types */
import Logo from "/logo.png";
import { FaSearch, FaBell, FaUser } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ toggleSidebar }) => (
  <div className="navbar">
    <button className="navbar-toggle" onClick={toggleSidebar}>
      ☰
    </button>
    <div className="logo">
      <img src={Logo} alt="" />
    </div>
    <div className="icons-container">
      <FaSearch className="navbar-icon" />
      <FaBell className="navbar-icon" />
      <FaUser className="navbar-icon" />
      <span className="user-name">Admin</span>
    </div>
  </div>
);

export default Navbar;

// src/components/Navbar.js
// const Navbar = ({toggleSidebar}) => {
//   return (
//     <nav className="navbar">
//       <div className="logo"><img src={logo} alt="" /></div>
//       <div className="navbar-search">
//         <input type="text" placeholder="Search Doctors/Patients..." />
//         <button>Search</button>
//       </div>
//       <div className="navbar-profile">Profile</div>
//     </nav>
//   );
// };

// export default Navbar;
