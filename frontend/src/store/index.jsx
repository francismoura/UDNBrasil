import { createStore } from 'redux'
// import UniversityService from '../services/universityService'

const UNIVERSITIES = {
    data: []
}



function universities(state = UNIVERSITIES) {


    return state;
}

const store = createStore(universities);

export default store