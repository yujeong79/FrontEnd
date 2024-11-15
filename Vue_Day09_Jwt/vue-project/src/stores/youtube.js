import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router'

export const useYoutubeStore = defineStore('youtube', () => {

  const videoList = ref([]);

  const youtubeSearch = function(keyword) {
    const url = `https://www.googleapis.com/youtube/v3/search`;
    const API_KEY = `AIzaSyAdwWjg2XQMvnIuYdB-GW11N9MebrNmcVo`;
  
    axios({
      url,
      method: 'GET',
      params: {
        key: API_KEY,
        part: 'snippet',
        maxResults: 10,
        q: keyword,
        type: 'video' 
      }
    })
    .then((response)=>{
      console.log(response.data)
      videoList.value = response.data.items
    })
    .catch(()=>{})
  };

  const video = ref(null);
  const clickVideo = function(clickedVideo) {
    video.value = clickedVideo;
  };

  return { youtubeSearch, videoList, video, clickVideo };
})
