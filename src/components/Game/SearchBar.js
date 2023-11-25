'use client'
import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({ searchOptions, handleGuess, disabled }) {
  const [inputValue, setInputValue] = useState('')
  const [selectedOption, setSelectedOption] = useState(null)

  const currentOptions = !inputValue ? [] : searchOptions.filter(x=> x.english.includes(inputValue)).slice(0, 10)

  const resetInput = () => {
    setInputValue('')
    setSelectedOption('')
  }

  const handleChangeInputValue = (newValue) => {
    setInputValue(newValue)

    const filterOption = searchOptions.filter(x=> x.english === newValue)[0] 
    const newOptionValue = filterOption ? filterOption : null

    setSelectedOption(newOptionValue)
  }

  const handleChangeOptionValue = (newValue) => {
    if (!newValue)
      setSelectedOption(null)
    
    if (!newValue['id']) {
      const filterOption = searchOptions.filter(x=> x.english === newValue)[0]

      if (!!filterOption){
        setSelectedOption(filterOption)
        return
      }
      setSelectedOption(null)
    }
    setSelectedOption(newValue)
  }

  const handleSubmit = () => {
    try {
      if(inputValue.length === 0 || !selectedOption) 
        throw new Error('Nenhum item selecionado')

      if (!selectedOption) {
        const filterOption = searchOptions.filter(x=> x.english === inputValue)[0]

        if (!!filterOption)
          throw new Error('Opção invalida')

          handleGuess(filterOption)
          resetInput()
          return 
      }

      handleGuess(selectedOption)
      resetInput()

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Autocomplete
      disabled={disabled}
      options={currentOptions}
      getOptionLabel={(option) => !!option && !!option.english ? option.english : option}
      value={selectedOption}
      fullWidth
      onChange={(_, newValue) => {handleChangeOptionValue(newValue)}}
      inputValue={inputValue}
      onInputChange={(_, newInputValue) => {handleChangeInputValue(newInputValue)}}
      isOptionEqualToValue={(option, value) => option.english === value.english}
      freeSolo
      renderOption={(props, option) => { return <li {...props} key={option.id+'-'+option.english}>{option.english}</li>}}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <SearchIcon
                style={{
                  position: 'absolute',
                  right: '8px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                }}
                onClick={handleSubmit}
              />
            ),
          }}
        />
      )}
    />
  );
}
