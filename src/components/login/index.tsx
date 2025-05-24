"use client";

import { useRouter } from "next/navigation";

import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  Paper,
  TextField,
} from "@mui/material";

import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function LoginPage() {
  const navigate = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [nationalId, setNationalId] = useState("");
  const [password, setPassword] = useState("");
  const onClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async () => {
    // try {
    //   const response = await fetch("https://localhost:7160/api/Login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       nationalId,
    //       password,
    //     }),
    //   });

    //   if (response.ok) {
    //     console.log(response);
    //     navigate.push("/dashboard");
    //   } else {
    //     alert("username or password is wrong!");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }

    const response = await fetch("https://localhost:7160/api/Login/Login", {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({nationalId, password})
    });

    if(!response.ok) throw new Error('login failed');

    const {token} = await response.json();
    localStorage.setItem('token', token);

    console.log("clicked");
    navigate.push("/dashboard");
  };

  return (
    <Box
      sx={{
        backgroundColor: "rgb(233 237 247)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
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
            fullWidth
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
            placeholder="شناسه ملی خود را وارد کنید"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 3,
                backgroundColor: "white",
                "&.Mui-focused": {
                  boxShadow: 5, // Apply shadow when focused
                },
              },
              "&:hover": {
                boxShadow: 5,
                borderRadius: 3,
              },
            }}
          ></TextField>
          <TextField
            fullWidth
            type={showPassword ? "text" : "password"}
            label="رمز عبور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="رمز عبور خود را وارد کنید"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 3,
                backgroundColor: "white",
                "&.Mui-focused": {
                  boxShadow: 5, // Apply shadow when focused
                },
              },
              "&:hover": {
                boxShadow: 1,
                borderRadius: 3,
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => onClickShowPassword()}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          ></TextField>
          <Button
            variant="contained"
            // onClick={handleSubmit}
            onClick={handleSubmit}
            sx={{ borderRadius: 3 }}
          >
            ورود
          </Button>
          <Divider sx={{ mt: 4 }}></Divider>
          <Link>سامانه تیکت بستری امن در تسهیل امور</Link>
        </Paper>
      </Box>
    </Box>
  );
}
