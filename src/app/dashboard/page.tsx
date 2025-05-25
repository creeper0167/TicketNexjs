"use client";
import {jwtDecode} from 'jwt-decode';

import {
  AddCircle,
  ArrowBack,
  Logout,
  Search,
  Settings,
  Visibility,
} from "@mui/icons-material";
import {
  Box,
  Chip,
  Drawer,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  OutlinedInput,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import NavBar from "@/components/navBar";
import SideBar from "@/components/sidebar";
import Main from "@/components/main";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Page() {

  const [rows, setRows] = useState<Tickets[]>([]);
  const [total, setTotal] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [fullName, setFullName] = useState("");
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  interface Tickets {
    id: number;
    userGroup: string;
    ticketSubject: string;
    ticketStatus: string;
    ticketCreateDate: string;
  }
  
  interface tokenPayload {
    name: string,
    role: string,
    fullName: string
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
      const token = jwtDecode<tokenPayload>(localStorage.getItem('token')!);
      const res = await fetch(`https://localhost:7160/api/Ticket/GetAllTickets?page=${page + 1}&pageSize=${rowsPerPage}`, {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')!}`,
          'Content-Type': 'application/json'
        }
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();

      setRows(data.items);
      setTotal(data.totalCount);
      setFullName(token.fullName);
      console.log(token);

    } catch (err) {
      console.error("Failed to fetch tickets:", err);
    }
  };
  fetchData();
}, [page, rowsPerPage]);
  const getTicketStatusCondition=(status: string)=>{
    switch(status){
      case 'در انتظار بررسی':
        return <Chip label={status} color='success' />;
        case 'در حال بررسی':
          return <Chip label={status} color='warning' />;
          case 'بسته شد':
            return <Chip label={status} color='error' />;
            default:
              return <Chip label={status} color='error' />;
    }
  }


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
      <NavBar fullNameTitle={fullName} />
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

          <OutlinedInput
            type="search"
            sx={{ backgroundColor: "white", margin: 5, marginBottom: 0 }}
            startAdornment={
              <InputAdornment position="start">
                <Search />{" "}
              </InputAdornment>
            }
          />

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
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.ticketSubject}</TableCell>
                    <TableCell>{row.userGroup}</TableCell>
                    <TableCell>
                      {getTicketStatusCondition(row.ticketStatus)}
                      </TableCell>
                    <TableCell>{row.ticketCreateDate}</TableCell>
                    <TableCell>
                      <IconButton>
                        <Visibility />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={total}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Main>
        {/* SideBar */}
        <Drawer open={open} sx={{ zIndex: 1000 }} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </Box>
    </Box>
  );
}
