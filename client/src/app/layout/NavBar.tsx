import { Group } from "@mui/icons-material";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  MenuItem,
} from "@mui/material";
import { NavLink } from "react-router";
import MenuItemLink from "../shared/components/MenuItemLink";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "2em" }}>
      <AppBar position="static" sx={{ backgroundColor: "#161925" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <MenuItem 
              component={NavLink}
              to="/"
              sx={{ display: "flex", gap: 2 }}>
              <Group fontSize="large" />
              <Typography variant="h6" fontWeight="bold">
                Activities
              </Typography>
            </MenuItem>
          </Box>
          <Box sx={{ display: "flex" }}>
            <MenuItemLink to="/activities">
              Activities
            </MenuItemLink>
            <MenuItemLink to="/createActivity">
              Create Activity
            </MenuItemLink>
          </Box>
          <MenuItem>User Menu</MenuItem>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
