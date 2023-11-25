import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import CoffeeIcon from '@mui/icons-material/Coffee'
import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub'
import SideBar from '@/components/Navbar/Sidebar'
import { NAV_LINKS } from '@/constants'
import Link from 'next/link'

export default function Navbar() {
  return (
    <AppBar position='static' elevation={0}>
      <Toolbar sx={{ backgroundColor: 'primary.dark', color: 'primary.main', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <SideBar/>
        <Link href='/'>
          <Typography variant='h6' noWrap component='div' color='primary.main' fontSize={32} fontFamily={'titan'}>
            Animedle
          </Typography>
        </Link>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px'}} >
          <IconButton href={NAV_LINKS.buy_me_a_coff} target="_blank">
            <CoffeeIcon fontSize='large' sx={{ color:'primary.main', '&:hover': {color: 'primary.white'}}}/>
          </IconButton>

          <IconButton href={NAV_LINKS.twitter} target="_blank">
            <TwitterIcon fontSize='large' sx={{ color:'primary.main','&:hover': {color: 'primary.white'}}}/>
          </IconButton>

          <IconButton href={NAV_LINKS.github} target="_blank">
            <GitHubIcon fontSize='large' sx={{ color:'primary.main','&:hover': {color: 'primary.white'}}}/>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
    )
}
