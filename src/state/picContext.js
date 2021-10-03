import React, {useState, createContext} from "react"

export const PicContext = createContext();
const key = 'f16c637d19a6480092f9984c3b0b3665';
const Clarifai = require('clarifai');

const app = new Clarifai.App({
     apiKey: key
    });

export const PicProvider = props => {
    const [colors, setColors] = useState([{value: "null"}]);
    const [tags, setTags] = useState([{value: "null"}]);
    const [image, setImage] = useState("");
    const [isLoading, setLoading] = useState(false);


    const fetchTags = async () => {
        //Tags Api
        app.models.initModel({id: Clarifai.GENERAL_MODEL, version: "aa7f35c01e0642fda5cf400f543e7c40"})
            .then(generalModel => {              
                return generalModel.predict(image);

            }).then(response => {
                 setTags(response['outputs'][0]['data']['concepts']);
              })
    }

    const fetchColors =  async () => {
        //Colors Api
        app.models.predict("eeed0b6733a644cea07cf4c60f87ebb7", image, false)
        .then(resp => setColors(resp['outputs'][0]['data']['colors']))
        .then(resp => console.log('resp', resp))
        };
        console.log(image)

    return(
        <PicContext.Provider value={{
            colors,
            tags,
            image,
            setImage,
            setTags,
            setColors,
            fetchColors,
            fetchTags,
            isLoading,
        }}>
            {props.children}
        </PicContext.Provider>
    )
}