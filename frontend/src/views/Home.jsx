import '../styles/home.scss';
import 'bootswatch/dist/flatly/bootstrap.css'
import React from 'react'
import UniversityService from '../services/universityService'
import { useHistory } from 'react-router-dom';



function Home() {

	const history = useHistory();

	const handleClick1 = () =>{
        let path = `/api/universidades/externa`;
        history.push(path);
    }

	// const  = () => {
	// 	<Redirect to="" />
	// };

	const handleClick2 = () => {

		UniversityService.iniciar()
		.then(result => {

			if (result.data === "OK") {
				let path = `/api/universidades`;
                history.push(path);
			}
		})

	}



	return (

		<div className="home">
			<div className="mb-5">
				<h2>Esolha sua preferência!</h2>
				<h4>Consultar informações pela API externa fornecida (somente consulta) ou manipular API criada com Spring + MongoDB</h4>
			</div>
			<div className="div-home-btn d-flex flex-row">
				<button type="button" className="btn-external btn btn-primary btn-lg rounded-circle" onClick={handleClick1}>API Externa</button>
				<button type="button" className="btn-mongo btn btn-secondary btn-lg rounded-circle ml-5" onClick={handleClick2}>Spring + MongoDB</button>
			</div>
		</div>

	);






}

export default Home
