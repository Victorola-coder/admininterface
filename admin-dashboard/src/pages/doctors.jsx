/* eslint-disable no-unused-vars */
import { Dashboard } from "../layouts";

import d1 from "../../public/d1.svg";
import del from "../../public/del.svg";
import edit from "../../public/edit.svg";
import view from "../../public/view.svg";
import doctor from "../../public/doctor.svg";
import { BiPlus } from "react-icons/bi";
import Custominput from "../components/custominput";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAddData, useDeleteData, useFetch } from "../queries/queries";
import { BASE_URL } from "../config";
export default function Doctors() {
  const [doctorData, setDoctorData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    medicalId: "",
    specialty: "",
    address: "",
    availableDays: [],
    availableTime: [],
  });
  const {
    data,
    error: doctorsErr,
    isLoading,
  } = useFetch(BASE_URL + "users?role=Doctor", "doctors");

  // Use optional chaining (?.) to safely access nested properties
  const doctors = data?.data || [];

  // const { mutate, postData, error } = useAddData(
  //   BASE_URL + "auth/create-doctors",
  //   doctorData,
  //   "doctors"
  // );
  // console.log(isLoading, doctors);
  const { mutate: deleteData, error: deleteError } = useDeleteData(
    BASE_URL + "users",
    "doctors"
  );

  // console.log(doctors);
  const timeRanges = [
    "12am - 4am",
    "4am - 8am",
    "8am - 12pm",
    "12pm - 4pm",
    "4pm - 8pm",
    "8pm - 12am",
  ];
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    console.log(name, value);
    setDoctorData({
      ...doctorData,
      [name]: value,
    });
  };
  console.log(doctorData);
  const [formInput, setFormInput] = useState(false);
  if (formInput) {
    return (
      <Dashboard>
        <div className=" flex-1 justify-center items-center py-[113px]">
          <h1 className=" text-center text-[24px]  leading-[120%]  mb-[52px]  font-medium">
            Add Doctor
          </h1>
          <div className="grid place-items-center w-full  lg:w-fit mx-auto gap-8 grid-cols-1 lg:grid-cols-2">
            <Custominput
              name="fullName"
              field="Full Name"
              placeholder="Enter Full Name"
              type="text"
              value={doctorData.fullName}
              onChange={handleInputChange}
            />
            <Custominput
              value={doctorData.medicalId}
              onChange={handleInputChange}
              name="medicalId"
              field="Medical ID"
              placeholder="Enter Medical Id"
              type="text"
            />
            <Custominput
              value={doctorData.email}
              onChange={handleInputChange}
              name="email"
              field="Email"
              placeholder="Enter Email"
              type="email"
            />
            <Custominput
              value={doctorData.specialty}
              onChange={handleInputChange}
              field="Specialty"
              name="specialty"
              placeholder="Enter Specialty"
              type="dropdown"
              dropdownvalue={["Optometrist", "Dentist"]}
            />
            <Custominput
              value={doctorData.phoneNumber}
              onChange={handleInputChange}
              name="phoneNumber"
              field="Phone Number"
              placeholder="Enter Phone Number"
              type="number"
            />

            <Custominput
              value={doctorData.address}
              onChange={handleInputChange}
              name="address"
              field="Address"
              placeholder="Enter Address"
              type="text"
            />
            <div className=" w-full px-5 lg:px-0">
              <p className=" text-[16px]  font-medium text-[#0E0E0E]">
                Days Available
              </p>
              <div className="grid  grid-cols-2 gap-5 mt-5">
                {daysOfWeek.map((day) => (
                  <div key={day} className="flex">
                    <input
                      onChange={() => {
                        setDoctorData({
                          ...doctorData,
                          availableDays: [...doctorData.availableDays, day],
                        });
                      }}
                      className="size-6 rounded-sm mr-4"
                      type="checkbox"
                      name=""
                      id=""
                    />
                    <span>{day}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className=" w-full px-5 lg:px-0">
              <p className=" text-[16px]  font-medium text-[#0E0E0E]">
                Time Available
              </p>
              <div className="grid  grid-cols-2 gap-5 mt-5">
                {timeRanges.map((day) => (
                  <div key={day} className="flex">
                    <input
                      onChange={() => {
                        setDoctorData({
                          ...doctorData,
                          availableTime: [...doctorData.availableTime, day],
                        });
                      }}
                      className="size-6 rounded-sm mr-4"
                      type="checkbox"
                      name=""
                      id=""
                    />
                    <span>{day}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              setDoctorData({
                fullName: "",
                email: "",
                phoneNumber: "",
                medicalId: "",
                specialty: "",
                address: "",
              });
            }}
            className=" w-[90%] lg:w-[440px] font-semibold  text-[16px]  rounded-[5px]  bg-[#00B4D8] flex justify-center items-center mt-[52px] mx-auto text-center text-white h-[56px]"
          >
            Register
          </button>
        </div>
      </Dashboard>
    );
  }
  return (
    <Dashboard>
      <div className=" pt-[71px] px-[34px]">
        <h1 className=" mb-3  text-[#0E0E0E] text-[32px] font-medium leading-[120%]">
          Manage Doctors
        </h1>
        <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[45px]">
          <div
            style={{
              boxShadow: "0.5px 0.5px 4px 0px rgba(0,0,0,0.1)",
            }}
            className="flex items-center w-full lg:w-fit px-[20px] sm:px-[30px] py-[20px] sm:py-[25px] flex-col gap-4 sm:gap-6 bg-white rounded-[10px]"
          >
            <div className="flex gap-4 sm:gap-6 items-center">
              <img
                className="w-[70px] sm:w-[90px] h-[70px] sm:h-[90px] rounded-full object-contain"
                src={d1}
                alt=""
              />
              <div className="flex flex-col">
                <p className="text-[24px] sm:text-[32px] leading-[120%] font-medium text-[#0E0E0E]">
                  13
                </p>
                <p className="text-[14px] sm:text-[18px] leading-[150%] font-normal text-[#6D6D6D]">
                  Doctors Registered
                </p>
              </div>
            </div>
            <button
              onClick={() => setFormInput(true)}
              className="bg-[#00B4D8] gap-2.5 rounded-[5px] flex text-white px-3 py-2 items-center"
            >
              Add Doctor
              <BiPlus color="white" size={12} />
            </button>
          </div>
          <div
            style={{
              boxShadow: "0.5px 0.5px 4px 0px rgba(0,0,0,0.1)",
            }}
            className="flex items-center w-full lg:w-fit px-[20px] sm:px-[30px] py-[20px] sm:py-[25px] flex-col gap-4 sm:gap-6 bg-white rounded-[10px]"
          >
            <div className="flex gap-4 sm:gap-6 items-center">
              <img
                className="w-[70px] sm:w-[90px] h-[70px] sm:h-[90px] rounded-full object-contain"
                src={doctor}
                alt=""
              />
              <div className="flex flex-col gap-[15px] sm:gap-[21.5px]">
                <div className="flex items-center gap-4">
                  <p className="text-[24px] sm:text-[32px] leading-[120%] font-medium text-[#0E0E0E]">
                    13
                  </p>
                  <p className="text-[14px] sm:text-[18px] leading-[150%] font-normal text-[#6D6D6D]">
                    Doctors Registered
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <p className="text-[24px] sm:text-[32px] leading-[120%] font-medium text-[#0E0E0E]">
                    13
                  </p>
                  <p className="text-[14px] sm:text-[18px] leading-[150%] font-normal text-[#6D6D6D]">
                    Doctors Registered
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <p className="text-[24px] sm:text-[32px] leading-[120%] font-medium text-[#0E0E0E]">
                    13
                  </p>
                  <p className="text-[14px] sm:text-[18px] leading-[150%] font-normal text-[#6D6D6D]">
                    Doctors Registered
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between pb-[16px] mt-10 border-b border-[#CECECE] items-center ">
          <h1 className=" text-[20px] text-[#0E0E0E] leading-[150%]  font-medium">
            Registered Doctors
          </h1>
          <p className=" text-[18px]  font-medium text-[#007890]">View All</p>
        </div>
        {/* table from shad will replace  */}
        <div className=" overflow-x-auto">
          <table className="w-full min-w-[1000px]  mt-2 mb-4 text-[#858585] font-medium">
            <thead>
              <tr className="text-[14px]  sm:text-[16px] md:text-[18px] pb-4 h-[60px] leading-[150%]">
                <th className="text-left">S/N</th>
                <th className="text-left">Name</th>
                <th className="text-left">Specialty</th>
                <th className="text-left">Medical ID</th>
                <th className="text-left">Phone Number</th>
                <th className="text-left">Email</th>
                <th className="text-left">Action</th>
              </tr>
            </thead>
            <tbody className="text-[12px] sm:text-[14px] md:text-[16px] leading-[150%] text-[#0E0E0E]">
              {isLoading
                ? "Loading"
                : doctors.map((doctor, index) => (
                    <tr
                      className="border-t border-[#CECECE] h-[61px]"
                      key={doctor?._id}
                    >
                      <td>{index + 1}</td>
                      <td className="whitespace-normal">
                        {doctor?.name || "N/A"}
                      </td>
                      <td className="whitespace-normal">
                        {doctor?.specialty || "N/A"}
                      </td>
                      <td className="whitespace-normal">
                        {doctor?.uniqueId || "N/A"}
                      </td>
                      <td className="whitespace-normal">
                        {" "}
                        {doctor?.phoneNumber || "N/A"}
                      </td>
                      <td className="whitespace-normal">
                        {doctor?.email || "N/A"}
                      </td>
                      <td className="flex items-center h-[61px] gap-3.5">
                        <img
                          src={del}
                          className="w-[25px] cursor-pointer h-[25px] md:w-[35px] md:h-[35px]"
                          alt="Delete"
                        />
                        <img
                          src={edit}
                          className="w-[25px] cursor-pointer h-[25px] md:w-[35px] md:h-[35px]"
                          alt="Edit"
                        />
                        <img
                          onClick={() => {
                            console.log("we can click");
                            deleteData(doctor._id);
                          }}
                          src={view}
                          className="w-[25px] cursor-pointer h-[25px] md:w-[35px] md:h-[35px]"
                          alt="View"
                        />
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </Dashboard>
  );
}
