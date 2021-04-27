import '../styles/university.scss';
import UniversityService from '../services/universityService'
import { useEffect, useState } from 'react'
import Navbar from '../components/NavBar'
import ListingGrid from '../components/ListingGrid'
import CardForm from '../components/CardForm'
import { Container, Row, Col } from 'react-bootstrap'


export default function University() {

	const itensPorPagina = 10;
	const [universidades, setUniversidades] = useState([]);

	useEffect( () => {

		const getUniversidades = async () => {

			try {

				const result = await UniversityService.listar();
				setUniversidades(result.data);

			} catch (error) {
				console.log(error.message);
			}

		};

		getUniversidades();

	}, [] );

	return (
		<>
			<Navbar/>
			<Container>
				<Row>
					<Col xs={12}>
						<CardForm/>
					</Col>
				</Row>
				<Row>
					<Col xs={12}>
						<ListingGrid
							universidades={universidades}
							itensPorPagina={itensPorPagina}
						/>
					</Col>
				</Row>
			</Container>
		</>

	);

}
