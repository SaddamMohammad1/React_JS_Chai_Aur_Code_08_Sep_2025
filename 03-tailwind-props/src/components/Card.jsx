import React from 'react'

function Card({ image, title, description }) {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            {/* Image */}
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
            />


            {/* Title and Description */}
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">{description}</p>
            </div>
        </div>
    )
}

export default Card
