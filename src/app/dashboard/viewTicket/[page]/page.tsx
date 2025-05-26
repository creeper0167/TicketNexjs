"use client";

import Main from "@/components/main";
import NavBar from "@/components/navBar";
import SideBar from "@/components/sidebar";
import { Box, Button, Paper, TextField } from "@mui/material";
import { useEffect, useState } from "react";

interface ViewTicketProps {
  params: {
    id: number;
  };
}
interface Chats{
    replyId: number,
    ticketId: number,
    accountId: number,
    text: string,
    replyDate: string,
}
export default function ViewTicket({ params }: ViewTicketProps) {
    const [ticketReplies, setTicketReplies] = useState<Chats[]>([]);
  useEffect(() => {
    const fetchData = async (id: number) => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/ViewTicketDetails/${id}`,
        {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")!}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error(`An error ocurred  ${response.status}`);
      }
      const data: Chats[] = await response.json();
      setTicketReplies(data);
    };

    fetchData(params.id);
  }, [params.id]);

  return (
    <Box>
      <NavBar fullNameTitle={params.id} />
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
          <Box sx={{ height: "60vh" }}>
            <Paper
              sx={{
                minHeight: "80%",
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "1rem",
              }}
            >
              <div>messages</div>
            </Paper>
            <Box sx={{ marginTop: "3rem", padding: 2 }}>
              <TextField
                fullWidth
                multiline
                placeholder="پیام خود را اینجا بنوسید"
                rows={2}
                sx={{ marginLeft: "auto", marginRight: "auto" }}
              ></TextField>
              <Button sx={{ marginTop: "1rem" }} variant="contained">
                ارسال پیام
              </Button>
            </Box>
          </Box>
        </Main>
      </Box>
    </Box>
  );
}
