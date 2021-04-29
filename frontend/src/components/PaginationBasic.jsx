import '../styles/pagination.scss';
import Pagination from 'react-bootstrap/Pagination'
import { Row, Col, PageItem } from 'react-bootstrap';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

export default function PaginationBasic (props) {

	const activeNext = props.next;
	const activePrev = props.prev;
	const currentPage = props.currentPage;
	const itemFirst = props.indexOfFistPage + 1;
	const itemLast = props.indexOfLastPost;
	const options = props.options;
	const totalItens = props.totalPosts;

	const paginationBasic = (

		<Row className="justify-content-end my-1">
			<Col className="col-pagination flex-row" xs={12} md="auto">
				<label className="pr-3 mb-0">Linhas por página: </label>
				<select className="select" defaultValue={10} onChange={(e) => props.changeItemsPerPage(e.target.value)}
>
					{
						options.map((option, index) => {
							return (
								<option
									key={index}
									value={option}
								>
									{option}
								</option>)
						})
					}
				</select>
			</Col>
			<Col className="col-pagination align-self-center" xs={12} md="auto">
				{itemFirst + '-' + (itemLast >= totalItens ? totalItens : itemLast) + ' de ' + totalItens}
			</Col>
			<Col className="col-pagination flex-row" xs={12} md="auto">
				<Pagination className="mb-0">
					<PageItem className="pr-1" active={activePrev} onClick={() => { props.paginatePrev(currentPage - 1)} }>
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
