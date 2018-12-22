import axios from 'axios';

const API_KEY = 'AIzaSyA2AMWXep-oya68wimJnguE3U-JJsQN_Ro';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part : 'snippet',
    maxResults: 5,
    key: API_KEY
  }
});
