import { create } from 'zustand'

export const useDoctorStore = create((set) => ({
doctors:[],
setDoctors:(newDoctors) => set({doctors:newDoctors}),
addDoctor:(doctor) => set((state) => ({
    doctors:[...state.doctors,doctor]
})),
removeDoctor:(doctorId) => set((state) => ({
    doctors:state.doctors.filter((doc) => doc._id !== doctorId)
})),
updateDoctor: (updatedDoctor) => set((state) => ({
    doctors: state.doctors.map(doctor =>
      doctor._id === updatedDoctor._id ? updatedDoctor : doctor
    )
  })),

}))
export const usePatientStore = create((set) => ({
patients:[],
setPatients:(np) => set({patients:np}),
// addDoctor:(doctor) => set((state) => ({
//     doctors:[...state.doctors,doctor]
// })),
// removeDoctor:(doctorId) => set((state) => ({
//     doctors:state.doctors.filter((doc) => doc._id !== doctorId)
// })),
// updateDoctor: (updatedDoctor) => set((state) => ({
//     doctors: state.doctors.map(doctor =>
//       doctor._id === updatedDoctor._id ? updatedDoctor : doctor
//     )
//   })),

}))
export const useAppointmentsStore = create((set) => ({
doctors:[],
setDoctors:(newDoctors) => set({doctors:newDoctors}),
addDoctor:(doctor) => set((state) => ({
    doctors:[...state.doctors,doctor]
})),
removeDoctor:(doctorId) => set((state) => ({
    doctors:state.doctors.filter((doc) => doc._id !== doctorId)
})),
updateDoctor: (updatedDoctor) => set((state) => ({
    doctors: state.doctors.map(doctor =>
      doctor._id === updatedDoctor._id ? updatedDoctor : doctor
    )
  })),

}))