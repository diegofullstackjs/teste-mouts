import React from 'react';
import {Link} from 'react-router-dom'
function Card({image,title,alpha2Code,capital}) {
    const url = `/countrie/${alpha2Code}`
  return (
    <Link to={url}>
    
    <div className="rounded overflow-hidden shadow-lg h-96">
        <img className="w-full" src={image} alt="Mountain" />
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        </div>
        <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{capital}</span>
        </div>
    </div>
    </Link>
  )
}

export default Card;