'use client'

import { useState } from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'

import { IconButton, Typography } from '@mui/material'

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = (hasOpen) => (event) => {
      if (
        event.type === 'keydown' &&
        ((event).key === 'Tab' ||
          (event).key === 'Shift')
      ) {
        return
      }

      setIsOpen(hasOpen)
    }

  const list = () => (
    <Box
      sx={{ width: 250, display: 'flex', flexDirection: 'column', flex: 1, padding: '24px 28px', backgroundColor: 'primary.main' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      color={'primary.black'}
    >
      <Typography sx={{fontWeight: 500}}>
        STANDARD
      </Typography>

      <List sx={{mt: '32px'}}>
        {['HOW TO PLAY', 'GAMEMODE: STANDARD', 'GAMEMODE: NO STOP', 'MY ANIME HISTORY'].map((text) => (
          <ListItem key={text} disableGutters disablePadding>
            <ListItemButton sx={[{'&:hover': {backgroundColor: 'transparent'}}]} disableGutters disablePadding>
              <ListItemText sx={{fontWeight: 400}}>{text}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Typography sx={{mt: 'auto', fontWeight: 400}}>
          ABOUT US
      </Typography>
    </Box>
  )

  return (
    <>    
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
          
        <Drawer
          anchor='left'
          open={isOpen}
          onClose={toggleDrawer(false)}
        >
          {list()}
        </Drawer>
    </>
  )
}