import React, { useState, useEffect } from 'react';

import { Box, Stack, Typography } from '@mui/material';
import { SideBar, Videos } from './';

import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {
  // Calling the fetchFromAPI function using React.useEffect();

  const [selectedCategory, setSelectedCategory] = useState('New');
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`);
  }, [selectedCategory]);
  // as the dependencies array is empty that means the code will always run once the page is loaded
  return (
    <Stack
      sx={{
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <Box
        sx={{
          // background: 'purple',
          height: { xs: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { xs: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: '#fff' }}
        >
          Copyright 2023 Saurav Kumar Verma
        </Typography>
      </Box>

      <Box
        p={2}
        sx={{
          overflowY: 'auto',
          height: '90vh',
          flex: 2,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{
            color: 'white',
          }}
        >
          {selectedCategory} <span style={{ color: '#F31503' }}>videos</span>
        </Typography>

        <Videos videos={[]} />
      </Box>
    </Stack>
  );
};

export default Feed;
