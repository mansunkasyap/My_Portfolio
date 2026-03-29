"use client";

import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";
import { useState } from "react";

// 🎬 Animation
const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  // ✅ Submit Handler
  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
      });

      setForm({ name: "", email: "", message: "" });
      setOpen(true);
    } catch (err) {
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        <Paper
          elevation={6}
          sx={{
            p: 4,
            maxWidth: 500,
            width: "100%",
            borderRadius: 3,
          }}
        >
          {/* TITLE */}
          <Typography variant="h4" textAlign="center" gutterBottom>
            Contact Me
          </Typography>

          <Typography
            variant="body2"
            textAlign="center"
            sx={{ mb: 2 }}
          >
            Have a project or opportunity? Let’s connect.
          </Typography>

          {/* 📧 EMAIL */}
          <Typography
            variant="body2"
            textAlign="center"
            sx={{ mb: 2 }}
          >
            Or email me directly at <b>mansun4jkasyap@gmail.com</b>
          </Typography>

          {/* 🌐 SOCIAL LINKS */}
          <Box textAlign="center" mb={2}>
            <IconButton
              href="https://github.com/mansunkasyap"
              target="_blank"
            >
              <GitHubIcon />
            </IconButton>

            <IconButton
              href="https://www.linkedin.com/in/mansun-kasyap-62246a20b/"
              target="_blank"
            >
              <LinkedInIcon />
            </IconButton>
          </Box>

          {/* FORM */}
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <TextField
            fullWidth
            label="Email"
            margin="normal"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <TextField
            fullWidth
            label="Message"
            multiline
            rows={4}
            margin="normal"
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
          />

          {/* SUBMIT BUTTON */}
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2 }}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>

          {/* ⏱️ RESPONSE NOTE */}
          <Typography
            variant="caption"
            display="block"
            textAlign="center"
            sx={{ mt: 2 }}
          >
            I usually respond within 24 hours.
          </Typography>
        </Paper>
      </motion.div>

      {/* ✅ SUCCESS MESSAGE */}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert severity="success" variant="filled">
          Message sent successfully 🚀
        </Alert>
      </Snackbar>
    </Box>
  );
}