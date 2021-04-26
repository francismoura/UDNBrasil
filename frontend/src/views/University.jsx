import '../styles/university.scss';
import UniversityService from '../services/universityService'
import { useEffect, useState } from 'react'
import Navbar from '../components/NavBar'
import ListingGrid from '../components/ListingGrid'

export default function University() {

	const [universidades, setUniversidades] = useState([]);

	useEffect( () => {

		UniversityService.listar()
		.then(result => {
			setUniversidades(result.data);
		})

	}, [] );


	return (

		<div>
			<Navbar></Navbar>
			<ListingGrid>{ universidades }</ListingGrid>
		</div>

	);


}