import useAuthStore from "@/store/authStore";
import React, { type ReactNode } from "react";
import { Navigate } from "react-router";

interface ProtectedRouteProps {
  children: ReactNode; // Explicitly define children as a required prop
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { loading, user } = useAuthStore((state) => ({
    loading: state.loading,
    user: state.user,
  }));

  if (loading) return <div>Loading...</div>;

  return user ? <>{children}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;
