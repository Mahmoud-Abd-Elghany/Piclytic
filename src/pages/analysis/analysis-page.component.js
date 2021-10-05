import React from 'react'
import { useSelector } from 'react-redux'
import "./analysis-page.style.scss"
import TagsGrid from "../../components/tag-grid/tags-grid.component"
import ColorGrid from "../../components/colors-grid/color-grid.component"


const AnalysisPage = () => {
    const image = useSelector(state => state.formlink.image);
    const style = {
        backgroundImage: `url(${image})`,
    }
    return (
        <div className="grid-container">
            <div className="img-container" style ={style}>
                <img src={image}  alt="img" className="img" />
            </div>
            <div className="tagBar">
                <TagsGrid />
            </div>
            <div className="colorBar">
                <ColorGrid/>
            </div>      
        </div>
    )
}




export default AnalysisPage