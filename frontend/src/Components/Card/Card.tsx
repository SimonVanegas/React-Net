import React, { JSX } from 'react'
import './Card.css'

interface Props {
    companyName: string;
    ticker: string;
    price: number;
}

const Card: React.FC<Props> = ({companyName, ticker, price}: Props) : JSX.Element => {
  return <div className='card'>
    <img src="https://images.unsplash.com/photo-1612428978260-2b9c7df20150?ixl" alt="Boat" />
    <div className="details">
        <h2>{companyName} {ticker}</h2>
        <p>${price}</p>
    </div>
    <p className="infon">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, possimus!</p>
  </div>
}

export default Card