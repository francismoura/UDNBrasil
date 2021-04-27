import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'
import React from 'react'

export default function PaginationBasic (props) {

	let activeNext = props.next;
	let activePreview = props.preview;
	let currentPage = props.currentPage;
	let totalItens = props.totalPosts;
	let itemFirst = props.indexOfFistPage + 1;
	let itemLast = props.indexOfLastPost;
	const options = [10, 50, 100];

	const PaginationBasic = (
			<Pagination className="justify-content-end">
				<label>Linhas por página</label>
				<select className="select" placeholder="Type">
					{
						options.map((option, index) => {
							return (<option style={{color:"white"}} key={index} value={option}>{option}</option>)
						})
					}
				</select>
				<>
					{itemFirst + ' - ' + itemLast + ' de ' + totalItens}
				</>

				<PageItem active={activePreview} onClick={() => { props.paginatePreview(currentPage - 1)} }>
					{"Preview"}
				</PageItem>
				<PageItem active={activeNext} onClick={() => { props.paginateNext(currentPage)} }>
					{"Next"}
				</PageItem>
			</Pagination>
	);

	return PaginationBasic;

};
