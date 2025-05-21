import { AccountCircle } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function NavBar() {
  return (<div style={{ display: "flex", justifyContent: "center" }}>
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
        <div>
          <IconButton className="mx-auto">
            <NotificationsIcon />
          </IconButton>
        </div>
        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
          }}
        >

          <p style={{ color: "rgb(85 118 139)" }}>محمدامین ارژنگ</p>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            // onClick={handleMenu}
            // color="inherit"
            sx={{ color: "rgb(85 118 139)" }}
          >
            <AccountCircle />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  </div>);
}