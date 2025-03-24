import { Box, Container, CssBaseline, List, ListItem, ListItemText } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
    .then(response => setActivities(response.data))

    return () => {}
  }, [])
  return (
    <>
      <CssBaseline/>
      <NavBar/>
      <Box  sx={{mt:3, mx:10}}>
        <List>
        {activities.map((activity) => (
          <ListItem key={activity.id}>
           <ListItemText>{activity.title}</ListItemText> 
          </ListItem>
        ))}
        </List>
      </Box>
      
    </>
    
  )
}

export default App
