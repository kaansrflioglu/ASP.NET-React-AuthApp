import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import MainPage from "./components/MainPage";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import GuestRoute from "./components/routes/GuestRoute";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsAuthenticated(!!token);
        setIsLoading(false);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username"); 
        setIsAuthenticated(false);
    };
    

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated} isLoading={isLoading}>
                            <MainPage handleLogout={handleLogout} />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <GuestRoute isAuthenticated={isAuthenticated} isLoading={isLoading}>
                            <LoginForm setIsAuthenticated={setIsAuthenticated} />
                        </GuestRoute>
                    }
                />
                <Route
                    path="/register"
                    element={
                        <GuestRoute isAuthenticated={isAuthenticated} isLoading={isLoading}>
                            <RegisterForm />
                        </GuestRoute>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
