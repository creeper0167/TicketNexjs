"use client";

import { useRef, useState } from "react";
import Main from "@/components/main";
import NavBar from "@/components/navBar";
import SideBar from "@/components/sidebar";
import { Attachment, Send } from "@mui/icons-material";
import {
  Box,
  Button,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";

export default function AddTicket() {
  const [fileName, setFileName] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleSubmit = () => {console.log("submit")};
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setFileName(e.target.files[0].name)
      console.log(selectedFile);
    }
  };
  const handlUploadButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Box
      sx={{
        backgroundColor: "rgb(233 237 247)",
        height: "100vh",
        boxShadow: 0,
      }}
    >
      <NavBar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
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
            <div style={{ display: "flex", gap: 5, direction: "rtl", justifyContent:"end" }}>
              <Button
                onClick={handlUploadButtonClick}
                variant="contained"
                sx={{ borderRadius:3, gap: 2 }}
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
              <Button onClick={handleSubmit} variant="contained" sx={{borderRadius:3, gap: 2 }}>
                <Send />
                ارسال پیام
              </Button>
            </div>
          </Box>
        </Main>
      </Box>
    </Box>
  );
}
