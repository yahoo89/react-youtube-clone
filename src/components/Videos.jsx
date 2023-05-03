import { Box, Stack } from '@mui/material'
import React from 'react'
import { ChannelCard, Loader, VideoCard } from './'

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />

  //newArr return array without video.id.playlistId
  const newArr = videos.filter(
    (video) => video.id.videoId || video.id.channelId
  )
  return (
    <Stack
      direction={direction || 'row'}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {newArr.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos
