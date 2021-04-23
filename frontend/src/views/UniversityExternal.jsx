import '../styles/university.scss';
import Navbar from '../components/NavBar'
import React from 'react'
import ListingGrid from '../components/ListingGrid'
// import { Provider } from 'react-redux'
// import store from '../store/'
import UniversityExternalService from '../services/universityExternalService'

class UniversityExternal extends React.Component {

	state = {
		universidades: []
	}

	async componentDidMount() {

		const result =  await UniversityExternalService.listar()

		this.setState( { universidades: result.data })

	}

	render() {

		if (this.state.universidades.length > 0 ) {

			return (

				<div>

					<Navbar></Navbar>
					<ListingGrid universities={this.state.universidades}/>

				</div>

			);

		}

		return null;

	}

}

export default UniversityExternal;