import {useState, useEffect} from "react";
import axios_youtube from "../apis/axios_youtube.js";

const useVideos = (defaultSearchTerm) => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		search(defaultSearchTerm);
	}, [defaultSearchTerm]);

	const search = async (term) => {
		const response = await axios_youtube.get("/search", {
			params: {
				q: term
			}
		});
		
		setVideos(response.data.items);
	};

	return [videos, search];
};

export default useVideos;