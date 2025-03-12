import React from 'react';
import Feed from './Pages/Feed';
import SideBar from './Pages/SideBar';
import RightBar from './Pages/RightBar';
import NavBar from './Pages/NavBar';

import { Box  , Stack} from "@mui/material";
import AddPost from './Pages/AddPost';


const App = () => {

  return (
    <Box>
      <NavBar/>
      <Stack direction="row" spacing={4} justifyContent="space-between">
        <SideBar/>
        <Feed/>
        <RightBar/>
      </Stack>
      <AddPost/>
    </Box>
  )
}

export default App;