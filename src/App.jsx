import { Routes, Route, Navigate } from "react-router";

import LandingPage from "./pages/Landingpage";
// import { Login } from "./pages/auth/Login";
// import { Register } from "./pages/auth/Register";
// import { ForgotPassword } from "./pages/auth/ForgotPassword";
// import { EnterPin } from "./pages/auth/EnterPin";
// import { CreatePin } from "./pages/auth/CreatePin";

import DashboardLayout from "./components/templates/DashboardLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import History from "./pages/dashboard/History";
import Transfer from "./pages/dashboard/Transfer";
import TransferDetail from "./pages/dashboard/TransferDetail";
import TopUp from "./pages/dashboard/TopUp";
import Profile from "./pages/dashboard/Profile";
import ChangePassword from "./pages/dashboard/ChangePassword";
import ChangePin from "./pages/dashboard/ChangePin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/enter-pin" element={<EnterPin />} />
        <Route path="/create-pin" element={<CreatePin />} /> */}

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="history" element={<History />} />
        <Route path="transfer" element={<Transfer />} />
        <Route path="transfer/:id" element={<TransferDetail />} />
        <Route path="topup" element={<TopUp />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profile/change-password" element={<ChangePassword />} />
        <Route path="profile/change-pin" element={<ChangePin />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
