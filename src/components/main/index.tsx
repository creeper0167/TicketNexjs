import { Delete, Edit, Visibility } from "@mui/icons-material";
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { ReactNode } from "react";

export default function Main({children}:{children: ReactNode}){
    return(        <Paper
          sx={
            {
              width: "100%",
              height: "80vh",
              borderRadius: 5,
              backgroundColor: "rgb(245 248 254)",
              boxShadow: 0,
              marginTop:'2rem',
              marginLeft: '5rem',
            }
          }
        >
          {children}
        </Paper>);
}