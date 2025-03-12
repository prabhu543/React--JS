import { AppBar,Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar , Typography, styled} from '@mui/material'
import React, { useState } from 'react'
import Boat from '@mui/icons-material/SailingSharp';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';

const StyledToolBar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
})

const Search = styled("div")({
  backgroundColor:"white",
  color:'#000',
  padding:"0 15px",
  borderRadius:"4px",
  width:'40%'
})
const Icon = styled(Box)({
  display:"flex",
  alignItems:"center",
  gap:"20px",
})

const NavBar = () => {
  const [open , setOpen] = useState(false);

  return (
    <AppBar flex={1} position='sticky'>
      <StyledToolBar>
      <Typography variant='h6' sx={{
        display:{xs : "none" , sm:"block"}
      }}>NavBar</Typography>
      <Boat sx={{
        display:{xs : "block" , sm:"none"}
      }}/>
      <Search><InputBase placeholder='search.....'/></Search>
      <Icon>
        <Badge badgeContent={4} color="error" sx={{
          display:{xs:"none" , sm:"block"}
        }}>
          <EmailIcon color="contrastText" />
        </Badge>
        <Badge badgeContent={4} color="error" sx={{
          display:{xs:"none" , sm:"block"}
        }}>
          <NotificationsIcon color="contrastText" />
        </Badge>
        <Avatar 
        onClick={(e)=>setOpen(true)}
        alt="Remy Sharp" 
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        sx={{ width:"30px" , height:"30px"}}
        />
      </Icon>
      </StyledToolBar>

      <Menu
      onClose={e=>setOpen(false)}
        id="basic-menu"
        open={open}
        anchorOrigin={{
          vertical:"top",
          horizontal:"right"
        }}
        transformOrigin={{
          vertical:"top",
          horizontal:"right"
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default NavBar
