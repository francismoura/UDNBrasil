import { createStore } from 'redux'

const UNIVERSITIES = {
    data: []
}


function universities(state = UNIVERSITIES) {


    return state;
}

const store = createStore(universities);

export default store