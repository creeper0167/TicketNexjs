"use client";

import { Box, Button, Divider, Link, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function LoginPage() {
  const [nationalId, setNationalId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://localhost:7160/api/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nationalId,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful: ", data);
      } else {
        alert("username or password is wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "rgb(233 237 247)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          sx={{
            backgroundColor: "rgb(245 248 254)",
            display: "flex",
            flexDirection: "column",
            borderRadius: 5,
            Width: "500px",
            height: "400px",
            gap: 2,
            padding: 5,
            boxShadow: 3,
          }}
        >
          <label style={{ textAlign: "center" }}>ورود به سامانه تیکت</label>

          <TextField
            label="شناسه ملی"
            value={nationalId}
            onChange={(e)=>setNationalId(e.target.value)}
            placeholder="شناسه ملی خود را وارد کنید"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 3,
                backgroundColor: "white",
              },
            }}
          ></TextField>
          <TextField
            type="password"
            label="رمز عبور"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="رمز عبور خود را وارد کنید"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 3,
                backgroundColor: "white",
              },
            }}
          ></TextField>
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{ borderRadius: 3 }}
          >
            ورود
          </Button>
          <Divider sx={{ mt: 4 }}></Divider>
          <Link>سامانه تیکت بستری امن در تسهیل امور</Link>
        </Paper>
      </Box>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          className="hidden md:inline"
          src="/images/servicenow-ticketing.png"
        />
      </Box>
    </Box>
  );
}
