import Main from "@/components/main";
import NavBar from "@/components/navBar";
import SideBar from "@/components/sidebar";
import { Box, Button, Paper, TextField } from "@mui/material";

interface ViewTicketProps{
    params:{
        page: string;
    };
}

export default async function ViewTicket({ params }: ViewTicketProps){
    return(
    <Box>
        <NavBar fullNameTitle={params.page} />
        <Box
        sx={{
            gap: 5,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        }}
      >
        <SideBar />
        <Main>
            <Box sx={{ height:'60vh'}}>
                <Paper sx={{minHeight:'80%', width:'80%', marginLeft:'auto',marginRight:'auto', marginTop:'1rem'}}>
                    <div>messages</div>
                </Paper>
                <Box sx={{marginTop:'3rem', padding:2}}>
                    <TextField fullWidth multiline placeholder="پیام خود را اینجا بنوسید" rows={2} sx={{marginLeft:'auto',marginRight:'auto'}}></TextField>
                    <Button sx={{marginTop:'1rem'}} variant="contained">ارسال پیام</Button>
                </Box>
            </Box>
        </Main>

      </Box>
         
    </Box>);
} 