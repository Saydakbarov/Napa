import { Box, List, ListItem, useMediaQuery, useTheme } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import DrawerComp from "../Drawer";
import "./DashboardMenu.scss";
import { ReactComponent as HomeIcon } from "../../Assets/Icons/HomeIcon.svg";
import { ReactComponent as Menu2 } from "../../Assets/Icons/Menu2Icon.svg";
import { ReactComponent as DashboardIcon } from "../../Assets/Icons/DashboardIcon.svg";
import { ReactComponent as Message } from "../../Assets/Icons/MessageIcon.svg";
import { ReactComponent as Notification } from "../../Assets/Icons/NotificatonIcon.svg";
import { ReactComponent as Settings } from "../../Assets/Icons/SettingsIcon.svg";
import { ReactComponent as LogOut } from "../../Assets/Icons/LogOutIcon.svg";
import { ReactComponent as Logo } from "../../Assets/Icons/Logo.svg";
export const Pages = [
  {
    to: "",
    icon: <HomeIcon />,
  },
  {
    to: "/menu2",
    icon: <Menu2 />,
  },
  {
    to: "/dashboard",
    icon: <DashboardIcon />,
  },
  {
    to: "/message",
    icon: <Message />,
  },
  {
    to: "/notification",
    icon: <Notification />,
  },
  {
    to: "/settings",
    icon: <Settings />,
  },
  {
    to: "/logout",
    icon: <LogOut />,
  },
];

export default function Dashboard() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ display: "flex", background: "#252836" }}>
      {!isMatch && (
        <Box
          sx={{
            width: "104px",
            backgroundColor: "#040B14",
            height: "100vh",
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
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
      )}

      <Box
        sx={{
          width: "100%",
          height: "100vh",
          overflow: "auto",
          position: "relative",
        }}
      >
        <Box sx={{ position: "absolute", right: "3%", top: "2%" }}>
          {isMatch && <DrawerComp />}
        </Box>
        <Outlet />
      </Box>
    </Box>
  );
}
