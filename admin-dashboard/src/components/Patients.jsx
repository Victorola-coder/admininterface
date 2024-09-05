import axios from "axios";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [patientData, setPatientData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    medicalID: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const result = await axios.get(
          "https://doctermy.onrender.com/api/v1/patients"
        );
        setPatients(result.data);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };

    fetchPatients();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatientData({
      ...patientData,
      [name]: value,
    });
  };

  const handleAddPatient = async () => {
    if (patientData.password !== patientData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const result = await axios.post(
        "https://doctermy.onrender.com/api/v1/patients",
        patientData
      );
      setPatients([...patients, result.data]);
      setPatientData({
        name: "",
        email: "",
        phoneNumber: "",
        medicalID: "",
        password: "",
        confirmPassword: "",
      }); // Clear the input fields after adding
    } catch (error) {
      console.error("Error adding patient:", error);
    }
  };

  const handleDeletePatient = async (id) => {
    try {
      await axios.delete(`https://doctermy.onrender.com/api/v1/patients/${id}`);
      setPatients(patients.filter((patient) => patient.id !== id));
    } catch (error) {
      console.error("Error deleting patient:", error);
    }
  };

  return (
    <div>
      <Sidebar />
      <div style={{ marginLeft: "220px", padding: "20px" }}>
        <h1>Patients</h1>
        <p>Total Patients: {patients.length}</p>
        <div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={patientData.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={patientData.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Phone Number"
            name="phoneNumber"
            value={patientData.phoneNumber}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Medical ID"
            name="medicalID"
            value={patientData.medicalID}
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={patientData.password}
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={patientData.confirmPassword}
            onChange={handleInputChange}
          />
          <button onClick={handleAddPatient}>Add Patient</button>
        </div>
        <ul>
          {patients.map((patient) => (
            <li key={patient.id}>
              {patient.name}{" "}
              <button onClick={() => handleDeletePatient(patient.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Patients;
