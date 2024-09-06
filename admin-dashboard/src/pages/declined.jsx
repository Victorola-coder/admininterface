/* eslint-disable no-unused-vars */
import { AppointmentsNav } from "../components/appointementrsnav";
import CustomStatus from "../components/customstatus";
import { BASE_URL } from "../config";
import { Dashboard } from "../layouts";
import AppointmentsLayout from "../layouts/appointmentlayout";
import { useFetch, useFetchDeclinedAppointments } from "../queries/queries";

import { format } from "date-fns";
const DeclinedAppointments = () => {
  const { data, error, isError, isLoading } = useFetchDeclinedAppointments();
  const appointments = data?.data || [];
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
          {appointments.map((app) => (
            <div
              className="min-w-[700px] grid text-[12px] sm:text-[14px] xl:text-[16px] leading-[150%] text-[#0E0E0E] py-7  grid-cols-6 gap-x-4 items-center border-t border-[#CECECE]"
              key={app._id}
            >
              <span>{app?.patientId?.name}</span>
              <span>{app?.doctorId?.name || "NA"}</span>
              <span>{format(new Date(app?.createdAt), "EEEE dd MMMM")}</span>
              <span>9:00 am - 10:00 am</span>
              <span>{app?.type}</span>
              <CustomStatus status="declined" />
            </div>
          ))}
        </div>
      </AppointmentsLayout>
    </Dashboard>
  );
};

export default DeclinedAppointments;
