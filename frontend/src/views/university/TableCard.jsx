import 'bootswatch/dist/flatly/bootstrap.css';
import '../../styles/tableCard.scss';
import ModalDialog from '../../components/ModalDialog';
import { useState, useCallback } from 'react';
import { Table, Row, Col } from 'react-bootstrap';
import { BsSearch, BsFillTrashFill, BsPencil } from 'react-icons/bs';
import PaginationBasic from '../../components/PaginationBasic';
import { HEADER } from '../../utils/headers/headerUniversityTable';

export default function TableCard(props) {

	const options = [10, 50, 100]
	const [prev, setPrev] = useState(false);
	const [next, setNext] = useState(false);
	const [option, setOption] = useState();
	const [university, setUniversity] = useState({})
	const [modalShow, setModalShow] = useState(false);
	const indexOfLastPost = (props.dataListing.pageable.pageNumber + 1) * props.filterParams.itemsPerPage;
	const indexOfFistPage = indexOfLastPost - props.filterParams.itemsPerPage;
	const currentPost = props.dataListing.content;

	const changeItemsPerPage =  useCallback( (event) => {
		setNextPrev(false, false);
		props.filterParams.currentPage = 0;
		props.filterParams.itemsPerPage = event.target.value;
		setOption(event.target.value);
		props.updatePagination(props.filterParams);
		window.scrollTo(0, 0);
	}, [props]);

	const paginateNext = (pageNumber) => {
		const currentPage = !props.dataListing.last ? pageNumber + 1 : props.dataListing.pageable.pageNumber ;
		props.filterParams.currentPage = currentPage;
		props.updatePagination(props.filterParams);
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
		props.updatePagination(props.filterParams);
		if (!props.dataListing.first) {
			setNextPrev(false, true);
			window.scrollTo(0, 0);
		} else  {
			setNextPrev(false, false);
		}
	};

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
		options: options,
		option: option,
		prev: prev,
		next: next,
		paginateNext: paginateNext,
		paginatePrev: paginatePrev,
		changeItemsPerPage: changeItemsPerPage,
	};

	const searchData = (text) => {
		props.filterParams.currentPage = 0;
		props.filterParams.searchString = text;
		props.updatePagination(props.filterParams);
	};

	const openModal = (item) => {
		setUniversity(item);
		setModalShow(true);
	};

	const removeItem = () => {
		props.remove(university.id);
		setModalShow(false)
	}

	return (
		<>
			<div className="card border-secondary my-4">
				<Row className="card-header d-flex flex-row align-items-center justify-content-between mx-0 py-3">
					<Col className="p-0" xs={12} md={4}>
						<h4>Lista de Universidades</h4>
					</Col>
					<Col className="px-0" xs={12} md={5}>
						<div className="form-group mb-0">
							<div className="form-group mb-0">
								<div className="input-group">
									<span className="input-group-text"><BsSearch /></span>
									<input
										className="input-search form-control"
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
										if (column.align === "center") {
											return (
												<div className="d-flex flex-row justify-content-center">
													<th width={column.width} key={index} value={column.value} scope="col">{column.name}</th>
												</div>
											)
										} else {
											return <th width={column.width} key={index} value={column.value} scope="col">{column.name}</th>
										}
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
												{university.name}
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
											<td university={ university }>{university.state_province ? university.state_province : '???' }</td>
											<td>
												<div className="d-flex flex-row justify-content-center">
													<BsPencil className="icon-action mx-1" size="1.2em" color="#2c3e50"/>
													<BsFillTrashFill className="icon-action mx-1" size="1.2em" color="#F56C6C"  onClick={() => openModal(university)}/>
												</div>
											</td>
										</tr>
									);
								})
							}
						</tbody>
					</Table>

					<PaginationBasic {...paginationConfig}/>

				</div>

			</div>

			<ModalDialog
				show={modalShow}
				removeItem={removeItem}
				onHide={() => setModalShow(false)}
			/>

		</>

	)

}
