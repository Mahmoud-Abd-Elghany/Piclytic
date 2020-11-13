import React, {useState, createContext} from "react"
import {key} from "./apiKey"

export const PicContext = createContext();

const Clarifai = require('clarifai');

const app = new Clarifai.App({
     apiKey: key
    });

export const PicProvider = props => {
    const [colors, setColors] = useState([{value: "null"}]);
    const [tags, setTags] = useState([{value: "null"}])
    const [image, updateImage] = useState("")


    const analyzeTags = async (image) => {
        //Tags Api
        app.models.initModel({id: Clarifai.GENERAL_MODEL, version: "aa7f35c01e0642fda5cf400f543e7c40"})
            .then(generalModel => {              
                return generalModel.predict(image);

            }).then(response => {
                 setTags(response['outputs'][0]['data']['concepts']);
              })
            }

        const analyzeColors = (image) =>{
            //Colors Api
            app.models.predict("eeed0b6733a644cea07cf4c60f87ebb7", image)
                .then(resp => setColors(resp['outputs'][0]['data']['colors']))
                };

    return(
        <PicContext.Provider value={{
            colors: colors,
            tags: tags,
            analyzeTags: analyzeTags,
            analyzeColors: analyzeColors,
            image:image,
            updateImage:updateImage,
            setTags: setTags,
            setColors: setColors,
        }}>
            {props.children}
        </PicContext.Provider>
    )
}