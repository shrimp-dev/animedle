import { Poppins, Titan_One } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

const poppins = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const titanOne = Titan_One({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})


const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#F28500',
      black: '#242423',
      dark: '#333533',
      white: '#F2F3F4',
      orange: '#FF9D26',
      green: '#4DA167',
      red: '#E02F40',
    }
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
    titan: titanOne.style.fontFamily
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
})

export default theme