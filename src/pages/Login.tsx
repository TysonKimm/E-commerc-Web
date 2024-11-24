import { Box, TextField, Button, Avatar } from "@mui/material";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate(); // Hook for navigation

  function loginFn(event: FormEvent) {
    event.preventDefault(); // Prevent default form behavior
    // Add any validation or login logic here (if needed)
    navigate("/"); // Navigate to the home page
  }

  return (
    <Box sx={{ width: 400, margin: "0 auto", mt: 5 }}>
      {/* Logo */}
      <Box sx={{ width: 75, margin: "0 auto" }}>
        <Avatar
          src=""
          sx={{ width: 75, height: 75, mb: 2 }}
        />
      </Box>

      {/* Login Form */}
      <form onSubmit={loginFn}>
        <TextField
          required
          type="email"
          size="small"
          fullWidth
          label="Username or email"
          sx={{ mb: 2 }}
        />
        <TextField
          required
          type="password"
          size="small"
          fullWidth
          label="Password"
          sx={{ mb: 2 }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="small"
          color="error"
        >
          Login
        </Button>
      </form>
    </Box>
  );
}

