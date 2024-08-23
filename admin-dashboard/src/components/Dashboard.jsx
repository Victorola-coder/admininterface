
import { useQuery } from 'react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [stats, setStats] = useState({ doctors: 0, patients: 0, appointments: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const doctorsResponse = await axios.get('https://doctermy.onrender.com/api/v1/doctors/count');
        const doctorsCount = doctorsResponse.data.count;

        const patientsResponse = await axios.get('https://doctermy.onrender.com/api/v1/patients/count');
        const patientsCount = patientsResponse.data.count;

        const appointmentsResponse = await axios.get('https://doctermy.onrender.com/api/v1/appointment');
        const appointmentsCount = appointmentsResponse.data.length;

        setStats({
          doctors: doctorsCount,
          patients: patientsCount,
          appointments: appointmentsCount,
        });
      } catch (error) {
        console.error('Error fetching statistics:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div>
      <Sidebar />
      <div style={{ marginLeft: '220px', padding: '20px' }}>
        <h1>Admin Dashboard</h1>
        <p>Doctors: {stats.doctors}</p>
        <p>Patients: {stats.patients}</p>
        <p>Appointments: {stats.appointments}</p>
      </div>
    </div>
  );
};

export default Dashboard;

