import React from 'react'

const Loading = () => {
  return (
    <div className="flex items-center flex-col justify-center h-full w-full">
      <div className="w-20 h-20 relative rounded-full border-4 border-blue-400/30 animate-ping"></div>
      <div className="w-12 h-12 absolute border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="text-gray-600 mt-3 text-sm">Enhancing your image...</p>
    </div>
  )
}

export default Loading
