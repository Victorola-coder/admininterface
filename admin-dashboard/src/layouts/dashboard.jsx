import { Navbar, Sidebar } from "../components";

// eslint-disable-next-line react/prop-types
export default function Dashboard({ children }) {
  return (
    <div className="h-screen w-full  bg-white grid_ lg:grid-cols-[270px_1fr]_">
      <Navbar />
      <div className="flex flex-row overflow-x-hidden w-full min-h-[100vh] bg-[#fcfcfc]">
        <Sidebar />
        <main className="bg-[#F5F5F5] lg:pl-[132px] mt-[65px]  w-full text-[#1E1E2D] ">
          {children}
        </main>
      </div>
    </div>
  );
}
