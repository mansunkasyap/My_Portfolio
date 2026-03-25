"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardActions,
  Button,
} from "@mui/material";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then(setProjects);
  }, []);

  return (
    <Grid container spacing={3} sx={{ p: 3 }}>
      {projects.map((p, i) => (
        <Grid item xs={12} md={4} key={i}>
          <Card>
            <CardContent>
              <Typography variant="h6">{p.title}</Typography>
              <Typography variant="body2">
                {p.description}
              </Typography>
            </CardContent>

            <CardActions>
              <Button size="small">GitHub</Button>
              <Button size="small">Live</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}