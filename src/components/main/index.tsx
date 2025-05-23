import { Paper } from "@mui/material";
import { ReactNode } from "react";

export default function Main({children}:{children: ReactNode}){
    return(        <Paper
          sx={
            {
              width: {xs:'80%', md:"100%"},
              height: "80vh",
              borderRadius: 5,
              backgroundColor: "rgb(245 248 254)",
              boxShadow: 0,
              marginTop:{xs:'2rem',md:'2rem', lg:'2rem'},
              marginRight: {xs:'auto', md:'3rem', lg:'5rem'},
              marginLeft:{xs:'auto', md:'2rem', lg:'0'}
            }
          }
        >
          {children}
        </Paper>);
}