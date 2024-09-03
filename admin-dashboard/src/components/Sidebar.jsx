import { useLocation, NavLink, Link } from "react-router-dom";
import { HomeIcon, Appointment, Patients } from "./svgs";
// import toast from "react-hot-toast";

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
      path: "/doctor",
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
    <aside className="bg-white border-[#F9F9F9] border-[2px] py-8 px-5 hidden lg:flex flex-col">
      <div className="flex flex-col gap-y-2 font-figtree text-[#001534]">
        {data.map((Nvl, index) => (
          <div className="w-full" key={index}>
            <NavLink
              to={Nvl.path}
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-[#001534]"
              }
            >
              <div className="flex items-center gap-4 p-3">
                <Nvl.icon
                  fill={location === Nvl.path ? "#1864FF" : "#001534"}
                />
                <p
                  className={`text-[16px] leading-[18px] text-inherit font-bold`}
                >
                  {Nvl.title}
                </p>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
      <div className="mt-auto">
        <button className="cursor-pointer flex p-3 gap-[12px] items-center bg-[#1864FF12] rounded-[10px] w-full justify-between">
          <div className="flex items-center gap-x-[12px]">
            <Link to="/creator">
              <p className="font-jakarta text-[16px] font-bold leading-[20.16px] text-[#1864ff]">
                view page
              </p>
            </Link>
          </div>
        </button>
      </div>
    </aside>
  );
}
