import 'bootswatch/dist/flatly/bootstrap.css'


export default function ListingGrid(props) {

	return (

		<div className="container mt-5">
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
						props.children.map( (universidade, index) => {

							return (

								<tr key={index}>
									<td universidade={ universidade  }>{universidade.name }</td>
									<td universidade={ universidade  }>{universidade.alpha_two_code }</td>
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
				<tfoot>
				</tfoot>
			</table>
		</div>
	)

}
