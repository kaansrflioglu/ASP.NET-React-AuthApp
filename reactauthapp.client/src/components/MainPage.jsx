import React from "react";
import { Container, Typography, Button } from "@mui/material";

function MainPage({ handleLogout }) {
    const username = localStorage.getItem("username") || "User";

    return (
        <Container maxWidth="sm" sx={{ mt: 8, textAlign: "center" }}>
            <Typography variant="h4" gutterBottom>
                Welcome, {username}!
            </Typography>
            <Button variant="contained" color="secondary" onClick={handleLogout}>
                LOGOUT
            </Button>
        </Container>
    );
}

export default MainPage;
