import { AccountCircle } from "@mui/icons-material";
import { AppBar, Button, IconButton, Toolbar } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function NavBar({fullNameTitle}) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <AppBar
        sx={{
          boxShadow: 0,
          background: "rgb(245 248 254)",
          maxWidth: "90%",
          height: "5%",
          borderBottomLeftRadius: "40px",
          borderBottomRightRadius: "40px",
        }}
        position="static"
      >
        <Toolbar sx={{}}>
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span className="hover:bg-sky-100 rounded-full">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                sx={{ color: "rgb(85 118 139)" }}
              >
                <AccountCircle />
              </IconButton>
              <Button sx={{ color: "rgb(85 118 139)" }}>{fullNameTitle}</Button>
            </span>
          </div>
          <div>
            <IconButton className="mx-auto hover:bg-sky-100">
              <NotificationsIcon className="hover:bg-sky-100"/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
