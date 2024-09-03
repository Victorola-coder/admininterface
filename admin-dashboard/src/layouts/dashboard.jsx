import { Navbar, Sidebar } from "../components";

// eslint-disable-next-line react/prop-types
export default function Dashboard({ children }) {
  return (
    <div className="h-screen w-full bg-white grid_ lg:grid-cols-[270px_1fr]_">
      <Navbar />
      <div className="flex flex-row overflow-x-hidden w-full min-h-[100vh] bg-[#fcfcfc]">
        <Sidebar />
        <main className="bg-[#F5F5F5] w-full text-[#1E1E2D] px-[32px] py-[32px]">
          {children}
        </main>
      </div>
    </div>
  );
}
