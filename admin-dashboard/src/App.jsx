import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Admin, Appointments, Doctors, Patients, NotFound } from "./pages";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" index element={<Admin />} />
          <Route path="*" index element={<NotFound />} />
          <Route path="/doctors" index element={<Doctors />} />
          <Route path="/patients" index element={<Patients />} />
          <Route path="/appointments" index element={<Appointments />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
