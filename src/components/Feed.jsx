import React, { useState, useEffect } from 'react';

import { Box, Stack, Typography } from '@mui/material';
import SideBar from './SideBar';
const Feed = () => {
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
        <SideBar />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: '#fff' }}
        >
          Copyright 2023 Saurav Kumar Verma
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;
