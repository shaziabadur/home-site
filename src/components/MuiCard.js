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
          <Typography variant='body3' component='div'>
            <IconButton onClick={()=>handleCopy(email)}><ContentCopyIcon fontSize='small'></ContentCopyIcon></IconButton>
            {email}
          </Typography>

          {/* Github */}
          <Typography variant='body3' component='div'>
            <IconButton><GitHubIcon></GitHubIcon></IconButton>
            <a href="https://github.com/shaziabadur" target="_blank">{githubURL}</a>
          </Typography>

          {/* LinkedIn */}
          <Typography>
            <IconButton><LinkedInIcon></LinkedInIcon></IconButton>
            <a href="https://linkedin.com/in/shazia-badur" target="_blank">{linkedInURL}</a>
          </Typography>
        </CardContent>      
      </Card>
    </Box>
  )
}

export default MuiCard;