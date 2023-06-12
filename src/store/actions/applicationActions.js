export const createApplication = (application) => {
    return (dispatch, _getState, 
        { getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('applications').add({
            ...application,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_APPLICATION', application: application})
        }).catch((err) => {
            dispatch({type: 'CREATE_APPLICATION_ERROR', err})
        })
    }
};