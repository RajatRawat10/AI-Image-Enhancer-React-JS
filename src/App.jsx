import React from 'react'
import Home from './components/Home'

const App = () => {
  return (
    < div className='flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white py-6 px-3'>
      {/* header */}
      <div className='text-center mb-8 '>
        <h1 className='text-4xl font-bold text-gray-500 mb-4'>Enhance Your Images Instantly with AI</h1>
        <p className='text-lg text-gray-400'>Upload your image below.</p>
      </div>
      <Home />
      {/* footer */}
      <div className='text-sm mt-7 text-gray-300 '>
        © 2025 AI Image Enhancer — Built with ❤️ by Rajat Rawat.
      </div>
    </div>
  )
}

export default App