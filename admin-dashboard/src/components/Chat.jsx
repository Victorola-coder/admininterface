/* eslint-disable react/prop-types */
import d1 from "../../public/d1.svg";
import d2 from "../../public/d2.svg";
import recommend from "../../public/recommend.svg";
import cancel from "../../public/cancel.svg";
import check_circle from "../../public/check_circle.svg";
import chronic from "../../public/chronic.svg";
import { Dashboard } from "../layouts";

export const Chat = () => {
  return (
    <Dashboard>
      <section className="  w-full pt-[79px] px-[34px] ">
        <h1 className=" mb-3 text-[#0E0E0E] text-[32px] font-medium leading-[120%]">
          Welcome, Admin
        </h1>
        <p className=" mb-10 text-[#858585] text-[16px] font-regular leading-[150%]">
          Total of 15 appointments today.
        </p>
        <div className="flex  items-center  w-fit space-x-[41px]">
          <div className=" grid  w-fit grid-cols-1 gap-6">
            <TabCards
              image={d1}
              className=""
              text="Doctors Registered"
              value={13}
            />
            <TabCards image={d2} text="Patients Registered" value={52} />
          </div>
          <div className=" grid grid-cols-2 w-fit  gap-6">
            <TabCards
              image={recommend}
              text="Approved Appointments"
              value={15}
              className="md:w-[300px] xl:w-[350px]  h-[125px]"
            />
            <TabCards
              image={cancel}
              text="Completed Appointments"
              value={6}
              className="md:w-[300px] xl:w-[350px]  h-[125px]"
            />
            <TabCards
              image={check_circle}
              text="Declined Appointments"
              value={2}
              className="md:w-[300px] xl:w-[350px]  h-[125px]"
            />
            <TabCards
              image={chronic}
              text="Pending Appointments"
              value={15}
              className="md:w-[300px] xl:w-[350px]  h-[125px]"
            />
          </div>
        </div>
        <div className="flex justify-between pb-[16px] mt-10 border-b border-[#CECECE] items-center ">
          <h1 className=" text-[20px] text-[#0E0E0E] leading-[150%]  font-medium">
            Upcoming Appointments
          </h1>
          <p className=" text-[18px]  font-medium text-[#007890]">View All</p>
        </div>
        {/* table from shad will replace  */}
        <div className="grid mt-5 text-[18px] mb-4 text-[#858585]  font-medium leading-[150%]  grid-cols-5">
          <span>Patient</span>
          <span>Doctor</span>
          <span>Date</span>
          <span>Time</span>
          <span>Purpose</span>
        </div>
        {[1, 2, 3, 4].map((index) => (
          <div
            className=" pt-4 text-[16px] leading-[150%] text-[#0E0E0E] py-7 grid grid-cols-5 items-center border-t border-[#CECECE] "
            key={index}
          >
            <span>Mr Dike</span>
            <span>Dr. Okechukwu</span>
            <span>Monday 24 October</span>
            <span>9:00 am - 10:00 am</span>
            <span>Purpose</span>
          </div>
        ))}
      </section>
    </Dashboard>
  );
};

export const TabCards = ({ image, value, text, className }) => {
  console.log(className);
  return (
    <div
      style={{
        boxShadow: "0.5px 0.5px 4px 0px  rgba(0,0,0,0.1)",
      }}
      className={` flex  items-center  gap-3 px-[30px] py-[25px]  bg-white rounded-[10px] ${
        className ? className : "w-[420px] h-[140px "
      } `}
    >
      <img
        className={` ${
          className ? "size-[54px]" : "size-[90px]"
        }  rounded-full object-contain`}
        src={image}
        alt=""
      />
      <div className="flex flex-col">
        <p className=" text-[32px]  leading-[120%] font-medium text-[#0E0E0E]">
          {value}
        </p>
        <p className=" text-[18px] text-nowrap  leading-[150%] font-normal text-[#6D6D6D]">
          {text}
        </p>
      </div>
    </div>
  );
};
