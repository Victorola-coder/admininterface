import { FaSearch, FaBell, FaUser } from "react-icons/fa";
import { Logo } from "./svgs";
// import "./Navbar.css";

const Navbar = () => (
  <header className="bg-[#00B4D8] fixed top-0 left-0 w-full h-[65px] py-[16px] px-[40px]">
    <nav className="flex flex-row items-center justify-between">
      <figure>
        <Logo />
      </figure>
      <div className="text-white flex flex-row items-center gap-[30px]">
        <FaSearch />
        <FaBell />
        <FaUser />
        <span className="user-name">Admin</span>
      </div>
    </nav>
  </header>
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
