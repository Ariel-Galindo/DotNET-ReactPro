import { MenuItem } from "@mui/material";
import type { ReactNode } from "react";
import { NavLink } from "react-router";

export default function MenuItemLink({
  children,
  to,
}: {
  children: ReactNode;
  to: string;
}) {
  return (
    <MenuItem
      component={NavLink}
      to={to}
      sx={{
        fontSize: "16px",
        textTransform: "uppercase",
        color: "inherit",
        borderRadius: "3px",
        "&.active": {
          backgroundColor: "rgb(2, 136, 209)",
        },
      }}
    >
      {children}
    </MenuItem>
  );
}
