import React from 'react'

const PopUp = ({ imageUrl, onClose }) => {
  return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-8 rounded-lg z-50">
        <img src={imageUrl} alt="popup" className="w-full h-auto" />
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default PopUp
