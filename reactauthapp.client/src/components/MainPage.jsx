import React from "react";
import { Container, Typography, Button } from "@mui/material";

function MainPage({ handleLogout }) {
    const username = localStorage.getItem("username") || "User";

    return (
        <Container maxWidth="sm" sx={{ mt: 8, textAlign: "center" }}>
            <Typography variant="h4" gutterBottom>
                Hoşgeldiniz, {username}!
            </Typography>
            <Button variant="contained" color="secondary" onClick={handleLogout}>
                Çıkış Yap
            </Button>
        </Container>
    );
}

export default MainPage;
