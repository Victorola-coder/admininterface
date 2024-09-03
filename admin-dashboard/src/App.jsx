import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Appointments, Doctors, Patients, NotFound } from "./pages";
import { Chat } from "./components/Chat";

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
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
