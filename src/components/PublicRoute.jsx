import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const PublicRoute = () => {
  const { isLogin, loginUser } = useSelector((state) => state.loginReducer);
  if (isLogin && loginUser.pin !== "") {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
