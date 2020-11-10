import React, {useState, useContext} from 'react';
import "../../style/formLink.css";
import {withRouter} from "react-router-dom";
import {PicContext} from "../../state/picContext"
import Analyzed from '../Analyze/Analyzed';


const FormLink = (props) => {
    const {analyzeTags, analyzeColors,updateImage} = useContext(PicContext)

    const redirect = () =>{
        props.history.push('/Analyze')
    }
    const [image, setImage]= useState("");

    const imageSubmitter =  (e) => {
        e.preventDefault()
        console.log(image);
        if(image){
            analyzeTags(image);
            analyzeColors(image);
            updateImage(image);
            setTimeout(() => redirect(),750);
        }
    }
    return (
        <div className="form_container">
            <form onSubmit={imageSubmitter}>
                <p className="paragraph">Place your image to analyze the colors and the components of the image</p>
                <div className="inputForm">
                    <input className="input" type="text" placeholder="Copy your image address here.." value={image} onChange={e => setImage(e.target.value)}/>
                    <button className="btn" type="submit">Analyze</button>
                </div>
            </form>
            <img className="image" src={image} alt=""/>
        </div>
    )
};

export default withRouter(FormLink);