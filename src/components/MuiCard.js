import React from 'react';
import { Box, Card, CardContent, Typography, IconButton, Icon } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const MuiCard = ({name, email, githubURL, linkedInURL}) => {

  //copy text to clipboard
  const handleCopy = (url) => {
    navigator.clipboard.writeText(url);
  }

  return (
    <Box className='center'>
      <Card className='center'>

          <CardContent className='name'>
            {/* Name */}
            <Typography className='first-last-name' variant='body3' component='div'>
              {name}
            </Typography>

            {/* Email */}
            <IconButton className='name' onClick={()=> handleCopy(email)}><ContentCopyIcon onClick={()=> handleCopy(email)} fontSize='smaller'></ContentCopyIcon></IconButton>
              {email}

            {/* Github LinkedIn*/}
            <Typography className='links' variant='body3' component='div'>
              <a href="https://github.com/shaziabadur" target="_blank"><GitHubIcon fontSize='large'></GitHubIcon></a>
              <a href="https://linkedin.com/in/shazia-badur" target="_blank"><LinkedInIcon fontSize='large'></LinkedInIcon></a>
            </Typography>
        
        </CardContent>     
      </Card>
    </Box>
  )
}

export default MuiCard;