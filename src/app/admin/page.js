"use client";

import { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

export default function Admin() {
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const [projects, setProjects] = useState([]);
  const [activeAddProject, setActiveProject] = useState([]); // will use later

  // 📡 Fetch Projects
  const fetchProjects = async () => {
    const res = await fetch("/api/projects");
    const data = await res.json();
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // ➕ Add Project
  const handleAdd = async () => {
    await fetch("/api/projects", {
      method: "POST",
      body: JSON.stringify(form),
    });

    setForm({ title: "", description: "" });
    fetchProjects();
  };

  // ❌ Delete Project
  const handleDelete = async (id) => {
    await fetch(`/api/projects/${id}`, {
      method: "DELETE",
    });

    fetchProjects();
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">Admin Dashboard</Typography>

      {/* FORM */}
      <Box sx={{ my: 3 }}>
        <TextField
          label="Title"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
          sx={{ mr: 2 }}
          size="small"
        />

        <TextField
          label="Description"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
          sx={{ mr: 2 }}
          size="small"
        />

        <Button variant="contained" onClick={handleAdd}>
          Add Project
        </Button>
      </Box>

      {/* TABLE */}
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {projects.map((p) => (
              <TableRow key={p._id}>
                <TableCell>{p.title}</TableCell>
                <TableCell>{p.description}</TableCell>
                <TableCell>
                  <Button
                    color="error"
                    onClick={() => handleDelete(p._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}