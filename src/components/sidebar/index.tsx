import { Logout, Settings, Visibility } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  Paper
} from "@mui/material";
import Link from "next/link";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function SideBar() {
  return (
    <Box
      sx={{
        display: {
          xs:'none',
          md:'flex',
        },
        maxWidth: "100%",
        justifyContent: "end",
        marginLeft:{md:"3rem", lg:"5rem"},
        marginTop: "2rem",
        gap: 5,   
      }}
    >
      <Paper
        sx={{
          marginTop: "1 rem",
          backgroundColor: "rgb(245 248 254)",
          width: "300px",
          height: "80vh",
          boxShadow: 0,
          borderRadius: 5,
        }}
      >
        <List sx={{ color: "rgb(85 118 139)" }}>
          <ListItem>
            <Link href={"/dashboard/addTicket"}>
              <ListItemButton
                sx={{
                  gap: 2,
                  marginRight: "1rem",
                  "&:hover": {
                    backgroundColor: "rgb(66 195 223 / .08)",
                    borderRadius: 3,
                  },
                }}
              >
                <AddCircleIcon />
                تیکت جدید
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link href={"/dashboard"}>
              <ListItemButton
                sx={{
                  gap: 2,
                  marginRight: "1rem",
                  "&:hover": {
                    backgroundColor: "rgb(66 195 223 / .08)",
                    borderRadius: 3,
                  },
                }}
              >
                <Visibility />
                مشاهده همه تیکت ها
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link href={"/dashboard/settings"}>
              <ListItemButton sx={{
                  gap: 2,
                  marginRight: "1rem",
                  "&:hover": {
                    backgroundColor: "rgb(66 195 223 / .08)",
                    borderRadius: 3,
                  },
                }}>
                <Settings />
                تنظیمات
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link href={"/logout"}>
            <ListItemButton sx={{
                  gap: 2,
                  marginRight: "1rem",
                  "&:hover": {
                    backgroundColor: "rgb(66 195 223 / .08)",
                    borderRadius: 3,
                  },
                }}>
              <Logout />
              خروج
            </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
}
