import '../styles/home.scss';
import 'bootswatch/dist/flatly/bootstrap.css'
import React from 'react'
import { useHistory } from 'react-router-dom';

function Home() {

    const history = useHistory();

    const handleClick = () => {
        history.push('/api/universidades/externa');
    };


    return (
        <div className="home">
            <div className="mb-5">
                <h2>Esolha sua preferência!</h2>
                <h4>Consultar informações pela API externa fornecida (somente consulta) ou manipular API criada com Spring + MongoDB</h4>
            </div>

            <div className="div-home-btn d-flex flex-row">
                <button type="button" className="btn-external btn btn-primary btn-lg rounded-circle" onClick={handleClick}>API Externa</button>
                <button type="button" className="btn-mongo btn btn-secondary btn-lg rounded-circle ml-5" onClick={handleClick}>Spring + MongoDB</button>
            </div>
        </div>
    )


}

export default Home