import 'bootswatch/dist/flatly/bootstrap.css'
import PaginationBasic from './PaginationBasic'
import { useState } from 'react'

export default function ListingGrid(props) {

	const [currentPage, setCurrentPage] = useState(1);
	const [preview, setPreview] = useState(false);
	const [next, setNext] = useState(false);
	const indexOfLastPost = currentPage * props.itensPorPagina;
	const indexOfFistPage = indexOfLastPost - props.itensPorPagina;
	const currentPost = props.universidades.slice(indexOfFistPage, indexOfLastPost);

	const paginateNext = (pageNumber) => {
		setCurrentPage(pageNumber + 1);
		setNext(true);
		setPreview(false);
	};

	const paginatePreview = (pageNumber) => {
		setCurrentPage(pageNumber > 1 ? currentPage - 1 : 1);
		setPreview(true);
		setNext(false);
	};

	const paginationConfig = {
		posts: currentPost,
		totalPosts: props.universidades.length,
		itensPorPagina: props.itensPorPagina,
		currentPage: currentPage,
		indexOfLastPost: indexOfLastPost,
		indexOfFistPage: indexOfFistPage,
		preview: preview,
		next: next,
		paginateNext: paginateNext,
		paginatePreview: paginatePreview,
	};

	return (

		<div className="container d-flex flex-column mt-5">
			<table className="table">
				<thead>
					<tr>
						<th scope="col">Nome</th>
						<th scope="col">Sigla</th>
						<th scope="col">Pagina Web</th>
						<th scope="col">Domínio</th>
						<th scope="col">Estado</th>
					</tr>
				</thead>
				<tbody>
					{
						currentPost.map( (universidade, index) => {

							return (

								<tr key={index}>
									<td universidade={ universidade }>{universidade.name }</td>
									<td universidade={ universidade }>{universidade.alpha_two_code }</td>
									<td universidade={ universidade }>
										{ universidade.web_pages.length > 1 ? universidade.web_pages.map(uni => uni + " - ") : universidade.web_pages }
									</td>
									<td universidade={ universidade }>{ universidade.domains ? universidade.domains : '‒' }</td>
									<td universidade={ universidade }>{universidade.state_province ? universidade.state_province : '‒' }</td>
								</tr>

							)

						})
					}
				</tbody>
			</table>

			<PaginationBasic {...paginationConfig}/>

		</div>
	)

}
