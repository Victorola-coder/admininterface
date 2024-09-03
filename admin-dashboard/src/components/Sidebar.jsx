import { useLocation, NavLink } from "react-router-dom";
import { HomeIcon, Appointment, Patients } from "./svgs";
import clsx from "clsx";

export default function Sidebar() {
  const data = [
    {
      id: 1,
      title: "home",
      icon: HomeIcon,
      path: "/dashboard",
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

  const location = useLocation();
  return (
    <aside className="bg-white border-[#F9F9F9] border-[2px] py-8 px-5 flex flex-col">
      <div className="flex flex-col gap-y-2 text-[#001534]">
        {data.map((nvl, index) => (
          <div className="w-full" key={index}>
            <NavLink
              to={nvl.path}
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-[#001534]"
              }
            >
              <div className="flex flex-col items-center gap-4 p-3">
                <nvl.icon
                  fill={location === nvl.path ? "#858585" : "#007890"}
                />
                <p
                  className={clsx(
                    location === nvl.path ? "#858585" : "#007890",
                    "text-[14px] leading-[16.8px] text-inherit"
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
  );
}
