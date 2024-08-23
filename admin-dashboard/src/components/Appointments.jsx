
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import Sidebar from './Sidebar';
import '../styles/Appointments.css';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [activeTab, setActiveTab] = useState('Pending');

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        let apiUrl = 'https://doctermy.onrender.com/api/v1/appointment';
        if (activeTab) {
          apiUrl += `?status=${activeTab}`;
        }
        const result = await axios.get(apiUrl);
        setAppointments(result.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, [activeTab]);

  return (
    <div>
      <Sidebar />
      <div className="appointments-container" style={{ marginLeft: '220px', padding: '20px' }}>
        {/* <h1>Appointments</h1> */}
        <div className="tabs">
          <button
            className={activeTab === 'Pending' ? 'active' : ''}
            onClick={() => setActiveTab('Pending')}
          >
            Pending
          </button>
          <button
            className={activeTab === 'Approved' ? 'active' : ''}
            onClick={() => setActiveTab('Approved')}
          >
            Approved
          </button>
          <button
            className={activeTab === 'Declined' ? 'active' : ''}
            onClick={() => setActiveTab('Declined')}
          >
            Declined
          </button>
          <button
            className={activeTab === 'Completed' ? 'active' : ''}
            onClick={() => setActiveTab('Completed')}
          >
            Completed
          </button>
        </div>
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment.id}>
              <span>{appointment.date} - {appointment.status}</span>
              <span>{appointment.doctor.name} - {appointment.patient.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Appointments;


// const Appointments = () => {
//   const [appointments, setAppointments] = useState([]);
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     const fetchAppointments = async () => {
//       try {
//         let apiUrl = 'https://doctermy.onrender.com/api/v1/appointment';
//         if (filter) {
//           apiUrl += `?status=${filter}`;
//         }
//         const result = await axios.get(apiUrl);
//         setAppointments(result.data);
//       } catch (error) {
//         console.error('Error fetching appointments:', error);
//       }
//     };

//     fetchAppointments();

//     const interval = setInterval(fetchAppointments, 5000);

//     return () => clearInterval(interval);
//   }, [filter]);

  
//   return (
//     <div>
//       <Sidebar />
//       <div className="appointments-container" style={{ marginLeft: '220px', padding: '20px' }}>
//         <h1>Appointments</h1>
//         <label>Filter by Status:</label>
//         <select onChange={(e) => setFilter(e.target.value)} value={filter}>
//           {/* <option value="">All</option> */}
//           <option value="Pending">Pending</option>
//           <option value="Approved">Approved</option>
//           <option value="Declined">Declined</option>
//           <option value="Completed">Completed</option>
//         </select>
//         <ul>
//           {appointments.map((appointment) => (
//             <li key={appointment.id}>
//               <span>{appointment.date} - {appointment.status}</span>
//               <span>{appointment.doctor.name} - {appointment.patient.name}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Appointments;

// const fetchAppointmentsByStatus = async (status) => {
//   const response = await axios.get(`https://doctermy.onrender.com/api/v1/appointment?status=${status}`);
//   return response.data || [];
// };

// const Appointments = () => {
//   const { data: pendingAppointments, isLoading: loadingPending, error: errorPending } = useQuery(
//     'pendingAppointments',
//     () => fetchAppointmentsByStatus('Pending'),
//     { refetchInterval: 5000 }
//   );

//   const { data: approvedAppointments, isLoading: loadingApproved, error: errorApproved } = useQuery(
//     'approvedAppointments',
//     () => fetchAppointmentsByStatus('Approved'),
//     { refetchInterval: 5000 }
//   );

//   const { data: declinedAppointments, isLoading: loadingDeclined, error: errorDeclined } = useQuery(
//     'declinedAppointments',
//     () => fetchAppointmentsByStatus('Declined'),
//     { refetchInterval: 5000 }
//   );

//   const { data: completedAppointments, isLoading: loadingCompleted, error: errorCompleted } = useQuery(
//     'completedAppointments',
//     () => fetchAppointmentsByStatus('Completed'),
//     { refetchInterval: 5000 }
//   );

//   if (errorPending || errorApproved || errorDeclined || errorCompleted) {
//     console.error("Error details:", errorPending || errorApproved || errorDeclined || errorCompleted);
//     return <div>Error loading appointments</div>;
//   }

//   if (loadingPending || loadingApproved || loadingDeclined || loadingCompleted) {
//     return <div>Loading appointments...</div>;
//   }

//   return (
//     <div className="appointments-page">
//       <h1>Appointments</h1>

//       <div className="appointments-container">
//         <div className="appointments-section pending">
//           <h2>Pending Appointments</h2>
//           {pendingAppointments?.length === 0 ? (
//             <p>No pending appointments.</p>
//           ) : (
//             <ul>
//               {pendingAppointments.map(appointment => (
//                 <li key={appointment.id}>
//                   {appointment.patientName} with {appointment.doctorName} on {appointment.date}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         <div className="appointments-section approved">
//           <h2>Approved Appointments</h2>
//           {approvedAppointments?.length === 0 ? (
//             <p>No approved appointments.</p>
//           ) : (
//             <ul>
//               {approvedAppointments.map(appointment => (
//                 <li key={appointment.id}>
//                   {appointment.patientName} with {appointment.doctorName} on {appointment.date}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         <div className="appointments-section declined">
//           <h2>Declined Appointments</h2>
//           {declinedAppointments?.length === 0 ? (
//             <p>No declined appointments.</p>
//           ) : (
//             <ul>
//               {declinedAppointments.map(appointment => (
//                 <li key={appointment.id}>
//                   {appointment.patientName} with {appointment.doctorName} on {appointment.date}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         <div className="appointments-section completed">
//           <h2>Completed Appointments</h2>
//           {completedAppointments?.length === 0 ? (
//             <p>No completed appointments.</p>
//           ) : (
//             <ul>
//               {completedAppointments.map(appointment => (
//                 <li key={appointment.id}>
//                   {appointment.patientName} with {appointment.doctorName} on {appointment.date}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Appointments;

