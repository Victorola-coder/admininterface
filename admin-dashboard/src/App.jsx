import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Appointments, Doctors, Patients, NotFound } from "./pages";
import { Chat } from "./components/Chat";
import ApprovedAppointments from "./pages/approved";
import DeclinedAppointments from "./pages/declined";
import CompletedAppointments from "./pages/completed";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" index element={<Chat />} />
          <Route path="*" index element={<NotFound />} />
          <Route path="/doctors" index element={<Doctors />} />
          <Route path="/chats" index element={<Chat />} />
          <Route path="/patients" index element={<Patients />} />
          <Route path="/appointments" index element={<Appointments />} />
          <Route
            path="/appointments/approved"
            index
            element={<ApprovedAppointments />}
          />
          <Route
            path="/appointments/declined"
            index
            element={<DeclinedAppointments />}
          />
          <Route
            path="/appointments/completed"
            index
            element={<CompletedAppointments />}
          />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
