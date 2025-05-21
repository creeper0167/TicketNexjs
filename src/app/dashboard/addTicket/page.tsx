import Main from "@/components/main";
import NavBar from "@/components/navBar";
import SideBar from "@/components/sidebar";
import { Box } from "@mui/material";

export default function AddTicket() {
  return (<Box sx={{
    backgroundColor: "rgb(233 237 247)",
    height: "100vh",
    boxShadow: 0,
  }}>
    <NavBar />
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 5 }}>
        <Main>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 5 }}><h1>ثبت تیکت جدید</h1></div>
          
        </Main>
        <SideBar />
        {/* SideBar */}
      </Box>
  </Box>)
}