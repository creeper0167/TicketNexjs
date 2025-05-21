import Main from "@/components/main";
import NavBar from "@/components/navBar";
import SideBar from "@/components/sidebar";
import { Box } from "@mui/material";

export default function AddTicket(){
    return (<Box       sx={{
        backgroundColor: "rgb(233 237 247)",
        height: "100vh",
        boxShadow: 0,
      }}>
        <NavBar />
        <Main />
        <SideBar />
        </Box>)
}