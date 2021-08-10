import axios from 'axios';

const KEY = 'AIzaSyAUsN7IWSLhj6fQaRjVmW8CuFIny8ty5h8';

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: '5',
		key: KEY
	}
});
