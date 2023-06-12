const initState = {}

const applicationReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_APPLICATION':
            console.log('created_application', action.application)
            return state;
        case 'CREATE_APPLICATION_ERROR':
            console.log('created_application_error', action.err)
            return state;
        default:
            return state;
    }
}

export default applicationReducer;