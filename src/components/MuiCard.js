import React from 'react';
import { Box, Card, CardContent, Typography, IconButton } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
const MuiCard = ({name, email, githubURL}) => {

  //copy text to clipboard
  const handleClick = () => {
    navigator.clipboard.writeText('shazbadur@gmail.com');
  }

  return (
    <Box className='center'>
      <Card className='center'>
        <CardContent className='name'>
          <Typography className='first-last-name' gutterBottom variant='h5' component='div'>{name}</Typography>
          <Typography variant='body3' component='div'>
            <IconButton onClick={handleClick}><ContentCopyIcon fontSize='small'></ContentCopyIcon></IconButton>
            {email}
          </Typography>
          <Typography variant='body3' component='div'>
            <a href="https://github.com/shaziabadur" target="_blank">{githubURL}</a>
          </Typography>
        </CardContent>      
      </Card>
    </Box>
  )
}

export default MuiCard;