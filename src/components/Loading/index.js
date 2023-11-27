import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'

export default function Loading() {
  return (
    <Box sx={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', flex: 1, flexDirection: 'column', gap: '32px'}}>
      <CircularProgress size={100} />
      <Typography color='primary.orange' fontWeight='bold'>Carregando</Typography>
    </Box>
  )
}