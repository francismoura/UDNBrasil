import '../../styles/university.scss';
import universityService from '../../services/universityService';
import { useEffect, useState } from 'react';
import Navbar from '../../components/NavBar';
import TableCard from './TableCard';
import FormCard from './FormCard';
import { Container, Row, Col } from 'react-bootstrap';

export default function University() {

	const [university] = useState({
		name: '',
    state_province: 'Estados...',
    web_pages: [],
    domains: [],
	});

	const [filterParams] = useState({
		currentPage: 0,
		itemsPerPage: 10,
		sortType: 'name,asc',
		searchString: '',
	});

	const [dataListing, setDataListing] = useState({});

	const remove = async (id) => {
		try{
			const result = await universityService.remove(id)
			if (result) {
				updatePagination(filterParams);
			}
		} catch (error)   {
			console.error(error);
		}
	}

	const updatePagination = async (params) => {
		try {
			const result = await universityService.list(params);
			setDataListing(result.data);
		} catch (error) {
			console.error(error.message);
		}
	};

	const save = async (params) => {
		try {
			const result = await universityService.save(params);
			if (result) {
				updatePagination(filterParams);
			}
		} catch (error) {
			console.error(error.message);
		}
	};

	useEffect( () => {
		updatePagination(filterParams);
	}, [filterParams] );

	const isEmpty = (obj) => {
		return Object.keys(obj).length !== 0
	}

	return (

		isEmpty(dataListing) &&
		<>
			<Navbar/>
			<Container>
				<Row>
					<Col>
						<FormCard
							university={university}
							save={save}
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						<TableCard
							dataListing={dataListing}
							filterParams={filterParams}
							updatePagination={updatePagination}
							remove={remove}
						/>
					</Col>
				</Row>
			</Container>
		</>

	);

}
