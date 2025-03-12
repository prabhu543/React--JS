import { Avatar, Box, Button, ButtonGroup, Fab, IconButton, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const StyledModal = styled(Modal)({
  display:"grid",
  placeItems:"center"
})
const UserBox = styled(Box)({
  display:"flex",
  alignItems:"center",
  gap:"10px",
  marginBottom:"20px"
})

const AddPost = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Tooltip onClick={handleOpen} title="Delete" sx={{
        position:"fixed",
        bottom:20,
        left:{xs:"calc(50% - 25px)" , md:30}
      }}>
      <Fab color="primary" aria-label="add" >
        <AddIcon />
      </Fab>
      </Tooltip>

      <StyledModal 
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={700} height={400} bgcolor="#fff" p={3}>
          <Typography variant='h6' color='gray' textAlign="center">
            Create Post</Typography>
            <UserBox>
              <Avatar
              src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              >
              </Avatar>
              <Typography>Emily </Typography>
            </UserBox>
            <TextField
            sx={{width:"100%"}}
              id="standard-multiline-static"
              // label="Multiline"
              multiline
              rows={3}
              placeholder="What's on your mind ??"
              variant="standard"
            />
            <Stack direction="row" gap={1} mt={3} mb={3}>
              <EmojiEmotionsIcon color='primary'cursor="pointer"/>
              <ImageIcon color='secondary' cursor="pointer"/>
              <VideoCameraBackIcon color='success' cursor="pointer"/>
              <PersonAddIcon color='error' cursor="pointer"/>
            </Stack>
            <ButtonGroup fullWidth variant="contained" aria-label="outlined primary group button">
              <Button>Post</Button>
              <Button sx={{width:"100px"}}><CalendarMonthIcon/></Button>
            </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  )
}

export default AddPost
