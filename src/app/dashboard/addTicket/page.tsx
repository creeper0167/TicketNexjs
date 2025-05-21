import Main from "@/components/main";
import NavBar from "@/components/navBar";
import SideBar from "@/components/sidebar";
import { Box, Button, FormControl, TextField } from "@mui/material";

export default function AddTicket() {
  const handleSubmit = ()=>{

  };

  return (<Box sx={{
    backgroundColor: "rgb(233 237 247)",
    height: "100vh",
    boxShadow: 0,
  }}>
    <NavBar />
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 5 }}>
      <Main>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 5 }}><h1>ثبت تیکت جدید</h1></div>
        <Box sx={{display:'flex', width:'100%', flexDirection:'column',gap:5, justifyContent:'center', padding:5, direction:'rtl'}}>
          <TextField sx={{ backgroundColor: 'white' }} label="عنوان تیکت" type="text"></TextField>
          <TextField sx={{ backgroundColor: 'white' }} multiline rows={7} label="شرح" type="text"></TextField>
          <Button variant="contained">
            ثبت تیکت
          </Button>
        </Box>
      </Main>
      <SideBar />
    </Box>
  </Box >)
}