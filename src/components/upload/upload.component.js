import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ImageUploading from 'react-images-uploading';
import { setImage } from '../../redux/formlink/formlink.actions';

function UploadButton() {
    const image = useSelector(state => state.formlink.image);
    const dispatch = useDispatch();
    const maxNumber = 1;
    return (
        <div>
            <ImageUploading
                multiple
                value={image}
                onChange={ img => dispatch(setImage((img[0].data_url)))}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
            {
                ({onImageUpload}) => (
                    <button className='btn' onClick={onImageUpload}>Upload</button>
                )
                
            }
            </ImageUploading>
        </div>
    )
}

export default UploadButton
