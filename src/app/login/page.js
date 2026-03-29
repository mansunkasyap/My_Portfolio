"use client";

import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useTheme } from "@mui/material/styles";

// 🎬 Animation
const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Login() {
  const theme = useTheme();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!form.username || !form.password) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    const res = await signIn("credentials", {
      redirect: false,
      username: form.username,
      password: form.password,
    });

    setLoading(false);

    if (res.ok) {
      window.location.href = "/admin";
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
      }}
    >
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        <Paper
          elevation={10}
          sx={{
            p: 4,
            width: 350,
            borderRadius: 3,
            backdropFilter: "blur(12px)",
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          {/* TITLE */}
          <Typography
            variant="h4"
            textAlign="center"
            gutterBottom
            sx={{ color: "#fff", fontWeight: "bold" }}
          >
            Welcome Back 👋
          </Typography>

          <Typography
            variant="body2"
            textAlign="center"
            sx={{ mb: 3, color: "#ddd" }}
          >
            Login to access admin panel
          </Typography>

          {/* USERNAME */}
          <TextField
            fullWidth
            label="Username"
            margin="normal"
            value={form.username}
            onChange={(e) =>
              setForm({ ...form, username: e.target.value })
            }
            InputLabelProps={{ style: { color: "#ddd" } }}
            sx={{
              input: { color: "#fff" },
              fieldset: { borderColor: "#ccc" },
            }}
          />

          {/* PASSWORD */}
          <TextField
            fullWidth
            type={showPassword ? "text" : "password"}
            label="Password"
            margin="normal"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            InputLabelProps={{ style: { color: "#ddd" } }}
            sx={{
              input: { color: "#fff" },
              fieldset: { borderColor: "#ccc" },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    edge="end"
                  >
                    {showPassword ? (
                      <VisibilityOff sx={{ color: "#fff" }} />
                    ) : (
                      <Visibility sx={{ color: "#fff" }} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* BUTTON */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              py: 1.2,
              fontWeight: "bold",
            }}
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </Paper>
      </motion.div>
    </Box>
  );
}