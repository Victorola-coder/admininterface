import { Admin } from "./pages";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="app">
          <div className="main">
            <div className="content">
              <Routes>
                <Route path="/" element={<Admin />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
