import 'bootswatch/dist/flatly/bootstrap.css';
import '../../styles/tableCard.scss';
import { useState, useCallback } from 'react';
import { Table } from 'react-bootstrap';
import PaginationBasic from '../../components/PaginationBasic';
import { HEADER } from '../../utils/headers/headerUniversityTable';

export default function TableCard(props) {

	const options = [10, 50, 100]
	const [itemsPerPage, setItemsPerPage] = useState(10);
	const [currentPage, setCurrentPage] = useState(1);
	const [prev, setPrev] = useState(false);
	const [next, setNext] = useState(false);
	const indexOfLastPost = currentPage * itemsPerPage;
	const indexOfFistPage = indexOfLastPost - itemsPerPage;
	const currentPost = props.universities.slice(indexOfFistPage, indexOfLastPost);
	const limitPage = Math.ceil(props.universities.length / itemsPerPage) - 1;

	const changeItemsPerPage =  useCallback( (numberItems) => {
		setItemsPerPage(numberItems);
		setCurrentPage(1);
		setNext(false);
		setPrev(false);
	},[]);

	const paginateNext = (pageNumber) => {
		setCurrentPage(pageNumber <= limitPage ? pageNumber + 1 : currentPage);
		setNext(true);
		setPrev(false);
	};

	const paginatePrev = (pageNumber) => {
		setCurrentPage(pageNumber > 1 ? currentPage - 1 : 1);
		setPrev(true);
		setNext(false);
	};

	const paginationConfig = {
		posts: currentPost,
		totalPosts: props.universities.length,
		currentPage: currentPage,
		indexOfLastPost: indexOfLastPost,
		indexOfFistPage: indexOfFistPage,
		prev: prev,
		next: next,
		paginateNext: paginateNext,
		paginatePrev: paginatePrev,
		changeItemsPerPage: changeItemsPerPage,
		options: options,
	};

	return (

		<div className="card border-secondary my-4">
			<div className="card-header d-flex flex-row align-items-center justify-content-between">
				<h4>Lista de Universidades</h4>
				<form className="form-inline my-2 my-lg-0">
					<input className="form-control mr-sm-2" type="text" placeholder="Nome da universidade"/>
					<button className="btn btn-success my-2 my-sm-0" type="submit">Buscar</button>
				</form>
			</div>
			<div className="card-body d-flex flex-column">
				<Table className="table" bordered responsive>
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
										<td university={ university }>{university.name }</td>
										<td university={ university }>
											{ university.web_pages.length > 1 ? university.web_pages.join(", "): university.web_pages }
										</td>
										<td university={ university }>{ university.domains.length > 1 ? university.domains.join(", ") : university.domains}</td>
										<td university={ university }>{university.state_province ? university.state_province : '‒' }</td>
									</tr>
								)
							})
						}
					</tbody>
				</Table>

				<PaginationBasic {...paginationConfig}/>

			</div>
		</div>
	)

}
