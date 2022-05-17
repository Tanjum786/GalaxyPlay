import axios from 'axios'
import React from 'react'

export const SinglevideoApi = async(videoId,setvideo) => {
  try {
      const response=await axios.get(`/api/video/${videoId}`)
      setvideo(response.data.video)
  } catch (error) {
      console.error(error)
  }
}
