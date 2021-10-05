import React from 'react';
import "./formlink-page.style.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setImage } from '../../redux/formlink/formlink.actions';
import { fetchStartAsync } from '../../redux/analysis/analysis.actions';


const FormLinkPage = (props) => {
    const image = useSelector(state => state.formlink.image);
    const dispatch = useDispatch();
    const onClickHandler = () => {
        if(image){
            dispatch(fetchStartAsync(image));
        }
    }
    return (
        <div className="form_container">
                <p className="paragraph">Place your image to analyze the colors and the components of the image</p>
                <div className="inputForm">
                    <input className="input" type="text" placeholder="Copy your image address here.." value={image} onChange={e => dispatch(setImage(e.target.value))}/>
                    <Link to='/Analyze' className="btn" onClick={onClickHandler}><div className='text'>AnalyZe</div></Link>
                </div>
            <img className="image" src={image} alt=""/>
        </div>
    )
};

export default FormLinkPage;