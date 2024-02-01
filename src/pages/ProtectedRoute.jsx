import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedRoute({ children, adminRoute }) {
  const { user } = useAuth();

  if (!user || (adminRoute && !user.admin))
    return <Navigate to={"/"} replace={true}></Navigate>;
  return <div>{children}</div>;
}
