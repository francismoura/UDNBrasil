import '../styles/university.scss';
import React from 'react'
import Navbar from '../components/NavBar'
import axios from 'axios'
// import UniversityService from '../services/universityService'

class University extends React.Component {

    state = {
        universities: {}
    }

    componentDidMount() {

        axios.get("http://localhost:8080/api/universities/list")
        .then(result => {
            this.setState({ universities: result.data });
            console.log(this.state.universities);
        });

    }

    render() {
        return (
            <div>
                <Navbar></Navbar>
                <h1>Hello Word</h1>
            </div>
        );
    }

}

export default University;