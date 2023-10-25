import Image from 'next/image'
import React from 'react'
import Shrimp from '@/assets/shrimp.jpg'
import { Box } from '@mui/material'

export default function Page() {
  return (
    <Box sx={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', mt: '24px', borderRadius: '8px'}}>
      <Image 
        src={Shrimp}
        alt='Shrimp'
        width={850}
        height={850}
      />
    </Box>
  )
}
