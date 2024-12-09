import React from "react";
import { Navigate } from "react-router-dom";
import { CircularProgress, Box } from "@mui/material";

function ProtectedRoute({ isAuthenticated, isLoading, children }) {
    if (isLoading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress />
            </Box>
        );
    }

    return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
