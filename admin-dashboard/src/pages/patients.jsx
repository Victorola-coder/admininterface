import { Dashboard } from "../layouts";

import d1 from "../../public/d2.svg";
import del from "../../public/del.svg";
import edit from "../../public/edit.svg";
import view from "../../public/view.svg";
import { BiPlus } from "react-icons/bi";
import { useState } from "react";
import Custominput from "../components/custominput";
export default function Patients() {
  const [formInput, setFormInput] = useState(false);
  if (formInput) {
    return (
      <Dashboard>
        <div className=" flex-1 justify-center items-center py-[113px]">
          <h1 className=" text-center text-[24px]  leading-[120%]  mb-[52px]  font-medium">
            Add Patient
          </h1>
          <div className="grid place-items-center w-fit mx-auto gap-8 grid-cols-2">
            <Custominput
              field="Full Name"
              placeholder="Enter Full Name"
              type="text"
            />
            <Custominput
              field="Medical ID"
              placeholder="Enter Medical Id"
              type="text"
            />
            <Custominput field="Email" placeholder="Enter Email" type="email" />
            <Custominput
              field="Gender"
              placeholder="Enter Gender"
              type="dropdown"
              dropdownvalue={["Male", "Female"]}
            />
            <Custominput
              field="Phone Number"
              placeholder="Enter Phone Number"
              type="number"
            />
            <Custominput
              field="Date Of Birth"
              placeholder="DD/MM/YYYY"
              type="date"
            />
            <Custominput
              field="Address"
              placeholder="Enter Address"
              type="text"
            />
          </div>
          <button className=" w-[440px] font-semibold  text-[16px]  rounded-[5px]  bg-[#00B4D8] flex justify-center items-center mt-[52px] mx-auto text-center text-white h-[56px]">
            Register
          </button>
        </div>
      </Dashboard>
    );
  }
  return (
    <Dashboard>
      <div className=" pt-[71px] px-[34px]">
        <h1 className=" mb-10  text-[#0E0E0E] text-[32px] font-medium leading-[120%]">
          Manage Patients
        </h1>
        <div className="flex  gap-[45px] ">
          <div
            style={{
              boxShadow: "0.5px 0.5px 4px 0px  rgba(0,0,0,0.1)",
            }}
            className={` flex  items-center w-fit   px-[30px] py-[25px] flex-col gap-6 bg-white rounded-[10px]  `}
          >
            <div className="flex  items-center">
              <img
                className={`  size-[90px]
          rounded-full object-contain`}
                src={d1}
                alt=""
              />
              <div className="flex ml-6  flex-col">
                <p className=" text-[32px]  leading-[120%] font-medium text-[#0E0E0E]">
                  13
                </p>
                <p className=" text-[18px] text-nowrap  leading-[150%] font-normal text-[#6D6D6D]">
                  Patients Registered
                </p>
              </div>
              <button
                onClick={() => setFormInput(true)}
                className=" ml-[60px] bg-[#00B4D8] gap-2.5  rounded-[5px] flex text-white px-3 py-2 items-center"
              >
                Add Patient
                <BiPlus color="white" size={12} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between pb-[16px] mt-10 border-b border-[#CECECE] items-center ">
          <h1 className=" text-[20px] text-[#0E0E0E] leading-[150%]  font-medium">
            Registered Patients
          </h1>
          <p className=" text-[18px]  font-medium text-[#007890]">View All</p>
        </div>
        {/* table from shad will replace  */}
        <table className="w-full mt-2 mb-4  text-[#858585] font-medium">
          <thead className="">
            <tr className="text-[18px] pb-4   h-[60px] leading-[150%]">
              <th className="text-left">S/N</th>
              <th className="text-left">Name</th>
              <th className="text-left">Gender</th>
              <th className="text-left">Medical ID</th>
              <th className="text-left">Phone Number</th>
              <th className="text-left">Email</th>
              <th className="text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-[16px] leading-[150%] text-[#0E0E0E]">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <tr
                className="border-t border-[#CECECE] spy-7 h-[61px]"
                key={index}
              >
                <td>{index}</td>
                <td>Martin Okechukwu</td>
                <td>Male</td>
                <td>MD123456</td>
                <td>09038476257</td>
                <td>okeymartin@gmail.com</td>
                <td className="flex items-center  h-[61px] gap-3.5">
                  <img src={del} className="size-[35px]" alt="Delete" />
                  <img src={edit} className="size-[35px]" alt="Edit" />
                  <img src={view} className="size-[35px]" alt="View" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Dashboard>
  );
}
