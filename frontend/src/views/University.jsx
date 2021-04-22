import '../styles/university.scss';
import Navbar from '../components/NavBar'
import React from 'react'
import ListingGrid from '../components/ListingGrid'
// import { Provider } from 'react-redux'
// import store from '../store/'
// import axios from 'axios'
import UniversityService from '../services/universityService'

class University extends React.Component {

    state = {
        universidades: []
    }

    async componentDidMount() {
        const result =  await UniversityService.listar()
        this.setState( { universidades: result.data })
        console.log('result', result.data)
    }

    render() {
        return (
            <div>
                <Navbar></Navbar>
                <ListingGrid universities={this.state.universidades}/>
            </div>
    );
    }


}

export default University;