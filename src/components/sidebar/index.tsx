import { Delete, Edit, Visibility } from "@mui/icons-material";
import { Box, IconButton, List, ListItem, ListItemButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Link from "next/link";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function SideBar(){
    return(<Box
        sx={{
          display: "flex",
          maxWidth: "100%",
          justifyContent: "end",
          marginRight: "5rem",
          marginTop: "2rem",
          gap: 5,
        }}
      >
        

        <Paper
          sx={{
            direction: "rtl",
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
          </List>
        </Paper>
      </Box>);
}