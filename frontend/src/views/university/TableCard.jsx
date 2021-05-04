import 'bootswatch/dist/flatly/bootstrap.css';
import '../../styles/tableCard.scss';
import { useState, useCallback } from 'react';
import { Table, Row, Col,Container  } from 'react-bootstrap';
import { BsSearch  } from 'react-icons/bs';
import PaginationBasic from '../../components/PaginationBasic';
import { HEADER } from '../../utils/headers/headerUniversityTable';

export default function TableCard(props) {

	const options = [10, 50, 100]
	const [prev, setPrev] = useState(false);
	const [next, setNext] = useState(false);
	const indexOfLastPost = (props.dataListing.pageable.pageNumber + 1) * props.filterParams.itemsPerPage;
	const indexOfFistPage = indexOfLastPost - props.filterParams.itemsPerPage;
	const currentPost = props.dataListing.content;

	const changeItemsPerPage =  useCallback( (option) => {
		setNextPrev(false, false);
		props.filterParams.currentPage = 0;
		props.filterParams.itemsPerPage = option;
		props.updatePagination(props.filterParams);
		window.scrollTo(0, 0);
	}, [props]);

	const paginateNext = (pageNumber) => {
		const currentPage = !props.dataListing.last ? pageNumber + 1 : props.dataListing.pageable.pageNumber ;
		props.filterParams.currentPage = currentPage;
		updatePagination();
		if (!props.dataListing.last) {
			window.scrollTo(0, 0);
			setNextPrev(true, false);
		} else  {
			setNextPrev(false, false);
		}
	};

	const paginatePrev = () => {
		const currentPage = !props.dataListing.first ? props.dataListing.pageable.pageNumber  - 1 : 0;
		props.filterParams.currentPage = currentPage;
		updatePagination ();
		if (!props.dataListing.first) {
			setNextPrev(false, true);
			window.scrollTo(0, 0);
		} else  {
			setNextPrev(false, false);
		}
	};

	const updatePagination = ( () => {
		props.updatePagination(props.filterParams);
	})

	const setNextPrev = (next, prev) => {
		setNext(next);
		setPrev(prev);
	}

	const paginationConfig = {
		posts: currentPost,
		totalPosts: props.dataListing.totalElements,
		currentPage: props.dataListing.pageable.pageNumber,
		indexOfLastPost: indexOfLastPost,
		indexOfFistPage: indexOfFistPage,
		prev: prev,
		next: next,
		paginateNext: paginateNext,
		paginatePrev: paginatePrev,
		changeItemsPerPage: changeItemsPerPage,
		options: options,
	};

	const searchData = (text) => {
		props.filterParams.currentPage = 0;
		props.filterParams.searchString = text;
		props.updatePagination(props.filterParams);
	}

	return (

		<Container className="card border-secondary my-4">
			<Row className="card-header d-flex flex-row align-items-center justify-content-between">
				<Col className="p-0" xs={12} md={4}>
					<h4>Lista de Universidades</h4>
				</Col>
				<Col className="pl-0" xs={12} md={5}>
					<div className="form-group mb-0">
						<div className="form-group mb-0">
							<div className="input-group">
								<div className="input-group-prepend">
									<span className="input-group-text"><BsSearch /></span>
								</div>
								<input
									className="input-search form-control mr-0"
									type="text"
									onChange={(e) => searchData(e.target.value)}
									placeholder="Buscar por nome da universidade"
								/>
							</div>
						</div>
					</div>
				</Col>
			</Row>
			<div className="card-body d-flex flex-column">
				<Table className="table ts" bordered responsive>
					<thead>
						<tr>
							{
								HEADER.map( (column, index) => {
									return (
										<th width={column.width} key={index} value={column.value} scope="col">{column.name}</th>
									)
								})
							}
						</tr>
					</thead>
					<tbody>
						{
							currentPost.map( (university, index) => {

								return (

									<tr key={index}>
										<td university={ university }>
												<div className="column-name">
													{university.name}
                        </div>
										</td>
										<td university={ university }>
											{
												university.web_pages.length > 1 ? university.web_pages.join(", "): university.web_pages
											}
										</td>
										<td university={ university }>
											{
												university.domains.length > 1 ? university.domains.join(", ") : university.domains
											}
										</td>
										<td university={ university }>{university.state_province ? university.state_province : '‒' }</td>
									</tr>

								);

							})

						}
					</tbody>
				</Table>

				<PaginationBasic {...paginationConfig}/>

			</div>

		</Container>
	)

}
