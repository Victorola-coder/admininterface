import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';


const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [doctorData, setDoctorData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    medicalId: '',
    specialty: '',
    address: '',
  });
  
  const stats = { doctors: doctors.length };

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const result = await axios.get('https://doctermy.onrender.com/api/v1/doctors');
        setDoctors(result.data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDoctorData({
      ...doctorData,
      [name]: value,
    });
  };

  const handleAddDoctor = async () => {
    try {
      const result = await axios.post('https://doctermy.onrender.com/api/v1/users?role=Doctor', doctorData);
      setDoctors([...doctors, result.data]);
      setDoctorData({ fullName: '', email: '', phoneNumber: '', medicalId:'', specialty: '', address: '' });
    } catch (error) {
      console.error('Error adding doctor:', error);
    }
  };

  const handleDeleteDoctor = async (id) => {
    try {
      await axios.delete(`https://doctermy.onrender.com/api/v1/users?role=Doctor{id}`);
      setDoctors(doctors.filter((doctor) => doctor.id !== id));
    } catch (error) {
      console.error('Error deleting doctor:', error);
    }
  };

  return (
    <div>
      <Sidebar />
      <div style={{ marginLeft: '220px', padding: '20px' }}>
        <h1>Doctors</h1>
        <p>Total Doctors: {stats.doctors}</p>
        <div>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={doctorData.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={doctorData.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Phone Number"
            name="phoneNumber"
            value={doctorData.phoneNumber}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Medical ID"
            name="medicalId"
            value={doctorData.medicalId}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Specialty"
            name="specialty"
            value={doctorData.specialty}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Address"
            name="Address"
            value={doctorData.address}
            onChange={handleInputChange}
          />
          <button onClick={handleAddDoctor}>Add Doctor</button>
        </div>
        <ul>
          {doctors.map((doctor) => (
            <li key={doctor.id}>
              {doctor.name} <button onClick={() => handleDeleteDoctor(doctor.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Doctors;




// const Doctors = () => {
//   const [doctors, setDoctors] = useState([]);
//   const [doctorData, setDoctorData] = useState({
//     name: '',
//     email: '',
//     phoneNumber: '',
//     specialty: '',
//     homeAddress: '',
//   });

//   useEffect(() => {
//     const fetchDoctors = async () => {
//       try {
//         const result = await axios.get('https://doctermy.onrender.com/api/v1/doctors');
//         setDoctors(result.data);
//       } catch (error) {
//         console.error('Error fetching doctors:', error);
//       }
//     };

//     fetchDoctors();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setDoctorData({
//       ...doctorData,
//       [name]: value,
//     });
//   };

//   const handleAddDoctor = async () => {
//     try {
//       const result = await axios.post('https://doctermy.onrender.com/api/v1/users?role=Doctor', doctorData);
//       setDoctors([...doctors, result.data]);
//       setDoctorData({ name: '', email: '', phoneNumber: '', specialty: '', homeAddress: '' });
//     } catch (error) {
//       console.error('Error adding doctor:', error);
//     }
//   };

//   const handleDeleteDoctor = async (id) => {
//     try {
//       await axios.delete(`https://doctermy.onrender.com/api/v1/users?role=Doctor{id}`);
//       setDoctors(doctors.filter((doctor) => doctor.id !== id));
//     } catch (error) {
//       console.error('Error deleting doctor:', error);
//     }
//   };

//   return (
//     <div>
//       <Sidebar />
//       <div style={{ marginLeft: '220px', padding: '20px' }}>
//         <h1>Doctors</h1>
//         <p>Total Doctors: {doctors.length}</p>
//         <div>
//           <input
//             type="text"
//             placeholder="Name"
//             name="name"
//             value={doctorData.name}
//             onChange={handleInputChange}
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             name="email"
//             value={doctorData.email}
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             placeholder="Phone Number"
//             name="phoneNumber"
//             value={doctorData.phoneNumber}
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             placeholder="Specialty"
//             name="specialty"
//             value={doctorData.specialty}
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             placeholder="Home Address"
//             name="homeAddress"
//             value={doctorData.homeAddress}
//             onChange={handleInputChange}
//           />
//           <button onClick={handleAddDoctor}>Add Doctor</button>
//         </div>
//         <ul>
//           {doctors.map((doctor) => (
//             <li key={doctor.id}>
//               {doctor.name} <button onClick={() => handleDeleteDoctor(doctor.id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Doctors;


