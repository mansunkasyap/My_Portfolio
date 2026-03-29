"use client";

import { Box, Typography, Button, Grid, Card, CardContent } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  const theme = useTheme();
  return (
    <Box>

      {/* 🔥 HERO SECTION */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeIn}
        transition={{ duration: 0.8 }}
      >
        <Box
          sx={{
            textAlign: "center",
            py: 12,
            px: 2,
            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            color: "white",
          }}
        >
          <Typography variant="h3" fontWeight="bold">
            Hi, I'm Mansun Kasyap 👋
          </Typography>

          <Typography variant="h6" sx={{ mt: 2 }}>
            Full Stack Developer (MERN + Next.js)
          </Typography>

          <Typography sx={{ mt: 2, maxWidth: 600, mx: "auto" }}>
            I build scalable web applications with real-world backend systems.
          </Typography>

          <Box sx={{ mt: 4 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ mr: 2 }}
              component={Link}
              href="/projects"
            >
              View Projects
            </Button>

            <Button
              variant="outlined"
              color="inherit"
              component={Link}
              href="/contact"
            >
              Contact Me
            </Button>
          </Box>
        </Box>
      </motion.div>

      {/* 🛠️ SKILLS SECTION */}
      <Box sx={{ p: 6 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Skills
        </Typography>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          <Grid container spacing={3} justifyContent="center">
            {[
              "React",
              "Next.js",
              "Node.js",
              "MongoDB",
              "MySQL",
              "JavaScript",
            ].map((skill, i) => (
              <motion.div key={i} variants={fadeIn}>
                <Grid item>
                  <Card
                    sx={{
                      p: 2,
                      textAlign: "center",
                      transition: "0.3s",
                      "&:hover": {
                        transform: "scale(1.1)",
                        boxShadow: 6,
                      },
                    }}
                  >
                    <Typography>{skill}</Typography>
                  </Card>
                </Grid>
              </motion.div>
            ))}
          </Grid>
        </motion.div>
      </Box>

      {/* 💼 PROJECTS PREVIEW */}
      <Box sx={{ p: 6, background: theme.palette.background.default }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Featured Projects
        </Typography>

        <Grid container spacing={3}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {[1, 2, 3].map((item) => (
            <Grid item xs={12} md={4} key={item}>
              <motion.div
                initial="hidden"
                whileInView="show"
                variants={fadeIn}
                transition={{ duration: 0.5 }}
              >
                <Card
                  sx={{
                    transition: "0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h6">
                      Project {item}
                    </Typography>
                    <Typography variant="body2">
                      Short description of project goes here.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box textAlign="center" mt={4}>
          <Button
            variant="contained"
            component={Link}
            href="/projects"
          >
            View All Projects
          </Button>
        </Box>
      </Box>

      {/* 📢 CTA SECTION */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Box
          sx={{
            textAlign: "center",
            py: 10,
            px: 2,
            background: theme.palette.background.paper,
          }}
        >
          <Typography variant="h4">
            Let’s Build Something Together 🚀
          </Typography>

          <Button
            variant="contained"
            sx={{ mt: 3 }}
            component={Link}
            href="/contact"
          >
            Get In Touch
          </Button>
        </Box>
      </motion.div>

    </Box>
  );
}