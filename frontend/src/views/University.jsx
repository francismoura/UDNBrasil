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

    }

    render() {

        if (this.state.universidades.length > 0) {

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

export default University;