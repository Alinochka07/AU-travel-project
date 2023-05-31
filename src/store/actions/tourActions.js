export const createTour = (tour) => {
    return (dispatch, _getState, 
        { getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('tours').add({
            ...tour,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_TOUR', tour: tour})
        }).catch((err) => {
            dispatch({type: 'CREATE_TOUR_ERROR', err})
        })
    }
};