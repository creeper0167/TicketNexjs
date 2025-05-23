"use client";

import LoginPage from "@/components/login";
import { ArrowLeft } from "@mui/icons-material";


export default function Home() {
  return (
    <div>
      <ArrowLeft sx={{position:'absolute', zIndex:1000}}/>
      <LoginPage />
    </div>
  );
}
