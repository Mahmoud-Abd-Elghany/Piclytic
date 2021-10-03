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

const fetchFailure = (errorMsg) => ({
    type: 'FETCH_DATA_FAILURE',
    payload: errorMsg
})

export const fetchStartAsync = (image) => {
    const key = 'f16c637d19a6480092f9984c3b0b3665';
    const Clarifai = require('clarifai');
    const app = new Clarifai.App({
        apiKey: key
    });
    return async (dispatch) => {
        try{
            await dispatch(fetchDataStart());
            //TAGS Fetching
            await app.models.initModel({id: Clarifai.GENERAL_MODEL, version: "aa7f35c01e0642fda5cf400f543e7c40"})
                .then(generalModel => { return generalModel.predict(image); })
                .then(response => { 
                    dispatch(fetchTagsSuccess(response['outputs'][0]['data']['concepts'])); 
                });

            //COLORS Fetching
           await app.models.predict("eeed0b6733a644cea07cf4c60f87ebb7", image, false)
                .then(resp => dispatch(fetchColorsSuccess((resp['outputs'][0]['data']['colors']))));

            await dispatch(fetchDataSuccess());

        }catch (error){
            dispatch(fetchFailure(error));
        }
       
    }
}
