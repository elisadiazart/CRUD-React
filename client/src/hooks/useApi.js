import { useEffect, useState } from 'react';

export const useApi = () => {
    const [data, setData] = useState([]);
	const [urlToFetch, setUrlToFetch] = useState(
		'http://localhost:3000/api/users/'
	);

    useEffect(() => {
		fetchData(urlToFetch, setData);
	}, [urlToFetch]);

    const fetchData = async (url, setData) => {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
    };

    return {data}
}