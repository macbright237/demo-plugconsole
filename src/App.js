import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./auth/ProtectedRoute";
import ResearchPage from "./pages/ResearchPage";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/NavBar";
import ProfilePage from "./pages/ProfilePage";
import TaskDetails from "./pages/TaskDetails";
import CompleteProfile from './pages/CompleteProfile';
import EngineerRoute from "./auth/EngineerRoute";
import ClientRoute from "./auth/ClientRoute";
import AdminRoute from "./auth/AdminRoute";

function App() {
  return (
    <div className="className='w-full min-h-screen flex flex-col">
      <NavBar />
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route element={<EngineerRoute />}>
            <Route path='/filter_page' element={<ResearchPage />} />
            <Route path='/task_details' element={<TaskDetails />} />
            <Route path='/profilepage' element={<ProfilePage />} />
            <Route path='/complete_profile' element={<CompleteProfile />} />
          </Route>
          <Route element={<ClientRoute />}>

          </Route>
          <Route element={<AdminRoute />}>

          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
