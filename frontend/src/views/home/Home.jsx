import '../../styles/home.scss';
import 'bootswatch/dist/flatly/bootstrap.css'
import React from 'react'
import UniversityService from '../../services/universityService'
import { useHistory } from 'react-router-dom';

export default function Home() {

	const history = useHistory();

	const iniciar= () => {

		UniversityService.iniciar()
		.then( result => {

			if (result.data === "OK") {
        history.push(`/api/universidades`);
			}

		})

	}

	return (

		<div className="home">
			<div className="mb-5">
				<h2 className="mb-5">Nomes e domínios das Universidades Brasileiras</h2>
				<h4>Frontend com ReactJS e API desenvolvida com Spring Boot + MongoDB.</h4>
			</div>
			<div className="btn-iniciar d-flex flex-row">
				<button type="button" className="btn-external btn btn-primary btn-lg rounded-circle" onClick={iniciar}>Iniciar!</button>
			</div>
		</div>

	);

}
