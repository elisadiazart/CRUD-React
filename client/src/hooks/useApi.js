import { useEffect, useState } from 'react';

export const useApi = () => {
	const [data, setData] = useState([]);
	const [urlToFetch, setUrlToFetch] = useState(
		'http://localhost:3000/api/users/'
	);

	useEffect(() => {
		fetchData(urlToFetch, setData);
	}, [urlToFetch]);

	const [dataUser, setDataUser] = useState([]);
	const [urlToFetchUser, setUrlToFetchUser] = useState('');

	useEffect(() => {
		fetchData(urlToFetchUser, setDataUser);
	}, [urlToFetchUser]);

	const fetchData = async (url, setData) => {
		const response = await fetch(url);
		const data = await response.json();
		console.log(data);
		setData(data);
	};

	return { data, setUrlToFetch, setUrlToFetchUser, dataUser };
};
