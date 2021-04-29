import '../../styles/university.scss';
import UniversityService from '../../services/universityService';
import { useEffect, useState } from 'react';
import Navbar from '../../components/NavBar';
import TableCard from './TableCard';
import FormCard from './FormCard';
import { Container, Row, Col } from 'react-bootstrap';

export default function University() {

	const [universities, setUniversities] = useState([]);

	useEffect( () => {
		const getUniversities = async () => {
			try {
				const result = await UniversityService.listar();
				setUniversities(result.data);
			} catch (error) {
				console.log(error.message);
			}
		};
		getUniversities();
	}, [] );

	return (
		<>
			<Navbar/>
			<Container fluid="sm">
				<Row>
					<Col>
						<FormCard/>
					</Col>
				</Row>
				<Row>
					<Col>
						<TableCard
							universities={universities}
						/>
					</Col>
				</Row>
			</Container>
		</>

	);

}
