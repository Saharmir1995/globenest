import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react';
import './HotelsSearch.css'


export default function HotelsSearch({ searchType, results, setResults, checkIn, checkOut, setCheckIn, setCheckOut, adults, setAdults, childs, setChilds, children, setLoading }) {

    const [city, setCity] = useState('')
    const [openCard, setOpenCard] = useState(false)


    function handleCheckIn(selectedDate) {
        setCheckIn(selectedDate);

        if (checkOut && selectedDate >= checkOut) {
            setCheckOut('')
        }
    }

    function handleCheckOut(selectedDate) {

        if (checkIn && selectedDate <= checkIn) {
            alert("Check-Out must be after Check-In.");
            return;
        }
        setCheckOut(selectedDate);
    }

    function handleDecreaseAdults() {
        if (adults > 1) {
            setAdults(prevAdults => prevAdults - 1)
        }
    }

    function handleDecreaseChildren() {
        if (childs > 0) {
            setChilds(prevChildren => prevChildren - 1)
        }
    }

    function handleIncreaseAdults() {
        if (adults < 4) {
            setAdults(prevAdults => prevAdults + 1)
        }
    }

    function handleIncreaseChildren() {
        if (childs < 4) {
            setChilds(prevChildren => prevChildren + 1)
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (city && checkIn && checkOut && adults !== null && childs !== null) {
            const url = `http://localhost:3001/hotels?city=${city}`;

            try {
                setLoading(true)
                const response = await fetch(url);
                const data = await response.json();

                const FilterHotels = data.filter((hotel) => {
                    const isAvailable = hotel.availability.some((range) => {
                        const startRange = new Date(range.start);
                        const endRange = new Date(range.end);
                        const desiredCheckIn = new Date(checkIn);
                        const desiredCheckOut = new Date(checkOut);

                        return startRange <= desiredCheckIn && endRange > desiredCheckOut;
                    });

                    return isAvailable;

                    // const hasSuitableRoom = hotel.rooms.some((room) =>
                    //   room.capacity.adults >= adults &&
                    //   room.capacity.children >= children
                    // );

                    // return hasSuitableRoom;
                });
                setResults(FilterHotels);
                console.log(results)
            } catch (error) {
                console.error("Fetching Hotel Error is :", error);
            } finally {
                setLoading(false);
            }
        }
    }


    return (
        <div className='hotel'>
            <form onSubmit={handleSubmit} className='search'>
                <div className='search-destination'>
                    <div className='search-destination-text'>
                        <p>Destination</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20">
                            <path fill="#292D32" d="M10.103 12.778L16.81 6.08a.69.69 0 0 1 .99.012a.726.726 0 0 1-.012 1.012l-7.203 7.193a.69.69 0 0 1-.985-.006L2.205 6.72a.727.727 0 0 1 0-1.01a.69.69 0 0 1 .99 0z" />
                        </svg>
                    </div>
                    <input className='input' placeholder='Where Are You Going?' type='text' value={city} onChange={(e) => setCity(e.target.value)} />
                </div>

                <Divider />

                <div className='search-check-in'>
                    <p>Check in</p>
                    <DatePicker
                        selected={checkIn}
                        onChange={handleCheckIn}
                        dateFormat="yyyy-MM-dd"
                        placeholderText="Select a check-in date"
                        className='input'
                        selectsStart
                        startDate={checkIn}
                        endDate={checkOut}
                        minDate={new Date()}
                    />
                </div>

                <Divider />

                <div className='search-check-out'>
                    <p>Check out</p>
                    <DatePicker
                        selected={checkOut}
                        onChange={handleCheckOut}
                        dateFormat="yyyy-MM-dd"
                        placeholderText="Select a check-out date"
                        className='input'
                        selectsEnd
                        startDate={checkIn}
                        endDate={checkOut}
                        minDate={checkIn || new Date()} />
                </div>

                <Divider />

                <div className='search-guest'>
                    <div className='search-guest-text'>
                        <p>Guest</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20">
                            <path fill="#292D32" d="M10.103 12.778L16.81 6.08a.69.69 0 0 1 .99.012a.726.726 0 0 1-.012 1.012l-7.203 7.193a.69.69 0 0 1-.985-.006L2.205 6.72a.727.727 0 0 1 0-1.01a.69.69 0 0 1 .99 0z" />
                        </svg>
                    </div>

                    <div className='input guest-input' onClick={() => setOpenCard(!openCard)}>{adults} {adults < 2 ? 'Adult' : 'Adults'} , {childs} {childs < 2 ? 'Child' : 'Children'}</div>


                    <div className={`search-guest-card  ${openCard ? "active" : ''}`}>
                        <div className='search-guest-card-row'>

                            <div className='search-guest-card-text'>{adults < 2 ? 'Adult' : 'Adults'}</div>

                            <div className='search-guest-card-counter'>
                                <div className='search-guest-card-counter-btns' onClick={handleDecreaseAdults}> - </div>
                                <div className='search-guest-card-counter-num'>{adults}</div>
                                <div className='search-guest-card-counter-btns' onClick={handleIncreaseAdults}> + </div>
                            </div>

                        </div>
                        <div className='search-guest-card-row'>

                            <div className='search-guest-card-text'>{childs < 2 ? 'Child' : 'Children'}</div>

                            <div className='search-guest-card-counter'>
                                <div className='search-guest-card-counter-btns' onClick={handleDecreaseChildren}> - </div>
                                <div className='search-guest-card-counter-num'> {childs} </div>
                                <div className='search-guest-card-counter-btns' onClick={handleIncreaseChildren}> + </div>
                            </div>

                        </div>
                    </div>
                </div>

                <button className='search-btn'
                    type="submit"
                    style={{ backgroundColor: searchType === 'hotel' ? '#C08B7D' : "#d7d7d7", backgroundColor: searchType === 'flight' ? "#223A60" : '#C08B7D' }}
                    onClick={() => setOpenCard(false)}
                >
                    Search
                </button>
            </form>
            <div>
                {children}
            </div>
        </div>
    )
}


function Divider() {
    return (
        <div className='divider'></div>
    )
}
