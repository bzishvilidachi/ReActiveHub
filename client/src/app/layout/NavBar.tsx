import { Group } from '@mui/icons-material'
import { Box, AppBar, Toolbar,  Typography, Button, MenuItem } from '@mui/material'
import { NavLink } from 'react-router'
import MenuItemLink from '../shared/components/MenuItemLink'



export default function NavBar() {
    return (
        
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{
            backgroundImage: 'linear-gradient(135deg, #2d2a52, #3e7c99 70%, #6e98b7)',
            boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.15)',
            paddingY: 1.5,
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box component={NavLink} to='/' sx={{ display: 'flex', alignItems: 'center', gap: 2,  textDecoration: "none", "&:hover": { textDecoration: "none" }, "&:focus": { textDecoration: "none" }}}>
                    <Group  fontSize='large' sx={{ color: '#ff6f61' }} />
                    <Typography variant='h4' fontWeight='bold' sx={{ color: '#ffffff', letterSpacing: '1px' }}>
                        ReactiveHub
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: 3 }}>
                    <MenuItemLink  to='/activities'>
                        Activities
                    </MenuItemLink>
                    <MenuItemLink to='/createActivity' >
                        Create Activity
                    </MenuItemLink>
                </Box>

                <Button size='large' variant='contained' sx={{
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    borderRadius: '10px',
                    backgroundColor: '#ff6f61',
                    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
                    paddingX: 3,
                    transition: '0.3s',
                    '&:hover': {
                        backgroundColor: '#ff3b30',
                        boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.3)'
                    }
                }}
                onClick={() => {}}
                >
                    User menu
                </Button>
            </Toolbar>
        </AppBar>
    </Box>
    )
}
