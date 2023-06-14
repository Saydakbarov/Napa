import { Close, Menu } from "@mui/icons-material";
import { Button, Drawer, IconButton, List, ListItem } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { ReactComponent as Logo } from "../../Assets/Icons/Logo.svg";
import { Pages } from "../Dashboard";
import { NavLink } from "react-router-dom";

export default function DrawerComp() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <React.Fragment>
      <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <Box
          sx={{ width: "104px", backgroundColor: "#040B14", height: "100vh" }}
        >
          <Box
            sx={{
              textAlign: "center",
              padding: "14px 8px",
              width: "70%",
              margin: "0 auto",
              borderRadius: "10px",
              mt: 3,
              background: "#543C3C",
            }}
          >
            <Logo />
          </Box>
          <List sx={{ mt: 1 }}>
            {Pages.map((v, i) => (
              <ListItem
                onClick={() => setMobileOpen(false)}
                key={v}
                sx={{
                  width: "100%",
                  textAlign: "center",
                  padding: "0px 0px 10px 10px",
                  borderRadius: "0px 20px 20px 0px !important",
                  mt: 0,
                }}
              >
                <NavLink
                  to={v.to}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  style={{ width: "100%" }}
                >
                  <Box
                    sx={{
                      padding: "10px 10px 10px 10px",
                      width: "60px",
                      borderRadius: "10px",
                    }}
                    className="Icon"
                  >
                    {v.icon}
                  </Box>
                </NavLink>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box>
        <Button
          variant="contained"
          sx={{ borderRadius: "10%", p: 1 }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <Menu />
        </Button>
      </Box>
    </React.Fragment>
  );
}
