import { useLocation, NavLink } from "react-router-dom";
import { HomeIcon, Appointment, Patients } from "./svgs";
import clsx from "clsx";
import { BiMenu } from "react-icons/bi";
import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
// import Doctors from "../../images/seth.svg";

export default function Sidebar() {
  const data = [
    {
      id: 1,
      title: "home",
      icon: HomeIcon,
      path: "/",
    },
    {
      id: 2,
      title: "appointments",
      icon: Appointment,
      path: "/appointments",
    },
    {
      id: 3,
      title: "doctor",
      icon: Patients,
      path: "/doctors",
    },
    {
      id: 4,
      title: "patients",
      icon: Patients,
      path: "/patients",
    },
  ];

  const { pathname } = useLocation();
  const [menuPosition, setMenuPosition] = useState(false);
  useEffect(() => {
    let changePosition;
    changePosition = pathname.includes("/appointments");
    setMenuPosition(changePosition);
  }, [menuPosition, pathname]);
  console.log(menuPosition);
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      {navOpen ? (
        <CgClose
          onClick={() => setNavOpen(false)}
          className=" lg:hidden  z-50 fixed left-12 cursor-pointer  top-[12vh] size-8"
        />
      ) : (
        <BiMenu
          onClick={() => setNavOpen(true)}
          className={` ${
            menuPosition && " top-4 left-2"
          } lg:hidden bg-white fixed left-3 cursor-pointer  top-[12vh] size-8`}
        />
      )}
      <aside className=" hidden  bg-white h-[calc(100vh-65px)] top-[10vh] w-[132px] fixed left-0 border-[#F9F9F9] border-[2px] pt-[104px] spx-5 lg:flex flex-col">
        <div className="flex flex-col gap-y-2 text-[#001534]">
          {data.map((nvl, index) => (
            <div className="w-full" key={index}>
              <NavLink
                to={nvl.path}
                className={({ isActive }) =>
                  isActive ? "text-[#007890]" : "text-[#858585]"
                }
              >
                <div className="flex flex-col items-center gap-4 p-3">
                  <nvl.icon fill={location === nvl.path ? "#" : ""} />
                  <p
                    className={clsx(
                      "text-[14px] capitalize leading-[16.8px] text-inherit"
                    )}
                  >
                    {nvl.title}
                  </p>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </aside>
      {navOpen && (
        <aside className=" lg:hidden  bg-white h-[calc(100vh-65px)] top-[10vh] w-[132px] fixed left-0 border-[#F9F9F9] border-[2px] pt-[104px] spx-5 flex flex-col">
          <div className="flex flex-col gap-y-2 text-[#001534]">
            {data.map((nvl, index) => (
              <div className="w-full" key={index}>
                <NavLink
                  to={nvl.path}
                  className={({ isActive }) =>
                    isActive ? "text-[#007890]" : "text-[#858585]"
                  }
                >
                  <div className="flex flex-col items-center gap-4 p-3">
                    <nvl.icon fill={location === nvl.path ? "#" : ""} />
                    <p
                      className={clsx(
                        "text-[14px] capitalize leading-[16.8px] text-inherit"
                      )}
                    >
                      {nvl.title}
                    </p>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        </aside>
      )}
    </>
  );
}
