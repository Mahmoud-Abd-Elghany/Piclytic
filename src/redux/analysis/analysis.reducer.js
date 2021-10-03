const INITIAL_STATE = {
    tags: null,
    colors: null,
    isColorsLoading: false,
    isTagsLoading: false,
    isLoading: false,
    errorMsg: '',
}
export const analysisReducer = (state = INITIAL_STATE, action) => {
    switch(action){
        case 'FETCH_DATA_START':
            return{
                ...state,
                isLoading: true,
                isColorsLoading: true,
                isTagsLoading: true,
            }
        case 'FETCH_TAGS_SUCCESS':
            return{
                ...state,
                tags: action.payload,
                isTagsLoading: false
            }
        case 'FETCH_COLORS_SUCCESS':
            return{
                ...state,
                colors: action.payload,
                isColorsLoading: false
            }
        case 'FETCH_DATA_SUCCESS':
            return{
                ...StaticRange,
                isLoading: false
            }
        case 'FETCH_DATA_FAILURE':
            return{
                ...state,
                errorMsg: `${action.payload}`,
                isColorsLoading: false,
                isTagsLoading: false,
            }
        default:
            return state
    }
}