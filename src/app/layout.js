import { Box } from '@mui/material'
import '@/styles/global.css'
import { Navbar } from '@/components/Navbar';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import HelloMessage from '@/components/HelloMessage';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <HelloMessage/>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              minHeight: '100vh'
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
