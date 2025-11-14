import React, { useState } from 'react'
import ImageUploader from './ImageUploader'
import Imagepreview from './Imagepreview'

const Home = () => {

    const [uploadImage, setUploadImage] = useState(null)
    const [enhancdImage, setEnhancdImage] = useState(null)
    const [loading, setloading] = useState(false)

    // file is coming from the imageuploader 
    const UploadImageHandler = (file) => {
        setUploadImage(URL.createObjectURL(file));
        setloading(true);
        
    }


    return (

        <>
            <ImageUploader UploadImageHandler={UploadImageHandler} />
            <Imagepreview loading={loading} uploadImage={uploadImage} enhancdImage={enhancdImage} />
        </>
    )
}

export default Home