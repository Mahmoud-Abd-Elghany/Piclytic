import React, {useState, createContext} from "react"
import {key} from "./apiKey"

export const PicContext = createContext();

const Clarifai = require('clarifai');

const app = new Clarifai.App({
     apiKey: key
    });

/* https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg */

export const PicProvider = props => {
    const [colors, setColors] = useState([{hex_raw: "", name: "", value: ""}]);
    const [tags, setTags] = useState([{id: "", name: "", value: "", app_id: ""}])
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
        }}>
            {props.children}
        </PicContext.Provider>
    )
}