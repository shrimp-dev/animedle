import { Box } from '@mui/material'
import React from 'react'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import LockIcon from '@mui/icons-material/Lock'

export default function ImageCarousel({currentGuessImage = 0, guessNumber = 0, }) {
  const RenderLockGuess = ({guessLevel}) => {
    const hasLock = guessLevel > guessNumber
    const selected = currentGuessImage === guessLevel 

    const style = {
      backgroundColor: hasLock ? 'primary.dark' : 'primary.main',
      filter: selected ? 'drop-shadow(2px 4px 10px var(--dark));' : 'brightness(1)',
      border: hasLock ? '2px solid var(--black)' : '2px solid var(--white)',
      color: hasLock ? 'primary.black' : 'primary.white',
      borderRadius: '4px',
      width: '105px',
      height: '78px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: hasLock ? 'not-allowed' : 'pointer'
    }


    return (
      <Box sx={style}>
        {
          hasLock ? <LockIcon/> : <LockOpenIcon/>
        }
      </Box>
    )
  }

  return (
    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px'}}>
      <RenderLockGuess guessLevel={0}/>
      <RenderLockGuess guessLevel={1}/>
      <RenderLockGuess guessLevel={2}/>
      <RenderLockGuess guessLevel={3}/>
      <RenderLockGuess guessLevel={4}/>
    </Box>
  )
}
