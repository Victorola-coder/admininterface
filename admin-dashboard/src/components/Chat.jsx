/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import d1 from "../../public/d1.svg";
import d2 from "../../public/d2.svg";
import recommend from "../../public/recommend.svg";
import cancel from "../../public/cancel.svg";
import check_circle from "../../public/check_circle.svg";
import chronic from "../../public/chronic.svg";
import { Dashboard } from "../layouts";
import { useDoctorStore } from "../store/doctorstore";
import { BASE_URL } from "../config";
import {
  useFetch,
  useFetchAppointments,
  useFetchApprovedAppointments,
  useFetchCompletedAppointments,
  useFetchDeclinedAppointments,
  useFetchDoctors,
  useFetchPatients,
  useFetchPendingAppointments,
} from "../queries/queries";

export const Chat = () => {
  const { data: doc } = useFetchDoctors();
  const { data: pat } = useFetchPatients();
  const doctors = doc?.data || [];
  const patients = pat?.data || [];

  const { data: Declined } = useFetchDeclinedAppointments();
  const DeclinedData = Declined?.data || [];
  const { data: Pending } = useFetchPendingAppointments();
  const PendingData = Pending?.data || [];
  const { data: Complete } = useFetchCompletedAppointments();
  const CompleteData = Complete?.data || [];
  const { data: Approve } = useFetchApprovedAppointments();
  const ApprovedData = Approve?.data || [];

  const { data } = useFetchAppointments();
  const array = data?.data || [];
  // console.log(array);

  const now = new Date(); // Get the current date and time

  const upcomingAppointments = array?.filter((appointment) => {
    const appointmentDate = new Date(appointment.createdAt); // Convert `createdAt` to Date
    return appointmentDate > now; // Compare if the appointment is in the future
  });

  console.log(upcomingAppointments);
  return (
    <Dashboard>
      <section className="w-full pt-[79px] px-[20px] xl:px-[34px]">
        <h1 className="mb-3 text-[#0E0E0E] text-[24px] xl:text-[32px] font-medium leading-[120%]">
          Welcome, Admin
        </h1>
        <p className="mb-10 text-[#858585] text-[14px] xl:text-[16px] font-regular leading-[150%]">
          Total of {array?.length} appointments today.
        </p>
        <div className="flex flex-col xl:flex-row xl:items-center gap-6 w-full xl:space-x-[41px]">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-6 w-full xl:w-fit">
            <TabCards
              image={d1}
              text="Doctors Registered"
              value={doctors?.length}
            />
            <TabCards
              image={d2}
              text="Patients Registered"
              value={patients?.length}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6 w-full xl:w-fit">
            <TabCards
              image={recommend}
              text="Approved Appointments"
              value={ApprovedData?.length}
              className=" xl:w-[350px] h-[140px] xl:h-[125px]"
            />
            <TabCards
              image={cancel}
              text="Completed Appointments"
              value={CompleteData?.length}
              className=" xl:w-[350px] h-[140px] xl:h-[125px]"
            />
            <TabCards
              image={check_circle}
              text="Declined Appointments"
              value={DeclinedData?.length}
              className=" xl:w-[350px] h-[140px] xl:h-[125px]"
            />
            <TabCards
              image={chronic}
              text="Pending Appointments"
              value={PendingData?.length}
              className=" xl:w-[350px] h-[140px] xl:h-[125px]"
            />
          </div>
        </div>
        <div className="flex justify-between pb-[16px] mt-10 border-b border-[#CECECE] items-center">
          <h1 className="text-[16px] xl:text-[20px] text-[#0E0E0E] leading-[150%] font-medium">
            Upcoming Appointments
          </h1>
          <p className="text-[16px] xl:text-[18px] font-medium text-[#007890]">
            View All
          </p>
        </div>
        <div className="overflow-x-auto">
          <div className="min-w-[600px] grid mt-5 text-[14px] sm:text-[16px] xl:text-[18px] mb-4 text-[#858585] font-medium leading-[150%] grid-cols-5 gap-x-4">
            <span>Patient</span>
            <span>Doctor</span>
            <span>Date</span>
            <span className="block">Time</span>
            <span className="block">Purpose</span>
          </div>
          <div className="min-w-[600px]">
            {upcomingAppointments.length === 0
              ? "No Upcominmg Appointments"
              : upcomingAppointments?.map((index) => (
                  <div
                    className="pt-4 text-[12px] sm:text-[14px] xl:text-[16px] leading-[150%] text-[#0E0E0E] py-7 grid grid-cols-5 gap-x-4 items-center border-t border-[#CECECE]"
                    key={index}
                  >
                    <span>Mr Dike</span>
                    <span>Dr. Okechukwu</span>
                    <span>Monday 24 October</span>
                    <span>9:00 am - 10:00 am</span>
                    <span>Purpose</span>
                  </div>
                ))}
          </div>
        </div>
      </section>
    </Dashboard>
  );
};

export const TabCards = ({ image, value, text, className }) => {
  return (
    <div
      style={{
        boxShadow: "0.5px 0.5px 4px 0px rgba(0,0,0,0.1)",
      }}
      className={`flex items-center gap-3 px-[20px] xl:px-[30px] py-[20px] xl:py-[25px] bg-white rounded-[10px] ${
        className ? className : "w-full md:w-full xl:w-[420px] h-[140px]"
      }`}
    >
      <img
        className={`${
          className
            ? "size-[40px] xl:size-[54px]"
            : "size-[40px] xl:size-[90px]"
        } rounded-full object-contain`}
        src={image}
        alt=""
      />
      <div className="flex flex-col">
        <p className="text-[24px] xl:text-[32px] leading-[120%] font-medium text-[#0E0E0E]">
          {value}
        </p>
        <p className="text-[12px] text-wrap xl:text-[18px] xl:text-nowrap leading-[150%] font-normal text-[#6D6D6D]">
          {text}
        </p>
      </div>
    </div>
  );
};
