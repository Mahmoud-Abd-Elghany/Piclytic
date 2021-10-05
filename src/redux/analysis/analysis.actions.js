const fetchDataStart = () => ({
    type: 'FETCH_DATA_START',
})

const fetchTagsSuccess = (fetchedTags) => ({
    type: 'FETCH_TAGS_SUCCESS',
    payload: fetchedTags
})

const fetchColorsSuccess = (fetchedColors) => ({
    type: 'FETCH_COLORS_SUCCESS',
    payload: fetchedColors
})

const fetchDataSuccess = () => ({
    type: 'FETCH_DATA_SUCCESS'
})

const fetchFailure = () => ({
    type: 'FETCH_DATA_FAILURE',
})

export const clearData = () => ({
    type: 'CLEAR_DATA'
})

export const fetchStartAsync = (image) => {
    const key = '85bd1fba750143dfbb7b614b38a80189';
    const Clarifai = require('clarifai');
    const Color_Model = 'eeed0b6733a644cea07cf4c60f87ebb7';
    const app = new Clarifai.App({
        apiKey: key
    });
    return async (dispatch) => {
        try{
            await dispatch(fetchDataStart());
            //TAGS Fetching
            await app.models.initModel({id: Clarifai.GENERAL_MODEL, version: "aa7f35c01e0642fda5cf400f543e7c40"})
                .then(generalModel => { return generalModel.predict(image); })
                //.then(resp => console.log('tags: ', resp.outputs[0].data.concepts))
                .then(resp => { 
                    dispatch(fetchTagsSuccess(resp.outputs[0].data.concepts)); 
                }).catch('tags failed');

            //COLORS Fetching
            await app.models.predict(Color_Model, image, false)
            .then(resp => { 
                dispatch(fetchColorsSuccess(resp.outputs[0].data.colors)) 
            });

            await dispatch(fetchDataSuccess());

        }catch (error){
            dispatch(fetchFailure(error));
        }
       
    }
}
