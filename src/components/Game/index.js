'use client'

import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import ImageCarousel from "./ImageCarousel";
import { useState } from "react";
import { getImageByBase64 } from "@/services/ImageService";
import SearchBar from "./SearchBar";
import GuessCard from "./GuessCard";

const MOCK_IMAGE = 'https://i.imgur.com/ffKwR4e.gif'

export default function Game({type='standard', animeData, searchOptions}) {

  const [currentImage, setCurrentImage] = useState(0)
  const [guessLevel, setGuessLevel] = useState(0)
  const [guessAnimes, setGuessAnimes] = useState([])

  const handleCorrectGuess = () => {
    setGuessLevel(4)
  }

  const handleWrongGuess = (animeGuess) => {
    console.log(animeGuess)
  }

  const increaseGuessLevel = () => {
    if (guessLevel < 4) {
      const newGuessLevel = guessLevel + 1
      setGuessLevel(newGuessLevel)
      setCurrentImage(newGuessLevel)
    }
      
  }
  

  const handleGuess = (animeGuess) => {
    if (animeGuess.id == animeData.infos.id) {
      handleCorrectGuess()
      return 
    }
      
    increaseGuessLevel()
  }

  return (
    <Box sx={{bgcolor: 'primary.black', width: '58%', minWidth: '350px', 
              p: '60px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column',
              boxShadow: '0px 0px 6px 0px #00000040'
            }}
    >
      <Box sx={{backgroundColor: 'primary.main', width: '100%', minHeight: '633px', p: '20px', borderRadius: '4px', 
              display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', boxShadow: '0px 4px 4px 0px #00000040'
            }}
      >
        <Image 
          src={animeData.images ? getImageByBase64(animeData.images[currentImage]) : MOCK_IMAGE}
          sizes="100vw"
          width={50}
          height={50}
          style={{
            width: '100%',borderRadius: '4px', border: '1px solid var(--dark)', height: '450px'
          }}
          alt='What is the anime ?'
        />
        <ImageCarousel currentGuessImage={currentImage} guessNumber={guessLevel} handleChangeImageNumber={(newNumber)=>setCurrentImage(newNumber)}/>
      </Box>
      <Typography sx={{margin: '32px 0 16px 0'}}>
        Which anime does this image belong to?
      </Typography>
      <SearchBar searchOptions={searchOptions} handleGuess={handleGuess} disabled={guessLevel >= 4}/>
      <GuessCard isCorrect/>
      <GuessCard />
    </Box>
  )
}
