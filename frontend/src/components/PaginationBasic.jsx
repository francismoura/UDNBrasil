import '../styles/pagination.scss';
import Pagination from 'react-bootstrap/Pagination'
import { Row, Col, PageItem } from 'react-bootstrap';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
// import { useState } from 'react';

export default function PaginationBasic (props) {

	const activeNext = props.next;
	const activePrev = props.prev;
	const currentPage = props.currentPage;
	const indexFirst = props.indexOfFistPage + 1;
	const indexLast = props.indexOfLastPost;
	const totalPosts = props.totalPosts;

	const paginationBasic = (

		<Row className="justify-content-end my-1">
			<Col className="col-pagination flex-row" xs={12} md="auto">
				<label className="pr-3 mb-0">Linhas por página: </label>
				<select
					className="select"
					name="option"
					value={props.option}
					defaultValue={10}
					onChange={(e) => props.changeItemsPerPage(e)}
				>
					{
						props.options.map((option, index) => {
							return (
								<option key={index}	value={props.options[index]}> {option} </option>)
						})
					}
				</select>
			</Col>
			<Col className="col-pagination align-self-center" xs={12} md="auto">
				{indexFirst + '-' + (indexLast >= totalPosts ? totalPosts : indexLast) + ' de ' + totalPosts}
			</Col>
			<Col className="col-pagination flex-row" xs={12} md="auto">
				<Pagination className="mb-0">
					<PageItem className="pr-1" active={activePrev} onClick={() => { props.paginatePrev()} }>
						<BsChevronLeft/>
					</PageItem>
					<PageItem active={activeNext} onClick={() => { props.paginateNext(currentPage)} }>
						<BsChevronRight/>
					</PageItem>
				</Pagination>
			</Col>
		</Row>
	);

	return paginationBasic;

};
