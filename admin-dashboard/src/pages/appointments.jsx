/* eslint-disable no-unused-vars */
import { AppointmentsNav } from "../components/appointementrsnav";
import { BASE_URL } from "../config";
import { Dashboard } from "../layouts";
import AppointmentsLayout from "../layouts/appointmentlayout";
import { useFetch, useFetchPendingAppointments } from "../queries/queries";
import { format } from "date-fns";
const Appointments = () => {
  const { data, error, isError, isLoading } = useFetchPendingAppointments();

  const appointments = data?.data || [];
  console.log(appointments);
  return (
    <Dashboard>
      <AppointmentsLayout>
        <div className="py-[50px] px-[20px] sm:px-[34px] overflow-x-auto">
          {/* table from shad will replace  */}
          <div className="min-w-[700px] grid text-[14px] sm:text-[16px] xl:text-[18px] mb-4 text-[#858585] font-medium leading-[150%]  grid-cols-6 gap-x-4">
            <span>Patient</span>
            <span>Doctor</span>
            <span>Date</span>
            <span>Time</span>
            <span>Purpose</span>
            <span>Status</span>
          </div>
          {appointments?.map((app) => (
            <div
              className="min-w-[700px] grid text-[12px] sm:text-[14px] xl:text-[16px] leading-[150%] text-[#0E0E0E] py-7  grid-cols-6 gap-x-4 items-center border-t border-[#CECECE]"
              key={app._id}
            >
              <span>{app?.patientId?.name}</span>
              <span>{app?.doctorId?.name || "NA"}</span>
              <span>{format(new Date(app?.createdAt), "EEEE dd MMMM")}</span>
              <span>9:00 am - 10:00 am</span>
              <span>{app?.type}</span>
              <button className=" py-[5px] border-[#F6B95E] rounded-[8px] border-[1.5px] text-[#F6B95E] px-[21px] bg-opacity-10 bg-[#F6B95E]">
                Pending
              </button>
            </div>
          ))}
        </div>
      </AppointmentsLayout>
    </Dashboard>
  );
};

export default Appointments;
