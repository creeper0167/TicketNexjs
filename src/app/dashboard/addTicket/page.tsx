"use client";

import { useRef, useState } from "react";
import Main from "@/components/main";
import { jwtDecode } from "jwt-decode";
import NavBar from "@/components/navBar";
import SideBar from "@/components/sidebar";
import {
  AddCircle,
  ArrowBack,
  Attachment,
  Logout,
  Send,
  Settings,
  Visibility,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AddTicket() {
  const [ticketSubject, setTicketSubject] = useState("");
  const [ticketDescription, setTicketDescription] = useState("");
  const [fileName, setFileName] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useRouter();
  
  interface tokenPayload {
    name: string;
    accountId: string;
    userGroupId: string;
    roleName: string;
    fullName: string;
  }
  
  const accountId = jwtDecode<tokenPayload>(localStorage.getItem('token')!).accountId;
  const userGroupId = jwtDecode<tokenPayload>(localStorage.getItem('token')!).userGroupId;
  const token = jwtDecode<tokenPayload>(localStorage.getItem("token")!);

  const handleSubmit = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/ticket/addTicket`,
      {
        method: "POST",
        headers: {
          "Authorization" : `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          accountId,
          userGroupId,
          ticketSubject,
          ticketDescription,
        }),
      }
    );
    if (response.ok) {
      navigate.push("/dashboard");
      console.log("submit");
    } else {
      alert("Sth went Wrong");
    }
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
      console.log(selectedFile);
    }
  };
  const handlUploadButtonClick = () => {
    fileInputRef.current?.click();
  };

  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box sx={{ width: 250 }}>
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
              <AddCircle />
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
              <Settings />
              تنظیمات
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem>
          <Link href={"/logout"}>
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
              <Logout />
              خروج
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        backgroundColor: "rgb(233 237 247)",
        height: "100vh",
        boxShadow: 0,
      }}
    >
      <NavBar fullNameTitle={token.fullName} />
      <IconButton
        onClick={toggleDrawer(true)}
        sx={{
          display: {
            md: "none",
          },
          top: "50vh",
          backgroundColor: "#f5f8fe",
          padding: 2,
          borderRadius: 0,
        }}
      >
        {" "}
        <ArrowBack
          sx={{ fontSize: "2rem", position: "absolute", zIndex: 1000 }}
        />
      </IconButton>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
          gap: 5,
        }}
      >
        <SideBar />
        <Main>
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 5 }}
          >
            <h1>ثبت تیکت جدید</h1>
          </div>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              gap: 5,
              justifyContent: "center",
              padding: 5,
              direction: "rtl",
            }}
          >
            <OutlinedInput
              sx={{ backgroundColor: "white" }}
              value={ticketSubject}
              onChange={(e) => {
                setTicketSubject(e.target.value);
              }}
              endAdornment={
                <InputAdornment position="end">:موضوع</InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                dir: "rtl",
              }}
            />
            <TextField
              sx={{ backgroundColor: "white" }}
              value={ticketDescription}
              onChange={(e) => {
                setTicketDescription(e.target.value);
              }}
              multiline
              rows={7}
              placeholder="پیام خود را بنویسید..."
              inputProps={{
                dir: "rtl",
              }}
              type="text"
            ></TextField>
            <div>
              <label id="attachmentFileName">{fileName}</label>
            </div>
            <div
              className="flex flex-col gap-5 xs:flex xs:flex-col sm:flex sm:flex-row md:flex max-md:flex max-md:justify-end lg:flex sm:justify-end gap-0 sm:gap-5 xs:gap-5 sm:justify-end xs:justify-end md:justify-end lg:justify-end"
              style={{ direction: "rtl" }}
            >
              <Button
                onClick={handlUploadButtonClick}
                variant="contained"
                sx={{ borderRadius: 3, gap: 2 }}
              >
                <Attachment />
                آپلود فایل
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  hidden
                />
              </Button>
              <Button
                onClick={handleSubmit}
                variant="contained"
                sx={{ borderRadius: 3, gap: 2 }}
              >
                <Send />
                ارسال پیام
              </Button>
            </div>
            <Drawer
              open={open}
              sx={{ zIndex: 1000 }}
              onClose={toggleDrawer(false)}
            >
              {DrawerList}
            </Drawer>
          </Box>
        </Main>
      </Box>
    </Box>
  );
}
