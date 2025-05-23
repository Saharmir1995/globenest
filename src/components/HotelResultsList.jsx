import { React } from 'react'
import './HotelResultsList.css'

export default function HotelResultsList({ results, checkIn, checkOut, adults, childs }) {

    const night = (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24);

    return (
        <div className="hotel-results">
            {results.map((result) => (
                <div className="hotel-card" key={result.id}>
                    <div className="card-img-pack">
                        <img src={result.image} className="card-img" />
                    </div>
                    <div className="card-hotel-details">
                        <h3> {result.name}</h3>
                        <span> {result.city}</span>
                        <span> {result.amenities}</span>
                    </div>

                    <div className="passenger-request">
                        <div>{night} nights</div>
                        <div>{adults} adults</div>
                        <div>{childs} children</div>
                        {/* <div>{result.capacity.adults} adults</div>
                        <div>{result.capacity.children} children</div> */}
                    </div>

                    <div className="card-price">{result.price_per_night} $ </div>
                </div>
            ))}
        </div>
    )
}