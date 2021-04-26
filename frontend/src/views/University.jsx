import '../styles/university.scss';
import UniversityService from '../services/universityService'
import { useEffect, useState } from 'react'
import Navbar from '../components/NavBar'
import ListingGrid from '../components/ListingGrid'

export default function University() {

	const [universidades, setUniversidades] = useState([]);

	const getUniversidades = async () => {
		try {
			const result = await UniversityService.listar();
			setUniversidades(result.data);
		} catch (error) {
			console.log(error.message);
		}
	}

	useEffect( () => {
			getUniversidades()
	}, [] );

	return (

		<div>
			<Navbar></Navbar>
			<ListingGrid>{ universidades }</ListingGrid>
		</div>

	);


}