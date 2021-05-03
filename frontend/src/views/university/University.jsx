import '../../styles/university.scss';
import universityService from '../../services/universityService';
import { useEffect, useState } from 'react';
import Navbar from '../../components/NavBar';
import TableCard from './TableCard';
import FormCard from './FormCard';
import { Container, Row, Col } from 'react-bootstrap';

export default function University() {

	const [filterParams] = useState({
		currentPage: 0,
		itemsPerPage: 10,
		sortType: 'name,asc',
		stringSearch: '',
	});

	const [dataListing, setDataListing] = useState({});

	const updatePagination = async (params) => {
		try {
			const result = await universityService.list(params);
			setDataListing(result.data);
		} catch (error) {
			console.error(error.message);
		}
	};

	useEffect( () => {
		updatePagination(filterParams);
		console.log(filterParams);
	}, [filterParams] );

	const isEmpty = (obj) => {
		return Object.keys(obj).length !== 0
	}

	return (

		isEmpty(dataListing) &&
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
							dataListing={dataListing}
							filterParams={filterParams}
							updatePagination={updatePagination}
						/>
					</Col>
				</Row>
			</Container>
		</>

	);

}
