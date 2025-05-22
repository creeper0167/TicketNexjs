"use client";

import { useRef, useState } from "react";
import Main from "@/components/main";
import NavBar from "@/components/navBar";
import SideBar from "@/components/sidebar";
import { CloudUpload, Send, Visibility } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";

export default function AddTicket() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleSubmit = () => {};
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
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
              label="شرح"
              inputProps={{
                dir: "rtl",
              }}
              type="text"
            ></TextField>
            <div style={{ display: "flex", gap: 5, direction: "rtl" }}>
              <Button
                onClick={handlUploadButtonClick}
                variant="contained"
                sx={{ gap: 2 }}
              >
                <CloudUpload />
                آپلود فایل
                <input
                  type="file"
                  ref={fileInputRef}
                  // onChange={handleFileChange}
                  hidden
                />
              </Button>
              <Button variant="contained" sx={{ gap: 2 }}>
                <Send />
                ثبت تیکت
              </Button>
            </div>
          </Box>
        </Main>
      </Box>
    </Box>
  );
}
