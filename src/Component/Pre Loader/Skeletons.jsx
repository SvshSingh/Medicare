import React from 'react';
import { Skeleton } from '@mui/material';

export default function Skeletons() {
  return (
    <div>
        <Skeleton animate='wave' variant="rounded" height={80} sx = {{mt: 4}} />
        <Skeleton animate='wave' variant="rounded" height={80} sx = {{mt: 4}} />
        <Skeleton animate='wave' variant="rounded" height={80} sx = {{mt: 4}} />
        <Skeleton animate='wave' variant="rounded" height={80} sx = {{mt: 4}} />
        <Skeleton animate='wave' variant="rounded" height={80} sx = {{mt: 4}} />
        <Skeleton animate='wave' variant="rounded" height={80} sx = {{mt: 4}} />
    </div>
  )
}
