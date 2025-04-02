import { MenuItem } from "@mui/material";
import { ReactNode } from "react";
import { NavLink } from "react-router";

export default function MenuItemLink({children, to}: {children: ReactNode, to: string}) {
  return (
    <MenuItem
        component={NavLink}
        to={to}
        sx={{
            fontSize: '1.1rem',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            color: 'white',
            padding: 0,
            transition: '0.3s',
            '&:hover': {
                color: '#ff6f61'
            },
            '&.active':{
                color:' #ff6f61'
            }
        }}
    >
        {children}
    </MenuItem>
  )
}
