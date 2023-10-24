import { Box } from '@mui/material'
import ImageBg from '@/assets/imageBg.svg'
import '@/styles/global.css'
import Navbar from '@/components/navbar';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              minHeight: '100vh',
              backgroundImage: `url(${ImageBg.src})`,
              backgroundSize: 'auto',
            }}
          >
            <Navbar/>
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  )
}
