/* eslint-disable react/prop-types */
import { AppointmentsNav } from "../components/appointementrsnav";

const AppointmentsLayout = ({ children }) => {
  return (
    <div className=" flex-col flex">
      <AppointmentsNav />
      <div>{children}</div>
    </div>
  );
};

export default AppointmentsLayout;
