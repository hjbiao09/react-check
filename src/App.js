import React, {useState} from "react";
import "./style.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import PreviewImage from './PreviewImage';
import CursorFollower from './CursorFollower';
import ClickDragPreview from './ClickDragPreview';
import HoverBoxPreview from './HoverBoxPreview';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}

export default function BasicGrid(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={8}>
          <Item>{props.count}<sup>12</sup></Item>
        </Grid>
        <Grid xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default function App() {
  const [count, setCount] = useState(0);

  function up() {
    setCount(count + 1);
  }
  return (
    
    <div>
      <PreviewImage
        text="Hover over me to preview image"
        imageUrl="https://www.text-image.com/samples/bird.jpg"
      />
      {/* <CursorFollower imageUrl="https://www.text-image.com/samples/bird.jpg" /> */}
      {/* <ClickDragPreview imageUrl="https://www.text-image.com/samples/bird.jpg" /> */}
      <HoverBoxPreview imageUrl="https://www.text-image.com/samples/bird.jpg" />
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <BasicButtons></ BasicButtons> 
      <Button variant="contained" onClick={up}>+1</Button>
      <p>{count}</p>
      <BasicGrid count={count}/>
    </div>
  );
}
