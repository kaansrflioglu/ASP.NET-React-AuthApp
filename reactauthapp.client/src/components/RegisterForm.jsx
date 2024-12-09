import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosConfig";
import { Container, TextField, Button, Typography, Box } from "@mui/material";

function RegisterForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosInstance.post("/auth/register", { username, email, password });
            setMessage(response.data.message);
            setTimeout(() => navigate("/login"), 1000);
        } catch (error) {
            setMessage(error.response?.data || "An error occurred");
        }
    };

    return (
        <Container maxWidth="xs" sx={{ mt: 8 }}>
            <Typography variant="h4" component="h1" align="center" gutterBottom>
                Register
            </Typography>
            <form onSubmit={handleSubmit}>
                <Box display="flex" flexDirection="column" gap={2}>
                    <TextField
                        label="Username"
                        variant="outlined"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        fullWidth
                        required
                    />
                    <TextField
                        label="Email"
                        type="email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        required
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        required
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Register
                    </Button>
                </Box>
            </form>
            {message && (
                <Typography variant="body2" color="error" align="center" sx={{ mt: 2 }}>
                    {message}
                </Typography>
            )}
        </Container>
    );
}

export default RegisterForm;
