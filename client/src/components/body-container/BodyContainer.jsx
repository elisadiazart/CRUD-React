import { useState } from 'react';
import Header from '../header/Header';
import Main from '../main/Main';

const BodyContainer = () => {
	const [mode, setMode] = useState(null);
	return (
		<>
			<Header setMode={setMode} />
			<Main setMode={setMode} mode={mode} />
		</>
	);
};

export default BodyContainer;
