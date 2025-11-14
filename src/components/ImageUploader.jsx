import React from "react";

const ImageUploader = (props) => {

  const ShowImageHandler = (e) => {
   const file = (e.target.files[0])
   if(file){
    props.UploadImageHandler(file);  
   }
  }


  return (
    <div className="bg-zinc-600 shadow-2xl rounded p-5 w-full max-w-2xl">
      <label
        htmlFor="fileInput"
        className="block cursor-pointer w-full h-20 flex flex-col items-center justify-center 
                   border-2 border-gray-400 border-dashed rounded-lg 
                   hover:bg-[#10b3be] transition-transform hover:scale-95"
      >
        {/* Hidden input but still functional */}
        <input type="file" id="fileInput" className="hidden" onChange={ShowImageHandler} />

        {/* Centered text */}
        <p className="text-gray-100 font-semibold text-center">
          Click or Drag to Upload Your Image
        </p>
      </label>
    </div>
  );
};

export default ImageUploader;
