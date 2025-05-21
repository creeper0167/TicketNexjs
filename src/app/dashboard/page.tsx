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
      <Box>
        <SideBar />
        <Paper
          sx={
            {
              // width: "52vw",
              // height: "80vh",
              // borderRadius: 5,
              // backgroundColor: "rgb(245 248 254)",
              // boxShadow: 0,
            }
          }
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            <h1 style={{ fontWeight: 900 }}>تیکت های من</h1>
          </div>

          <TableContainer
            style={{
              direction: "rtl",
              marginTop: "3rem",
              justifyContent: "center",
            }}
          >
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow style={{ textAlign: "center" }}>
                  <TableCell>ردیف</TableCell>
                  <TableCell>شماره تیکت</TableCell>
                  <TableCell>نوع تیکت</TableCell>
                  <TableCell>موضوع</TableCell>
                  <TableCell>نام واحد</TableCell>
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
                  <TableCell>دارد</TableCell>
                  <TableCell>در حالی بررسی</TableCell>
                  <TableCell>1403/20/23</TableCell>
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
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>244</TableCell>
                  <TableCell>راهنمایی</TableCell>
                  <TableCell>اصلاح گزارش</TableCell>
                  <TableCell>کانتینر خالی</TableCell>
                  <TableCell>دارد</TableCell>
                  <TableCell>
                    <span
                      style={{
                        backgroundColor: "rgb(250 195 150 / .5)",
                        borderRadius: 2,
                        padding: "0.5rem",
                      }}
                    >
                      در حالی بررسی
                    </span>
                  </TableCell>
                  <TableCell>1403/20/23</TableCell>
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
        </Paper>
        {/* SideBar */}
      </Box>{" "}
    </Box>
  );
}
