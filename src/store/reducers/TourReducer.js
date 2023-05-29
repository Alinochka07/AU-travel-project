const initState = {}

const tourReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_TOUR':
            console.log('created_tour', action.tour)
            return state;
        case 'CREATE_TOUR_ERROR':
            console.log('created_tour_error', action.err)
            return state;
        default:
            return state;
    }
}

export default tourReducer;