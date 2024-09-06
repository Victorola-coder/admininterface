/* eslint-disable no-unused-vars */
import { Dashboard } from "../layouts";
import d1 from "../../public/d2.svg";
import del from "../../public/del.svg";
import edit from "../../public/edit.svg";
import view from "../../public/view.svg";
import { BiPlus } from "react-icons/bi";
import { useState } from "react";
import Custominput from "../components/custominput";
import {
  useAddData,
  useDeleteData,
  useFetch,
  useFetchPatients,
} from "../queries/queries";
import { BASE_URL } from "../config";

export default function Patients() {
  const { data: pat, error: patientsErr, isLoading } = useFetchPatients();
  const patients = pat?.data || [];
  const [patientData, setPatientData] = useState({
    name: "",
    email: "",
    gender: "",
    phoneNumber: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formInput, setFormInput] = useState(false);
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);
  const { mutate: deleteData, error: deleteError } = useDeleteData(
    BASE_URL + "users",
    "users"
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatientData({
      ...patientData,
      [name]: value,
    });
  };

  const { mutate, postData, error } = useAddData(
    BASE_URL + "auth/signup",
    "users"
  );

  // Handle form submission and validation
  const handleSubmit = () => {
    const { password } = patientData;

    // Regular expression to check for at least one number, one letter, and one special character
    const passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])/;

    if (password !== confirmPassword) {
      setFormError("Passwords do not match");
      return;
    }

    if (!passwordRegex.test(password)) {
      setFormError(
        "Password must contain at least one number, one letter, and one special character"
      );
      return;
    }

    setLoading(true); // Set loading to true when the mutation starts
    mutate(patientData, {
      onSuccess: () => {
        // Reset the form and close it after successful mutation
        setPatientData({
          name: "",
          email: "",
          gender: "",
          phoneNumber: "",
          password: "",
        });
        setConfirmPassword("");
        setFormError("");
        setFormInput(false); // Close the form
      },
      onError: (err) => {
        setFormError(err?.message || "Failed to create patient");
      },
      onSettled: () => {
        setLoading(false); // Stop loading when the mutation is done
      },
    });
  };

  if (formInput) {
    return (
      <Dashboard>
        <div className="flex-1 justify-center items-center py-[113px]">
          <h1 className="text-center text-[24px] leading-[120%] mb-[52px] font-medium">
            Add Patient
          </h1>
          <form className="grid place-items-center w-full lg:w-fit mx-auto gap-8 grid-cols-1 lg:grid-cols-2">
            <Custominput
              value={patientData.name}
              field="Full Name"
              onChange={handleInputChange}
              placeholder="Enter Full Name"
              type="text"
              name="name"
            />
            <Custominput
              type="text"
              disabled={true}
              field="MedicalID"
              value={patientData.medicalID}
              onChange={handleInputChange}
              placeholder="Enter Medical Id"
              name="medicalID"
            />
            <Custominput
              name="email"
              value={patientData.email}
              onChange={handleInputChange}
              field="Email"
              placeholder="Enter Email"
              type="email"
            />
            <Custominput
              type="dropdown"
              field="Gender"
              placeholder="Enter Gender"
              dropdownvalue={["Male", "Female"]}
              name="gender"
              value={patientData.gender}
              onChange={handleInputChange}
            />
            <Custominput
              field="Phone Number"
              type="number"
              onChange={handleInputChange}
              value={patientData.phoneNumber}
              placeholder="Enter Phone Number"
              name="phoneNumber"
            />
            <Custominput
              name="password"
              field="Enter Password"
              placeholder="Enter Password"
              type="password"
              value={patientData.password}
              onChange={handleInputChange}
            />
            <Custominput
              name="confirmPassword"
              field="Confirm Password"
              placeholder="Enter Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </form>
          {formError && (
            <p className="text-red-500 mt-4 text-center">{formError}</p>
          )}
          <button
            onClick={handleSubmit}
            className="w-[90%] lg:w-[440px] font-semibold text-[16px] rounded-[5px] bg-[#00B4D8] flex justify-center items-center mt-[52px] mx-auto text-center text-white h-[56px]"
          >
            {loading ? "Submitting..." : "Register"}
          </button>
        </div>
      </Dashboard>
    );
  }

  return (
    <Dashboard>
      <div className="pt-[71px] px-[34px]">
        <h1 className="mb-6 sm:mb-10 text-[#0E0E0E] text-[24px] sm:text-[32px] font-medium leading-[120%]">
          Manage Patients
        </h1>
        <div className="flex flex-col sm:flex-row gap-[20px] sm:gap-[45px]">
          <div
            style={{
              boxShadow: "0.5px 0.5px 4px 0px rgba(0,0,0,0.1)",
            }}
            className="flex items-center w-full sm:w-fit px-[20px] sm:px-[30px] py-[20px] sm:py-[25px] flex-col gap-4 sm:gap-6 bg-white rounded-[10px]"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <img
                className="w-[70px] sm:w-[90px] h-[70px] sm:h-[90px] rounded-full object-contain"
                src={d1}
                alt=""
              />
              <div className="flex flex-col ml-0 sm:ml-6">
                <p className="text-[24px] sm:text-[32px] leading-[120%] font-medium text-[#0E0E0E]">
                  {patients?.length}
                </p>
                <p className="text-[14px] sm:text-[18px] leading-[150%] font-normal text-[#6D6D6D]">
                  Patients Registered
                </p>
              </div>
              <button
                onClick={() => setFormInput(true)}
                className="mt-4 sm:mt-0 sm:ml-[60px] bg-[#00B4D8] gap-2.5 rounded-[5px] flex text-white px-3 py-2 items-center"
              >
                Add Patient
                <BiPlus color="white" size={12} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between pb-[16px] mt-10 border-b border-[#CECECE] items-center">
          <h1 className="text-[20px] text-[#0E0E0E] leading-[150%] font-medium">
            Registered Patients
          </h1>
          <p className="text-[18px] font-medium text-[#007890]">View All</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] mt-2 mb-4 text-[#858585] font-medium">
            <thead className="">
              <tr className="text-[18px] pb-4 h-[60px] leading-[150%]">
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
              {patients?.map((patient, index) => (
                <tr
                  className="border-t border-[#CECECE] spy-7 h-[61px]"
                  key={index + 1}
                >
                  <td>{index + 1}</td>
                  <td>{patient.name}</td>
                  <td>{patient.gender || "NA"}</td>
                  <td>{patient.uniqueId || "NA"}</td>
                  <td>{patient.phoneNumber}</td>
                  <td>{patient.email || "NA"}</td>
                  <td className="flex items-center h-[61px] gap-3.5">
                    <img
                      src={del}
                      className="cursor-pointer size-[35px]"
                      alt="Delete"
                    />
                    <img
                      src={edit}
                      className="cursor-pointer size-[35px]"
                      alt="Edit"
                    />
                    <img
                      src={view}
                      onClick={() => {
                        deleteData(patient._id);
                      }}
                      className="cursor-pointer size-[35px]"
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
