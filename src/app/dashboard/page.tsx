"use client";

import { AddCircle, ArrowBack, Delete, Edit, Logout, Settings, Visibility } from "@mui/icons-material";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import NavBar from "@/components/navBar";
import SideBar from "@/components/sidebar";
import Main from "@/components/main";
import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () =>{
    setOpen(newOpen);
  }

  const DrawerList = (
    <Box sx={{width:250}}>
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
              <ListItemButton sx={{
                  gap: 2,
                  marginRight: "1rem",
                  "&:hover": {
                    backgroundColor: "rgb(66 195 223 / .08)",
                    borderRadius: 3,
                  },
                }}>
                <Settings />
                تنظیمات
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link href={"/logout"}>
            <ListItemButton sx={{
                  gap: 2,
                  marginRight: "1rem",
                  "&:hover": {
                    backgroundColor: "rgb(66 195 223 / .08)",
                    borderRadius: 3,
                  },
                }}>
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
      <NavBar />
      <IconButton onClick={toggleDrawer(true)} sx={{
        display: {
          md: 'none',
        },
        top: '50vh',
        backgroundColor: '#f5f8fe',
        padding: 2,
        borderRadius: 0

      }}> <ArrowBack sx={{ fontSize: '2rem', position: 'absolute', zIndex: 1000 }} />
      </IconButton>

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
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 5 }}
          >
            <h1>تیکت های من</h1>
          </div>
          <TableContainer sx={{ marginTop: 5, padding: 5 }}>
            <Table>
              <TableHead sx={{ backgroundColor: "white" }}>
                <TableRow>
                  <TableCell>شماره تیکت</TableCell>
                  <TableCell>عنوان</TableCell>
                  <TableCell>واحد</TableCell>
                  <TableCell>آخرین وضعیت</TableCell>
                  <TableCell>تاریخ</TableCell>
                  <TableCell>عملیات</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>248</TableCell>
                  <TableCell>اصلاح گزارش</TableCell>
                  <TableCell>کانتینر خالی</TableCell>
                  <TableCell>در حال بررسی</TableCell>
                  <TableCell>1404/20/20</TableCell>
                  <TableCell>
                    <IconButton>
                      <Visibility></Visibility>
                    </IconButton>
                    <IconButton>
                      <Edit></Edit>
                    </IconButton>
                    <IconButton>
                      <Delete></Delete>
                    </IconButton>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Main>
        {/* SideBar */}
        <Drawer open={open} sx={{zIndex:1000}} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </Box>
    </Box>
  );
}
