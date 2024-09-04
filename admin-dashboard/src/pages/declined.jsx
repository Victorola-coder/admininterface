/* eslint-disable no-unused-vars */
import { AppointmentsNav } from "../components/appointementrsnav";
import CustomStatus from "../components/customstatus";
import { Dashboard } from "../layouts";
import AppointmentsLayout from "../layouts/appointmentlayout";

const DeclinedAppointments = () => {
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
          {[1, 2, 3, 4].map((index) => (
            <div
              className="min-w-[700px] grid text-[12px] sm:text-[14px] xl:text-[16px] leading-[150%] text-[#0E0E0E] py-7  grid-cols-6 gap-x-4 items-center border-t border-[#CECECE]"
              key={index}
            >
              <span>Mr Dike</span>
              <span>Dr. Okechukwu</span>
              <span>Monday 24 October</span>
              <span>9:00 am - 10:00 am</span>
              <span>Purpose</span>
              <CustomStatus status="declined" />
            </div>
          ))}
        </div>
      </AppointmentsLayout>
    </Dashboard>
  );
};

export default DeclinedAppointments;
