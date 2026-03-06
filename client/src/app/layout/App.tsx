import { Box, Container, CssBaseline } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet, useLocation } from "react-router";
import HomePage from "../../features/home/HomePage";

function App() {
  const location = useLocation();

  return (
    <Box sx={{ backgroundColor: "#eeeeee" }}>
      <CssBaseline />
      {location.pathname === "/" ? (
        <HomePage />
      ) : (
        <>
          <NavBar />
          <Container maxWidth="xl" sx={{ minHeight: "100vh" }}>
            <Outlet />
          </Container>
        </>
      )}
    </Box>
  );
}

export default App;
