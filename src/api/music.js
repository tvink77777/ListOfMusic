import axios from 'axios';

export function getMusic(text) {
  return axios.get(`https://itunes.apple.com/search?term=${text}`);
}

export function abc() {
  return axios.get('');
}
