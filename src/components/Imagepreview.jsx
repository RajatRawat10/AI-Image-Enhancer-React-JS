import React from 'react'
import Loading from './Loading'

const Imagepreview = (props) => {

  return (
    <div className=' mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-4xl'>
      {/* original image  */}
      <div className='rounded-xl overflow-hidden bg-gray-400 shadow-lg '>
        <h2 className='text-xl py-2 font-semibold text-center bg-gray-800 text-gray-200 '>original image</h2>
        {props.uploadImage ? <img src={props.uploadImage} alt="" className='w-full h-full object-cover ' /> : <div className='items-center flex justify-center text-black bg-gray-200 h-80 '>No image Selected </div>}

      </div>
      {/* enhanced image  */}
      <div className='rounded-xl overflow-hidden bg-gray-400 shadow-lg '>
        <h2 className='text-xl py-2 font-semibold text-center bg-blue-900 text-gray-200 '>Enhanced image</h2>
        {props.enhancdImage && !props.loading && <img src={props.enhancdImage} alt="" className='w-full h-full object-cover ' />}
        {props.loading ? <Loading /> : <div className='items-center flex justify-center text-black bg-gray-200 h-80 '>No Enhanced Image </div>}
      </div>

    </div>
  )
}

export default Imagepreview
