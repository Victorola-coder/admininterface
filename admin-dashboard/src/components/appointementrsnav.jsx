import { Link, useLocation } from "react-router-dom";

export const AppointmentsNav = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <nav className=" grid grid-cols-4 bg-white place-items-center">
      <Link
        className={`  py-6 lg:py-[22.5px] w-full flex justify-center items-center ${
          pathname === "/appointments"
            ? "text-[#0E0E0E] border-b-[4px] border-[#00B4D8]"
            : "text-[#9E9E9E]"
        }`}
        to="/appointments"
      >
        Pending
      </Link>
      <Link
        className={`py-6 lg:py-[22.5px] w-full flex justify-center items-center ${
          pathname === "/appointments/approved"
            ? "text-[#0E0E0E] border-b-[4px] border-[#00B4D8]"
            : "text-[#9E9E9E]"
        }`}
        to="/appointments/approved"
      >
        Approved
      </Link>
      <Link
        className={`py-6 lg:py-[22.5px] w-full flex justify-center items-center ${
          pathname === "/appointments/declined"
            ? "text-[#0E0E0E] border-b-[4px] border-[#00B4D8]"
            : "text-[#9E9E9E]"
        }`}
        to="/appointments/declined"
      >
        Declined
      </Link>
      <Link
        className={`py-6 lg:py-[22.5px] w-full flex justify-center items-center ${
          pathname === "/appointments/completed"
            ? "text-[#0E0E0E] border-b-[4px] border-[#00B4D8]"
            : "text-[#9E9E9E]"
        }`}
        to="/appointments/completed"
      >
        Completed
      </Link>
    </nav>
  );
};
