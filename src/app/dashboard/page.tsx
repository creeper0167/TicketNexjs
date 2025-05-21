"use client";

import { AccountCircle, Delete, Edit, Visibility } from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Link from "next/link";
import NavBar from "@/components/navBar";
import SideBar from "@/components/sidebar";
import Main from "@/components/main";

export default function Page() {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(233 237 247)",
        height: "100vh",
        boxShadow: 0,
      }}
    >
      <NavBar />
      <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <Main />
        <SideBar />
        {/* SideBar */}
      </Box>{" "}
    </Box>
  );
}
