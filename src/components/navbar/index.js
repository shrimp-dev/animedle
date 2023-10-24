import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import CoffeeIcon from '@mui/icons-material/Coffee'
import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub'
import SideBar from './sidebar'
import { NAV_LINKS } from '@/constants'

export default function Navbar() {
  return (
    <AppBar position='static'>
      <Toolbar sx={{ backgroundColor: 'primary.dark', color: 'primary.main', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
        >
          <SideBar/>
        </IconButton>
        <Typography variant='h6' noWrap component='div' color='primary.main' fontSize={32} fontFamily={'titan'}>
          Animedle
        </Typography>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px'}}>
          <IconButton href={NAV_LINKS.buy_me_a_coff}><CoffeeIcon fontSize='large'/></IconButton>
          <IconButton href={NAV_LINKS.twitter}><TwitterIcon fontSize='large'/></IconButton>
          <IconButton href={NAV_LINKS.github}><GitHubIcon fontSize='large'/></IconButton>
        </Box>
      </Toolbar>
    </AppBar>
    )
}
