'use client'
import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({ searchOptions, updateSearchOptions }) {
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <Autocomplete
      options={searchOptions}
      getOptionLabel={(option) => option["idx-en"]}
      value={selectedOption}
      fullWidth
      onChange={(_, newValue) => {
        setSelectedOption(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(_, newInputValue) => {
        setInputValue(newInputValue);
      }}
      isOptionEqualToValue={(option, value) => option["idx-en"] === value["idx-en"]}
      freeSolo
      filterOptions={(options, params) => {
        const inputValue = params.inputValue.toLowerCase();
        return searchOptions.filter((option) =>
          option["idx-en"].toLowerCase().includes(inputValue)
        );
      }}
      renderOption={(props, option) => { return <li {...props} key={option["idx-id"]}>{option["idx-en"]}</li>}}
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
                onClick={() => {
                  console.log(selectedOption);
                }}
              />
            ),
          }}
        />
      )}
    />
  );
}
