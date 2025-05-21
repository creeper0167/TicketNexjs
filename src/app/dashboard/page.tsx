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
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 5 }}>
        <Main>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 5 }}><h1>تیکت های من</h1></div>
          <TableContainer sx={{ direction: 'rtl', marginTop: 5 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ردیف</TableCell>
                  <TableCell>شماره تیکت</TableCell>
                  <TableCell>نوع تیکت</TableCell>
                  <TableCell>موضوع</TableCell>
                  <TableCell>واحد</TableCell>
                  <TableCell>فایل ضمیمه</TableCell>
                  <TableCell>آخرین وضعیت</TableCell>
                  <TableCell>تاریخ</TableCell>
                  <TableCell>عملیات</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>248</TableCell>
                  <TableCell>راهنمایی</TableCell>
                  <TableCell>اصلاح گزارش</TableCell>
                  <TableCell>کانتینر خالی</TableCell>
                  <TableCell>ندارد</TableCell>
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
        <SideBar />
        {/* SideBar */}
      </Box>
    </Box>
  );
}
