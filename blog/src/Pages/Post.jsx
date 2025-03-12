import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import { ExpandMore, FavoriteBorder } from '@mui/icons-material'
import Favorite from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const Post = () => {
  return (
    <Card sx={{ margin:5 }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title="Shrimp and Chorizo Paella"
      subheader="September 14, 2016"
    />
    <CardMedia
      component="img"
      height="20%"
      image="https://imgs.search.brave.com/R5tM6PBonq-ZarGyFFqGrT2XAmmnF66luIhnC6Ej8aE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzM4LzkzLzY5/LzM2MF9GXzIzODkz/Njk2OF91VGFxVjBW/alQxWW9JQ254SW9Z/VFJ2MTQyVEdFTXZk/Ny5qcGc"
      alt="Indian dish"
    />
    <CardContent>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
      <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{
        color:"red"
      }}/>} />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
    </CardActions>
  </Card>
  )
}

export default Post
