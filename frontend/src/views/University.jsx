import '../styles/university.scss';
import UniversityService from '../services/universityService'
import React from 'react'
import Navbar from '../components/NavBar'
import ListingGrid from '../components/ListingGrid'

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