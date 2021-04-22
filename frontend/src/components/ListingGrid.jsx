import 'bootswatch/dist/flatly/bootstrap.css'
import React from 'react'
// import { useSelector } from 'react-redux'


function ListingGrid(props) {

		return (
			<div className="container mt-5">
				<table className="table">
					<thead>
						<tr>
							<th scope="col">Nome</th>
							<th scope="col">Sigla</th>
							<th scope="col">Pagina Web</th>
							<th scope="col">Dominio</th>
							<th scope="col">Estado</th>
						</tr>
					</thead>
					<tbody>
						{
							this.universidades.map( (universidade, index) => {
								return (
									<tr key={index}>
										<td key={universidade}>{universidade.name}</td>
										<td key={universidade}>{universidade.alpha_two_code}</td>
										<td key={universidade}>{universidade.web_pages[0]}</td>
										<td key={universidade}>{universidade.domains[0]}</td>
										<td key={universidade}>{universidade.state_province ? universidade.state_province : '‒'}  </td>
									</tr>
								)
							})
						}
					</tbody>
				</table>
			</div>
		)
	}

export default ListingGrid