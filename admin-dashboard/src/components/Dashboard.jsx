import axios from "axios";
import Sidebar from "./Sidebar";
import "../styles/Dashboard.css";
// import { useQuery } from "react-query";
import { useEffect, useState } from "react";
// import Dashboardnavigation from "./Dashboardnavigation";

const Dashboard = () => {
  const [stats, setStats] = useState({ doctors: 0, patients: 0 });
  // const [patients, setPatients] = useState(0)
  // const [appointment, setAppointments] = useState(0)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const doctorsResponse = await axios.get(
          "https://doctermy.onrender.com/api/v1/users?role=Doctor"
        );
        if (doctorsResponse.data.success) {
          setStats((prevStats) => ({
            ...prevStats,
            doctors: doctorsResponse.data.data.length,
          }));
        }
      } catch (error) {
        console.error("An error occured while getting doctor", error);
      }
      try {
        const patientResponse = await axios.get(
          "https://doctermy.onrender.com/api/v1/users?role=Patient"
        );
        if (patientResponse.data.success) {
          setStats((prevStats) => ({
            ...prevStats,
            patients: patientResponse.data.data.length,
          }));
        }
      } catch (error) {
        console.error("An error occured while getting patient", error);
      }
    };

    //     const patientsResponse = await axios.get('https://doctermy.onrender.com/api/v1/users?role=Patient');
    //     const patientsCount = patientsResponse.data.count;

    //     const appointmentsResponse = await axios.get('https://doctermy.onrender.com/api/v1/appointment');
    //     const appointmentsCount = appointmentsResponse.data.data.length;

    //     setStats({
    //       doctors: doctorsCount,
    //       patients: patientsCount,
    //       appointments: appointmentsCount,
    //     });
    //   } catch (error) {
    //     console.error('Error fetching statistics:', error);
    //   }
    // };

    fetchStats();
  }, []);

  return (
    <div>
      {/* <Dashboardnavigation />i */}
      <Sidebar />
      <div style={{ marginLeft: "220px", padding: "20px" }}>
        <h1>Welcome, Admin</h1>
        <p>Doctors: {stats.doctors}</p>
        <p>Patients: {stats.patients}</p>
        <p>Appointments: {stats.appointments}</p>
      </div>
    </div>
  );
};

export default Dashboard;
