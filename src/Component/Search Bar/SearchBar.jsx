import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { InputBase, IconButton, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

const SearchBar = () => {
  const theme = useTheme();
  const [searchText, setSearchText ] = useState();
  // console.log(searchText);
  // Custom styled components
  const CustomPaper = styled(Paper)({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    // maxWidth: '400px',
    maxWidth: '100%',
    margin: '0 auto',
    background: theme.palette.mode === 'dark' ? '#333333' : '#F7F7F7',
    boxShadow: theme.palette.mode === 'dark' ? 'none' : '0px 0px 8px rgba(0, 0, 0, 0.1)',
  });

  const CustomInputBase = styled(InputBase)({
    marginLeft: '16px',
    flex: 1,
    fontSize: '16px',
    fontWeight: 400,
    color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#666666',
  });

  const CustomIconButton = styled(IconButton)({
    padding: '8px',
    color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#666666',
  });

  return (
    <CustomPaper component="form">
      <CustomIconButton type="button">
        <SearchIcon />
      </CustomIconButton>
      <CustomInputBase value={searchText} onChange={(e) => {setSearchText(e.target.value)}} placeholder="Search by doctor's name or department" />
      <CustomIconButton>
        <FilterListIcon />
      </CustomIconButton>
    </CustomPaper>
  );
};

export default SearchBar;
