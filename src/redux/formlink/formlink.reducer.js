const INITIAL_STATE = {
    image: ''
}

export const formLinkReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_IMAGE':
            return{
                ...state,
                image: action.payload
            }
        default:
            return state
    }
}