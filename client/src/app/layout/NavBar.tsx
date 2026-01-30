import { Group } from "@mui/icons-material";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  MenuItem,
  Button,
} from "@mui/material";

type Props = {
  openForm: () => void;
};

export default function NavBar({ openForm }: Props) {
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
            <MenuItem sx={{ display: "flex", gap: 2 }}>
              <Group fontSize="large" />
              <Typography variant="h6" fontWeight="bold">
                Activities
              </Typography>
            </MenuItem>
          </Box>
          <Box sx={{ display: "flex" }}>
            <MenuItem
              sx={{
                fontSize: "14px",
                textTransform: "uppercase",
              }}
            >
              Activities
            </MenuItem>
            <MenuItem
              sx={{
                fontSize: "14px",
                textTransform: "uppercase",
              }}
            >
              About
            </MenuItem>
            <MenuItem
              sx={{
                fontSize: "14px",
                textTransform: "uppercase",
              }}
            >
              Contact
            </MenuItem>
          </Box>
          <Button
            size="large"
            variant="contained"
            color="info"
            onClick={openForm}
          >
            New Activity
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
