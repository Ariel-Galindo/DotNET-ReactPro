import { Box, Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <Paper
      sx={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        height: "100vh",
        background: '#161925'
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          color: "white",
          gap: 3,
        }}
      >
        <Typography variant="h1">Reactivities</Typography>
      </Box>
      <Typography variant="h3">Welcome to reactivities</Typography>
      <Button
        component={Link}
        to="/activities"
        size="large"
        variant="outlined"
        color="inherit"
        sx={{ height: 60, fontSize: "1.5rem" }}
      >
        Take me to the activities!
      </Button>
    </Paper>
  );
}
