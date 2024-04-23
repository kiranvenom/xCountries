import React, { useEffect, useState } from 'react';
import Flag from './Flag';
import axios from 'axios';

const AllFlags = () => {
	const [countries, setCountries] = useState([]);

	const getCountries = async () => {
		try {
			const { data } = await axios.get(
				'https://restcountries.com/v3.1/all',
			);
			setCountries(data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getCountries();
	}, []);

	console.log(countries);
	return (
		<div className='h-screen max-w-[1200px] m-auto my-6'>
			<div className='m-1 grid grid-cols-7'>
				{countries.map((country) => (
					<Flag key={country.cca3} data={country} />
				))}
			</div>
		</div>
	);
};

export default AllFlags;
