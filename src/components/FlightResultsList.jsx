import './FlightResultsList.css'
import { React } from 'react'

export default function FlightResultsList(results2) {

    return (
        <div>
            {results2.map((flight) => (
                <div className="flight-card" key={flight.id}>
                    <div className="flight-card-info">
                        <div className="flight-card-destination">
                            <div>{flight.from}</div>
                            <div className="flight-card-line">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                >
                                    <path
                                        fill="#223A60"
                                        d="M14.758 2a1.807 1.807 0 0 0-1.797 2l1.025 9.565l-3.8.165l-1.457-3.402A2.19 2.19 0 0 0 6.715 9C5.768 9 5 9.768 5 10.715v3.24L3.975 14a2 2 0 0 0 0 4L5 18.044v3.241C5 22.232 5.768 23 6.715 23c.876 0 1.668-.522 2.014-1.328l1.458-3.402l3.799.165L12.96 28c-.115 1.068.723 2 1.797 2c.938 0 1.786-.56 2.156-1.422l4.214-9.832c1.952.084 3.92.254 5.873.254a3 3 0 1 0 0-6c-1.953 0-3.92.17-5.872.254l-4.214-9.832A2.35 2.35 0 0 0 14.758 2"
                                    />
                                </svg>
                                <span>
                                    <div className="flight-card-stops">{flight.stops} stops</div>
                                </span>
                            </div>
                            <div>{flight.to}</div>
                        </div>

                        <div className="flight-card-airline">{flight.airline}</div>
                        <div className="flight-card-date">{flight.date}</div>
                    </div>
                    <div className="flight-card-buying">
                        <div className="flight-card-price">{flight.price} $ </div>
                        <div className="flight-card-btn"> BUY </div>
                    </div>
                </div>
            ))}
        </div>
    )
}