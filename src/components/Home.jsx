import React, { useState } from 'react'
import ImageUploader from './ImageUploader'
import Imagepreview from './Imagepreview'
import { enhancedImageAPI } from '../utils/EnhancedImageAPI'

const Home = () => {

    const [uploadImage, setUploadImage] = useState(null)
    const [enhancdImage, setEnhancdImage] = useState(null)
    const [loading, setloading] = useState(false)

    // file is coming from the imageuploader 
    const UploadImageHandler = async (file) => {
        setUploadImage(URL.createObjectURL(file));  //converting the file into URL
        setloading(true);
        try {
            const enhancedURL = await enhancedImageAPI(file);
            setEnhancdImage(enhancedURL);
            setloading(false);
        } catch (error) {
            // code to handle the error
            console.log(error);
            alert("Error while enhancing the image. Please try again later");
        }
    }


    return (

        <>
            <ImageUploader UploadImageHandler={UploadImageHandler} />
            <Imagepreview loading={loading} uploadImage={uploadImage} enhancdImage={enhancdImage} />
        </>
    )
}

export default Home